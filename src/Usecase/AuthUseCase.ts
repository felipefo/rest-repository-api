//TODO: fazer o resto das requisicoes relacionadas a autenticacao
import RepositoryFactory from '../Repository/RepositoryFactory';
import UserRepository from '../Repository/UserRepository';
import IAuthUseCase from './IAuthUseCase';


 
class AuthUseCase implements IAuthUseCase {
  private repositoryFactory: RepositoryFactory;

  constructor() {
    this.repositoryFactory = RepositoryFactory.getInstance();
  }

  public async login(data: any): Promise<string> {
    try {
      const repo = <UserRepository>this.repositoryFactory.createRepository('user');
      const token = await repo.login(data);
      this.saveTokenToLocalStorage(token.token);
      return token;
    } catch (error: any) {
      throw new Error(`Failed to login: ${error.message}`);
    }
  }

  public async recovery(data: any): Promise<string> {
    try {
      const repo = <UserRepository>this.repositoryFactory.createRepository('user');
      const token = await repo.passwordRecovery(data);
      this.saveTokenToLocalStorage(token.token);
      return token;
    } catch (error: any) {
      throw new Error(`Failed to login: ${error.message}`);
    }
  }
  private saveTokenToLocalStorage(token: string): void {
    localStorage.setItem('authToken', token);
  }

  private getTokenFromLocalStorage(token: string): void {
    localStorage.setItem('authToken', token);
  }
}

export default AuthUseCase;
