#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = __importDefault(require("./src/lib"));
// Чтение аргументов из командной строки и устанавливаем первую букву заглавной
const args = process.argv.slice(2);
const folderName = (_a = args === null || args === void 0 ? void 0 : args[1]) === null || _a === void 0 ? void 0 : _a.replace(/^./, (char) => char.toUpperCase());
const createType = args[0];
const createService = new lib_1.default(folderName, createType);
if (folderName) {
    createService.create();
}
else {
    console.error('Ошибка: Укажите название директории');
    process.exit(1);
}
