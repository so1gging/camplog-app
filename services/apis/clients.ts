import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class ApiClient {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: process.env.EXPO_PUBLIC_DATA_API_URL || '',
    });
  }

  private handleResponse<T>(response: AxiosResponse<T>) {
    return response.data;
  }

  public get<T>(url: string, config?: AxiosRequestConfig) {
    return this.instance.get<T>(url, config).then(this.handleResponse);
  }

  public post<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.instance.post<T>(url, data, config).then(this.handleResponse);
  }

  public put<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.instance.put<T>(url, data, config).then(this.handleResponse);
  }

  public patch<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.instance.patch<T>(url, data, config).then(this.handleResponse);
  }

  public delete<T>(url: string, config?: AxiosRequestConfig) {
    return this.instance.delete<T>(url, config).then(this.handleResponse);
  }
}

// 싱글 인스턴스로 export
const apiClient = new ApiClient();

export default apiClient;
