interface IConnectionBase {
    post(data: any, options?: {
        id?: string;
        token?: string;
    }): Promise<any>;
    get(data: any, token: string): Promise<any>;
    update(id: string, data: any, token?: string): Promise<any>;
    getById(id: string, token?: string): Promise<any>;
    remove(id: string, token?: string): Promise<any>;
}
export default IConnectionBase;
