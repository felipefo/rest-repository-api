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
Object.defineProperty(exports, "__esModule", { value: true });
class RepositoryBase {
    constructor(connectionBase) {
        this.connectionBase = connectionBase;
    }
    add(todoData, token) {
        return __awaiter(this, void 0, void 0, function* () {
            if (token) {
                const response = yield this.connectionBase.post(todoData, { 'token': token });
                return response;
            }
            else {
                const response = yield this.connectionBase.post(todoData);
                return response;
            }
        });
    }
    update(todoData, id, token) {
        return __awaiter(this, void 0, void 0, function* () {
            if (id) {
                if (token) {
                    const response = yield this.connectionBase.post(todoData, { 'id': id, 'token': token });
                    return response;
                }
                else {
                    const response = yield this.connectionBase.post(todoData, { 'token': token });
                    return response;
                }
            }
            else
                throw new Error('Identificador eh obrigatorio para a atualizacao desta entidade');
        });
    }
    delete(todoData, token) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connectionBase.post(todoData, { 'token': token });
        });
    }
    getById(id, token) {
        return __awaiter(this, void 0, void 0, function* () {
            let response;
            if (token)
                response = yield this.connectionBase.getById(id, token);
            else
                response = yield this.connectionBase.getById(id, token);
            return response;
        });
    }
    get(todoData, token) {
        return __awaiter(this, void 0, void 0, function* () {
            let response;
            if (token)
                response = yield this.connectionBase.get(todoData, token);
            else
                response = yield this.connectionBase.get(todoData);
            return response;
        });
    }
}
exports.default = RepositoryBase;
