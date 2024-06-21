// tests/RepositoryBase.test.ts
import ConnectionBase from '../src/Repository/ConnectionBase';
import RepositoryBase from '../src/Repository/RepositoryBase';
import { jest } from '@jest/globals';
import { configure }  from '../src/utils';


// Mock da classe ConnectionBase
jest.mock('../src/Repository/ConnectionBase');
const MockedConnectionBase = ConnectionBase as jest.MockedClass<typeof ConnectionBase>;

describe('RepositoryBase', () => {
    let repositoryBase: RepositoryBase;
    let connectionBase: jest.Mocked<ConnectionBase>;

    beforeEach(() => {
        configure({
            apiUrl: 'https://api-desenvolvimento.com'
        });
        connectionBase = new MockedConnectionBase('todos') as jest.Mocked<ConnectionBase>;
        repositoryBase = new RepositoryBase(connectionBase);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should add data with token', async () => {
        const todoData = { title: 'Test Todo' };
        const responseData = { id: 1, ...todoData };
        connectionBase.post.mockResolvedValueOnce(responseData);
        const response = await repositoryBase.add(todoData, 'test-token');
        expect(connectionBase.post).toHaveBeenCalledWith(todoData, { token: 'test-token' });
        expect(response).toEqual(responseData);
    });

    it('should add data without token', async () => {
        const todoData = { title: 'Test Todo' };
        const responseData = { id: 1, ...todoData };
        connectionBase.post.mockResolvedValueOnce(responseData);
        const response = await repositoryBase.add(todoData);
        expect(connectionBase.post).toHaveBeenCalledWith(todoData);
        expect(response).toEqual(responseData);
    });

    it('should update data with id and token', async () => {
        const todoData = { title: 'Updated Todo' };
        const responseData = { id: 1, ...todoData };
        connectionBase.post.mockResolvedValueOnce(responseData);
        const response = await repositoryBase.update(todoData, '1', 'test-token');
        expect(connectionBase.post).toHaveBeenCalledWith(todoData, { id: '1', token: 'test-token' });
        expect(response).toEqual(responseData);
    });

    it('should throw error if id is not provided for update', async () => {
        const todoData = { title: 'Updated Todo' };
        await expect(repositoryBase.update(todoData, '')).rejects.toThrow('Identificador eh obrigatorio para a atualizacao desta entidade');
    });

    it('should delete data with token', async () => {
        const todoData = { id: 1 };
        connectionBase.post.mockResolvedValueOnce(null);
        await repositoryBase.delete(todoData, 'test-token');
        expect(connectionBase.post).toHaveBeenCalledWith(todoData, { token: 'test-token' });
    });

    it('should get data by id with token', async () => {
        const responseData = { id: 1, title: 'Test Todo' };
        connectionBase.getById.mockResolvedValueOnce(responseData);
        const response = await repositoryBase.getById('1', 'test-token');
        expect(connectionBase.getById).toHaveBeenCalledWith('1', 'test-token');
        expect(response).toEqual(responseData);
    });

    it('should get data with token', async () => {
        const todoData = { status: 'completed' };
        const responseData = [{ id: 1, title: 'Test Todo' }];
        connectionBase.get.mockResolvedValueOnce(responseData);
        const response = await repositoryBase.get(todoData, 'test-token');
        expect(connectionBase.get).toHaveBeenCalledWith(todoData, 'test-token');
        expect(response).toEqual(responseData);
    });

    it('should throw an error when post request is not authorized', async () => {
        const todoData = { title: 'Test Todo' };
        const errorMessage = 'Request failed with status code 401';
        connectionBase.post.mockRejectedValueOnce(new Error(errorMessage));
        const result = repositoryBase.add(todoData, 'invalid-token');
        console.log(result);
        await expect(result).rejects.toThrow(errorMessage);
    });
});
