import axios, { AxiosInstance, RawAxiosRequestConfig } from 'axios';

interface CustomAxiosInstance extends AxiosInstance {
  request<R = any, D = any>(config: RawAxiosRequestConfig<D>): Promise<R>;
  get<R = any, D = any>(url: string, config?: RawAxiosRequestConfig<D>): Promise<R>;
  delete<R = any, D = any>(url: string, config?: RawAxiosRequestConfig<D>): Promise<R>;
  head<R = any, D = any>(url: string, config?: RawAxiosRequestConfig<D>): Promise<R>;
  options<R = any, D = any>(url: string, config?: RawAxiosRequestConfig<D>): Promise<R>;
  post<R = any, D = any>(url: string, data?: D, config?: RawAxiosRequestConfig<D>): Promise<R>;
  put<R = any, D = any>(url: string, data?: D, config?: RawAxiosRequestConfig<D>): Promise<R>;
  patch<R = any, D = any>(url: string, data?: D, config?: RawAxiosRequestConfig<D>): Promise<R>;
  postForm<R = any, D = any>(url: string, data?: D, config?: RawAxiosRequestConfig<D>): Promise<R>;
  putForm<R = any, D = any>(url: string, data?: D, config?: RawAxiosRequestConfig<D>): Promise<R>;
  patchForm<R = any, D = any>(url: string, data?: D, config?: RawAxiosRequestConfig<D>): Promise<R>;
}

const axiosInstance: CustomAxiosInstance = axios.create({
  baseURL: 'https://wykop.pl/api/v3',
});

export default axiosInstance;
