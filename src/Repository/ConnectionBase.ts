/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */

import axios, { AxiosResponse } from 'axios';
//generalizar a iniciacao da biblioteca!
import IConnectionBase from './IConnectionBase';
import { config } from '../config';

class ConnectionBase implements IConnectionBase {
  private path: string;
  private apiBaseUrl: string;

  constructor(path: string) {
    this.path = path;
    if(config.apiUrl == undefined)
      throw new Error('apiurl nao esta setada, por favor, verifique os arquivos de variavel de ambiente .env..');
    this.apiBaseUrl = config.apiUrl;
    console.debug(`Running in ${config.nodeEnv} mode`);
    console.debug(`API URL is ${config.apiUrl}`);
  }

  async post(data: any, options?: { id?: string; token?: string }): Promise<any> {
    const { id, token } = options || {};
    try {
      const headers = this.createHeaders(token);
      const url = id ? `${this.apiBaseUrl}/${this.path}/${id}` : `${this.apiBaseUrl}/${this.path}`;
      const response: AxiosResponse  = await axios.post(url, data, { headers });
      return response.data;
    } catch (error: any) {
      console.error(`Failed to post: ${error.message}`);
      throw new Error(`Failed to post: ${error.message}`);
    }
  }
  async get(params?: any, token?: string): Promise<any> {
    try {
      const headers = this.createHeaders(token);
      const url = `${this.apiBaseUrl}/${this.path}`;
      const response: AxiosResponse  = await axios.get(url, { headers, params });
      return response.data;
    } catch (error: any) {
      console.error(`Failed to get: ${error.message}`);
      throw new Error(`${error.message}`);
    }
  }

  async update(id: string, data: any, token?: string): Promise<any> {
    try {

      const headers = this.createHeaders(token);
      const url = `${this.apiBaseUrl}/${this.path}/${id}`;
      const response: AxiosResponse = await axios.put(url, data, { headers });
      return response.data;
    } catch (error: any) {
      console.error(`Failed to update: ${error.message}`);
      throw new Error(`Failed to update: ${error.message}`);
    }
  }
  async getById(id: string, token?: string): Promise<any> {
    try {
      const headers = this.createHeaders(token);
      const url = `${this.apiBaseUrl}/${this.path}/${id}`;
      const response: AxiosResponse = await axios.get(url, { headers });
      return response.data;
    } catch (error: any) {
      console.error(`Failed to get by id: ${error.message}`);
      throw new Error(`Failed to get by id: ${error.message}`);
    }
  }
  async remove(id: string, token?: string): Promise<any> {
    try {
      const headers = this.createHeaders(token);
      const url = `${this.apiBaseUrl}/${this.path}/${id}`;
      const response: AxiosResponse = await axios.delete(url, { headers });
      return response.data;
    } catch (error: any) {
      console.error(`Failed to delete: ${error.message}`);
      throw new Error(`Failed to delete: ${error.message}`);
    }
  }

  private createHeaders(token?: string): { [key: string]: string } {
    const headers: { [key: string]: string } = {
      'Content-Type': 'application/json',
    };
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    return headers;
  }

}

export default ConnectionBase;
