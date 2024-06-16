"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GenericUseCase_1 = __importDefault(require("./GenericUseCase"));
// Serviço para gerenciar a criação e recuperação de instâncias de repositório
const GenericUseCaseFactory = {
    createUseCase(type) {
        const usecase = new GenericUseCase_1.default(type.toLowerCase());
        return usecase;
    }
};
exports.default = GenericUseCaseFactory;
