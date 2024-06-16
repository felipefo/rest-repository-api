import ConnectionBase from './ConnectionBase';
import IUserRepository from './IUserRepository';
import RepositoryBase from './RepositoryBase';
declare class UserRepository extends RepositoryBase implements IUserRepository {
    private connectionLogin;
    private connectionRecovery;
    constructor(connectionBase: ConnectionBase);
    login(userData: any): Promise<any>;
    passwordRecovery(userData: any): Promise<any>;
}
export default UserRepository;
