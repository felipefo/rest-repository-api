"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//TODO: fazer o resto das requisicoes relacionadas a autenticacao
const RepositoryFactory_1 = __importDefault(require("../Repository/RepositoryFactory"));
class AuthUseCase {
    constructor() {
        this.repositoryFactory = RepositoryFactory_1.default.getInstance();
    }
    login(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const repo = this.repositoryFactory.createRepository('user');
                const token = yield repo.login(data);
                this.saveTokenToLocalStorage(token.token);
                return token;
            }
            catch (error) {
                throw new Error(`Failed to login: ${error.message}`);
            }
        });
    }
    recovery(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const repo = this.repositoryFactory.createRepository('user');
                const token = yield repo.passwordRecovery(data);
                this.saveTokenToLocalStorage(token.token);
                return token;
            }
            catch (error) {
                throw new Error(`Failed to login: ${error.message}`);
            }
        });
    }
    saveTokenToLocalStorage(token) {
        localStorage.setItem('authToken', token);
    }
    getTokenFromLocalStorage(token) {
        localStorage.setItem('authToken', token);
    }
}
exports.default = AuthUseCase;
