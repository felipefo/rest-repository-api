import ConnectionBase from './ConnectionBase';
import IRepositoryBase from './IRepositoryBase';
declare class RepositoryBase implements IRepositoryBase {
    protected connectionBase: ConnectionBase;
    constructor(connectionBase: ConnectionBase);
    add(todoData: any, token?: string): Promise<any>;
    update(todoData: any, id: string, token?: string): Promise<any>;
    delete(todoData: any, token?: string): Promise<void>;
    getById(id: string, token?: string): Promise<any>;
    get(todoData: any, token?: string): Promise<any>;
}
export default RepositoryBase;
