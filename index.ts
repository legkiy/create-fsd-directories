#!/usr/bin/env node
import { CreateDirType } from '@/model';
import CreateDirService from '@/lib';

// Чтение аргументов из командной строки и устанавливаем первую букву заглавной
const args = process.argv.slice(2);
const folderName = args?.[1]?.replace(/^./, (char) => char.toUpperCase());
const createType = args[0] as CreateDirType;

const createService = new CreateDirService(folderName, createType);

if (folderName) {
  createService.create();
} else {
  console.error('Ошибка: Укажите название директории');
  process.exit(1);
}
