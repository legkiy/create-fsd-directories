import * as path from 'path';
import * as fs from 'fs';
import { CreateDirType } from '../model';

const DIR_MAP = {
  [CreateDirType.Entities]: path.resolve('src', 'entities'),
  [CreateDirType.Features]: path.resolve('src', 'features'),
  [CreateDirType.Widgets]: path.resolve('src', 'widgets'),
};

const subDirs = ['lib', 'model', 'ui'];

class CreateDirService {
  private _folderName: string;

  private _root_dir: string;

  constructor(folderName: string, createType: CreateDirType) {
    this._folderName = folderName;
    this._root_dir = DIR_MAP[createType];
  }

  create() {
    const fullPath = path.resolve(this._root_dir, this._folderName);

    // Если такая директория уже существует то завершаем
    if (fs.existsSync(fullPath)) {
      console.error(
        `!! Directory with the name <${this._folderName}> already exists: \ n ${fullPath}`
      );
      process.exit(1);
    } else {
      this._createDirectoryWithIndex(fullPath);

      subDirs.forEach((subFolder) => {
        this._createDirectoryWithIndex(fullPath, subFolder);
      });
    }
  }

  private _createDirectoryWithIndex(fullPath: string, subDir: string = '') {
    const dirPath = path.join(fullPath, subDir);

    fs.mkdirSync(dirPath, { recursive: true });
    console.log(
      `\Directory ${subDir ? '< ' + subDir + ' > ' : ''}created:\n${dirPath}`
    );

    this._createIndexFile(dirPath);
  }

  // Создание файлов
  private _createIndexFile(dirPath: string) {
    const indexPath = path.join(dirPath, 'index.ts');
    if (!fs.existsSync(indexPath)) {
      fs.writeFileSync(indexPath, '', 'utf8');
      console.error(`${indexPath}`);
    }
  }
}

export default CreateDirService;
