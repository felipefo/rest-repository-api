"use strict";
/*@author: Felipe F. de Oliveira

*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConnectionBase_1 = __importDefault(require("./ConnectionBase"));
const RepositoryBase_1 = __importDefault(require("./RepositoryBase"));
const UserRepository_1 = __importDefault(require("./UserRepository"));
// Definição das classes de repositório disponíveis
// Classe singleton para gerenciar a criação e recuperação de instâncias de repositório
class RepositoryFactory {
    constructor() {
        this.repositories = {
            user: new UserRepository_1.default(new ConnectionBase_1.default('user')),
        };
    }
    // Método estático para obter a instância singleton
    static getInstance() {
        if (!RepositoryFactory.instance) {
            RepositoryFactory.instance = new RepositoryFactory();
        }
        return RepositoryFactory.instance;
    }
    // Função para criar uma instância de repositório com base no tipo fornecido
    createRepository(type) {
        const repository = this.repositories[type]; // tipos registrados
        if (!repository) {
            const connection = new ConnectionBase_1.default(type);
            const defaultRepository = new RepositoryBase_1.default(connection);
            this.addNewRepository(defaultRepository, type.toLowerCase()); //adding to repository list
            return defaultRepository;
        }
        return repository;
    }
    // Função para adicionar um novo repositório
    addNewRepository(repo, type) {
        this.repositories[type.toLowerCase()] = repo;
    }
}
exports.default = RepositoryFactory;
