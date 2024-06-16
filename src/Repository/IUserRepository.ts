interface IUserRepository {
    login(userData: any, token: string): Promise<any>;
  }

export default IUserRepository;