/* eslint-disable @typescript-eslint/no-explicit-any */

// src/repositories/TodoRepository.js
import ConnectionBase from './ConnectionBase';
import IUserRepository from './IUserRepository';
import RepositoryBase from './RepositoryBase';

//TODO: implementar IUserRepository
class UserRepository extends RepositoryBase implements IUserRepository {

  private connectionLogin = new ConnectionBase('login');
  private connectionRecovery = new ConnectionBase('recovery');
  
  constructor(connectionBase: ConnectionBase) {
    super(connectionBase);
}

  async login(userData: any) {
    const response =  this.connectionLogin.post(userData);
    return response;
  }

  async passwordRecovery(userData: any) {
    const response =  this.connectionRecovery.post(userData);
    return response;
  }
}

export default UserRepository;