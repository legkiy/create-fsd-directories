import * as fs from 'fs';
import path from 'path';
// Функция для создания директории и файла index.ts
function createDirectoryWithIndex(baseDir: string, dirName: string) {
  const fullPath = path.join(baseDir, dirName);

  // Создание Директория
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`\nДиректория создана:\n${fullPath}`);
  } else {
    console.log(`!! Директория с именем ${dirName} уже существует:\n${fullPath}`);
    return;
  }

  // Создание файлов
  const indexPath = path.join(fullPath, 'index.ts');
  if (!fs.existsSync(indexPath)) {
    fs.writeFileSync(indexPath, '', 'utf8');
  }
}
