import IGenericUseCase from "./IGenericUseCase";
declare class GenericUseCase implements IGenericUseCase {
    private repository;
    private entity;
    private token;
    constructor(entity: string);
    getById(id: string): Promise<string>;
    create(data: any): Promise<string>;
    getAll(data: any): Promise<any>;
    delete(data: any): Promise<string>;
    update(data: any): Promise<string>;
}
export default GenericUseCase;
