import axios from 'axios';
import ConnectionBase from '../src/Repository/ConnectionBase';

import { afterEach, beforeEach, describe, expect, it, jest } from '@jest/globals';
import {configure} from '../src/utils';

// Mockando o axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('ConnectionBase', () => {
    let connectionBase: ConnectionBase;
    
    beforeEach(() => {
        configure({
            apiUrl: 'https://api-desenvolvimento.com'
        });
        connectionBase = new ConnectionBase('todos');
    });

    afterEach(() => {
        jest.clearAllMocks();
    });



    it('should post data successfully', async () => {
        const todoData = { title: 'Test Todo' };
        const responseData = { id: 1, ...todoData };
        mockedAxios.post.mockResolvedValueOnce({ data: responseData });

        const response = await connectionBase.post(todoData, { token: 'test-token' });

        expect(mockedAxios.post).toHaveBeenCalledWith(
            'https://api-desenvolvimento.com/todos',
            todoData,
            { headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer test-token' } }
        );
        expect(response).toEqual(responseData);
    });

    it('should get data successfully', async () => {
        const params = { status: 'completed' };
        const responseData = [{ id: 1, title: 'Test Todo' }];
        mockedAxios.get.mockResolvedValueOnce({ data: responseData });

        const response = await connectionBase.get(params, 'test-token');

        expect(mockedAxios.get).toHaveBeenCalledWith(
            'https://api-desenvolvimento.com/todos',
            {
                headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer test-token' },
                params
            }
        );
        expect(response).toEqual(responseData);
    });

    it('should update data successfully', async () => {
        const todoData = { title: 'Updated Todo' };
        const responseData = { id: 1, ...todoData };
        mockedAxios.put.mockResolvedValueOnce({ data: responseData });

        const response = await connectionBase.update('1', todoData, 'test-token');

        expect(mockedAxios.put).toHaveBeenCalledWith(
            'https://api-desenvolvimento.com/todos/1',
            todoData,
            { headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer test-token' } }
        );
        expect(response).toEqual(responseData);
    });

    it('should get data by id successfully', async () => {
        const responseData = { id: 1, title: 'Test Todo' };
        mockedAxios.get.mockResolvedValueOnce({ data: responseData });

        const response = await connectionBase.getById('1', 'test-token');

        expect(mockedAxios.get).toHaveBeenCalledWith(
            'https://api-desenvolvimento.com/todos/1',
            { headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer test-token' } }
        );
        expect(response).toEqual(responseData);
    });

    it('should remove data successfully', async () => {
        const responseData = { success: true };
        mockedAxios.delete.mockResolvedValueOnce({ data: responseData });

        const response = await connectionBase.remove('1', 'test-token');

        expect(mockedAxios.delete).toHaveBeenCalledWith(
            'https://api-desenvolvimento.com/todos/1',
            { headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer test-token' } }
        );
        expect(response).toEqual(responseData);
    });


    it('should throw error if post request is unauthorized', async () => {
        const todoData = { title: 'Test Todo' };
        mockedAxios.post.mockRejectedValueOnce(new Error('Request failed with status code 401'));

        await expect(connectionBase.post(todoData, { token: 'invalid-token' })).rejects.toThrowError('Request failed with status code 401');
    });
});
