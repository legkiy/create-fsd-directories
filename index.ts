#!/usr/bin/env node
import { CreateDirType } from './src/model';
import CreateDirService from './src/lib';

// Чтение аргументов из командной строки и устанавливаем первую букву заглавной
const args = process.argv.slice(2);

if (args.length < 2) {
  console.error(
    'Error: Indicate the type of directory and its name. Example: "F Myfolder"'
  );
  process.exit(1);
}

const folderName = args?.[1]?.replace(/^./, (char) => char.toUpperCase());
const createType = args[0] as CreateDirType;

const createService = new CreateDirService(folderName, createType);

if (folderName) {
  createService.create();
} else {
  console.error('Error: Indicate the name of the Directory');
  process.exit(1);
}
