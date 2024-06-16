declare class LoginUseCase {
    private repositoryFactory;
    constructor();
    login(data: any): Promise<string>;
    recovery(data: any): Promise<string>;
    private saveTokenToLocalStorage;
}
export default LoginUseCase;
