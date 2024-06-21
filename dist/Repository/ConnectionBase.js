"use strict";
/*@author: Felipe F. de Oliveira
*/
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
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
const axios_1 = __importDefault(require("axios"));
const config_1 = __importDefault(require("../config"));
class ConnectionBase {
    constructor(path) {
        this.path = path;
        if (process.env.API_URL != undefined) //only for vue projects 
         {
            this.apiBaseUrl = process.env.API_URL;
            console.debug(`API URL is ${this.apiBaseUrl}`);
        }
        else if (this.apiBaseUrl == undefined)
            this.apiBaseUrl = config_1.default;
        // throw new Error('apiurl nao esta setada, por favor, verifique o arquivo ./src/config.js');
        if (this.apiBaseUrl == undefined)
            throw new Error('process.env.API_URL, por favor, verifique os arquivos de variavel de ambiente .env');
    }
    post(data, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, token } = options || {};
            try {
                const headers = this.createHeaders(token);
                const url = id ? `${this.apiBaseUrl}/${this.path}/${id}` : `${this.apiBaseUrl}/${this.path}`;
                const response = yield axios_1.default.post(url, data, { headers });
                return response.data;
            }
            catch (error) {
                console.error(`Failed to post: ${error.message}`);
                throw error;
            }
        });
    }
    get(params, token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const headers = this.createHeaders(token);
                const url = `${this.apiBaseUrl}/${this.path}`;
                const response = yield axios_1.default.get(url, { headers, params });
                return response.data;
            }
            catch (error) {
                console.error(`Failed to get: ${error.message}`);
                throw error;
            }
        });
    }
    update(id, data, token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const headers = this.createHeaders(token);
                const url = `${this.apiBaseUrl}/${this.path}/${id}`;
                const response = yield axios_1.default.put(url, data, { headers });
                return response.data;
            }
            catch (error) {
                console.error(`Failed to update: ${error.message}`);
                throw error;
            }
        });
    }
    getById(id, token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const headers = this.createHeaders(token);
                const url = `${this.apiBaseUrl}/${this.path}/${id}`;
                const response = yield axios_1.default.get(url, { headers });
                return response.data;
            }
            catch (error) {
                console.error(`Failed to get by id: ${error.message}`);
                throw error;
            }
        });
    }
    remove(id, token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const headers = this.createHeaders(token);
                const url = `${this.apiBaseUrl}/${this.path}/${id}`;
                const response = yield axios_1.default.delete(url, { headers });
                return response.data;
            }
            catch (error) {
                console.error(`Failed to delete: ${error.message}`);
                throw error;
            }
        });
    }
    createHeaders(token) {
        const headers = {
            'Content-Type': 'application/json',
        };
        if (token) {
            headers.Authorization = `Bearer ${token}`;
        }
        return headers;
    }
}
exports.default = ConnectionBase;
