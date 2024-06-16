/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// src/repositories/TodoRepository.js
import ConnectionBase from './ConnectionBase';
import IRepositoryBase from './IRepositoryBase';

class RepositoryBase implements IRepositoryBase {

    protected connectionBase;

    constructor(connectionBase: ConnectionBase) {
        this.connectionBase = connectionBase;
    }
    async add(todoData: any, token?: string) {
        if (token) {
            const response = await this.connectionBase.post(todoData, {'token': token });
            return response;
        } else {
            const response = await this.connectionBase.post(todoData);
            return response;
        }
    }
    async update(todoData: any, id: string, token?: string) {
        if (id) {
            if (token) {
                const response = await this.connectionBase.post(todoData, { 'id': id, 'token': token });
                return response;
            } else {
                const response = await this.connectionBase.post(todoData, {'token': token });
                return response;
            }
        } else
            throw new Error('Identificador eh obrigatorio para a atualizacao desta entidade');
    }
    async delete(todoData: any, token?: string) {
        await this.connectionBase.post(todoData,  {'token': token });
    }
    async getById(id: string, token?: string) {
        let response;
        if (token) 
            response = await this.connectionBase.getById(id, token);
        else 
            response = await this.connectionBase.getById(id, token);
        return response;
    }

    async get(todoData: any, token?: string) {
        let response;
        if (token) 
            response = await this.connectionBase.get(todoData, token);
        else
            response = await this.connectionBase.get(todoData);
        return response;
    }
}

export default RepositoryBase;
