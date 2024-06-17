interface IAuthUseCase {
    login(data: any): Promise<string>;
    recovery(data: any): Promise<string>
  }
export default IAuthUseCase;