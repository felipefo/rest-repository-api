import IRepositoryBase from './IRepositoryBase';
declare class RepositoryFactory {
    private static instance;
    private repositories;
    static getInstance(): RepositoryFactory;
    createRepository(type: string): IRepositoryBase;
    addNewRepository(repo: IRepositoryBase, type: string): void;
}
export default RepositoryFactory;
