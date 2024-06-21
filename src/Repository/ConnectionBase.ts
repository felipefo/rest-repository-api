/*@author: Felipe F. de Oliveira
*/
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */

import axios, { AxiosResponse } from 'axios';
//generalizar a iniciacao da biblioteca!
import IConnectionBase from './IConnectionBase';
import  apiUrl  from '../config';

class ConnectionBase implements IConnectionBase {
  private path: string;
  private apiBaseUrl: string;

  constructor(path: string) {
    this.path = path;
    if(process.env.API_URL != undefined) //only for vue projects 
    {
      this.apiBaseUrl = process.env.API_URL;
      console.debug(`API URL is ${this.apiBaseUrl}`);
    }else if(this.apiBaseUrl == undefined)
      this.apiBaseUrl = apiUrl;
     // throw new Error('apiurl nao esta setada, por favor, verifique o arquivo ./src/config.js');
     
    if(this.apiBaseUrl == undefined)
      throw new Error('process.env.API_URL, por favor, verifique os arquivos de variavel de ambiente .env');
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
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