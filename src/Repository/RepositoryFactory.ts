import ConnectionBase from './ConnectionBase';
import IRepositoryBase from './IRepositoryBase';
import RepositoryBase from './RepositoryBase';
import UserRepository from './UserRepository';

// Definição das classes de repositório disponíveis
// Classe singleton para gerenciar a criação e recuperação de instâncias de repositório

class RepositoryFactory {
  private static instance: RepositoryFactory;
  private repositories: { [key: string]: IRepositoryBase } = {
    user: new UserRepository(new ConnectionBase('user')),
  };


  // Método estático para obter a instância singleton
  public static getInstance(): RepositoryFactory {
    if (!RepositoryFactory.instance) {
      RepositoryFactory.instance = new RepositoryFactory();
    }
    return RepositoryFactory.instance;
  }

  // Função para criar uma instância de repositório com base no tipo fornecido
  public createRepository(type: string): IRepositoryBase {
    const repository = this.repositories[type]; // tipos registrados
    if (!repository) {
      const connection = new ConnectionBase(type);
      const defaultRepository = new RepositoryBase(connection);
      this.addNewRepository(defaultRepository, type.toLowerCase());//adding to repository list
      return defaultRepository;
    }
    return repository;
  }


  // Função para adicionar um novo repositório
  public addNewRepository(repo: IRepositoryBase, type: string): void {
    this.repositories[type.toLowerCase()] = repo;
  }
}

export default RepositoryFactory;
