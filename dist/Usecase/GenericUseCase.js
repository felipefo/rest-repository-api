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
const RepositoryFactory_1 = __importDefault(require("../Repository/RepositoryFactory"));
class GenericUseCase {
    constructor(entity) {
        const repo = RepositoryFactory_1.default.getInstance();
        this.repository = repo.createRepository(entity);
        this.entity = entity;
        this.token = localStorage.getItem('authToken') || '';
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dataCreated = yield this.repository.getById(id, this.token);
                return dataCreated;
            }
            catch (error) {
                throw new Error(`Failed create ${this.entity}: ${error.message}`);
            }
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dataCreated = yield this.repository.add(data, this.token);
                return dataCreated;
            }
            catch (error) {
                throw new Error(`Failed create ${this.entity}: ${error.message}`);
            }
        });
    }
    getAll(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dataCreated = yield this.repository.get(data, this.token);
                return dataCreated;
            }
            catch (error) {
                throw new Error(`Failed create ${this.entity}: ${error.message}`);
            }
        });
    }
    delete(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dataCreated = yield this.repository.add(data, this.token);
                return dataCreated;
            }
            catch (error) {
                throw new Error(`Failed create ${this.entity}: ${error.message}`);
            }
        });
    }
    update(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dataCreated = yield this.repository.add(data, this.token);
                return dataCreated;
            }
            catch (error) {
                throw new Error(`Failed create ${this.entity}: ${error.message}`);
            }
        });
    }
}
exports.default = GenericUseCase;
