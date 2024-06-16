"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
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
// src/repositories/TodoRepository.js
const ConnectionBase_1 = __importDefault(require("./ConnectionBase"));
const RepositoryBase_1 = __importDefault(require("./RepositoryBase"));
//TODO: implementar IUserRepository
class UserRepository extends RepositoryBase_1.default {
    constructor(connectionBase) {
        super(connectionBase);
        this.connectionLogin = new ConnectionBase_1.default('login');
        this.connectionRecovery = new ConnectionBase_1.default('recovery');
    }
    login(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = this.connectionLogin.post(userData);
            return response;
        });
    }
    passwordRecovery(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = this.connectionRecovery.post(userData);
            return response;
        });
    }
}
exports.default = UserRepository;
