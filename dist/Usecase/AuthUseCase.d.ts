import IAuthUseCase from './IAuthUseCase';
declare class AuthUseCase implements IAuthUseCase {
    private repositoryFactory;
    constructor();
    login(data: any): Promise<string>;
    recovery(data: any): Promise<string>;
    private saveTokenToLocalStorage;
}
export default AuthUseCase;
