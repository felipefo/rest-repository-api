import IConnectionBase from './IConnectionBase';
declare class ConnectionBase implements IConnectionBase {
    private path;
    private apiBaseUrl;
    constructor(path: string);
    post(data: any, options?: {
        id?: string;
        token?: string;
    }): Promise<any>;
    get(params?: any, token?: string): Promise<any>;
    update(id: string, data: any, token?: string): Promise<any>;
    getById(id: string, token?: string): Promise<any>;
    remove(id: string, token?: string): Promise<any>;
    private createHeaders;
}
export default ConnectionBase;
