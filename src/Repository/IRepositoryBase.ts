/* eslint-disable @typescript-eslint/no-explicit-any */
interface IRepositoryBase {
    add(todoData: any, token: string): Promise<any>;
    update(todoData: any, id: string, token?: string): Promise<any>;
    delete(todoData: any, token: string): Promise<any>;
    getById(todoData: any, id: string, token?: string): Promise<any>;
    get(todoData: any, token: string): Promise<any>;
}

export default IRepositoryBase;