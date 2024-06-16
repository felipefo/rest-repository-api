import GenericUseCase from './GenericUseCase';

// Serviço para gerenciar a criação e recuperação de instâncias de repositório
const GenericUseCaseFactory = {
    createUseCase(type: string): any {
    const usecase = new GenericUseCase(type.toLowerCase());
    return  usecase;
  }
};

export default GenericUseCaseFactory;