interface IGenericUseCase {
    create(data: any): Promise<string>;
    getAll(data: any): Promise<string>;
    getById(id: string): Promise<string>;
    delete(data: any): Promise<string>;
    update(data: any): Promise<string>;
  }
export default IGenericUseCase;