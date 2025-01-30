import * as path from 'path';
import * as fs from 'fs';
import { CreateDirType } from '../model';

const DIR_MAP = {
  [CreateDirType.Entities]: path.resolve('src', CreateDirType.Entities),
  [CreateDirType.Features]: path.resolve('src', CreateDirType.Features),
  [CreateDirType.Widgets]: path.resolve('src', CreateDirType.Widgets),
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
      console.error(`!! Директория с именем < ${this._folderName} > уже существует:\n${fullPath}`);
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
    console.log(`\nДиректория ${subDir ? '< ' + subDir + ' > ' : ''}создана:\n${dirPath}`);

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
