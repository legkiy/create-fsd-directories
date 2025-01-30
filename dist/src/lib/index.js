"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
const DIR_MAP = {
    ["e" /* CreateDirType.Entities */]: path.resolve('src', 'entities'),
    ["f" /* CreateDirType.Features */]: path.resolve('src', 'features'),
    ["w" /* CreateDirType.Widgets */]: path.resolve('src', 'widgets'),
};
const subDirs = ['lib', 'model', 'ui'];
class CreateDirService {
    constructor(folderName, createType) {
        this._folderName = folderName;
        this._root_dir = DIR_MAP[createType];
    }
    create() {
        const fullPath = path.resolve(this._root_dir, this._folderName);
        // Если такая директория уже существует то завершаем
        if (fs.existsSync(fullPath)) {
            console.error(`!! Directory with the name <${this._folderName}> already exists: \ n ${fullPath}`);
            process.exit(1);
        }
        else {
            this._createDirectoryWithIndex(fullPath);
            subDirs.forEach((subFolder) => {
                this._createDirectoryWithIndex(fullPath, subFolder);
            });
        }
    }
    _createDirectoryWithIndex(fullPath, subDir = '') {
        const dirPath = path.join(fullPath, subDir);
        fs.mkdirSync(dirPath, { recursive: true });
        console.log(`\Directory ${subDir ? '< ' + subDir + ' > ' : ''}created:\n${dirPath}`);
        this._createIndexFile(dirPath);
    }
    // Создание файлов
    _createIndexFile(dirPath) {
        const indexPath = path.join(dirPath, 'index.ts');
        if (!fs.existsSync(indexPath)) {
            fs.writeFileSync(indexPath, '', 'utf8');
            console.error(`${indexPath}`);
        }
    }
}
exports.default = CreateDirService;
