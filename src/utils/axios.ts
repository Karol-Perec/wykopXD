import axios, { AxiosInstance, RawAxiosRequestConfig } from 'axios';

interface CustomAxiosInstance extends AxiosInstance {
  request<R = unknown, D = unknown>(config: RawAxiosRequestConfig<D>): Promise<R>;
  get<R = unknown, D = unknown>(url: string, config?: RawAxiosRequestConfig<D>): Promise<R>;
  delete<R = unknown, D = unknown>(url: string, config?: RawAxiosRequestConfig<D>): Promise<R>;
  head<R = unknown, D = unknown>(url: string, config?: RawAxiosRequestConfig<D>): Promise<R>;
  options<R = unknown, D = unknown>(url: string, config?: RawAxiosRequestConfig<D>): Promise<R>;
  post<R = unknown, D = unknown>(url: string, data?: D, config?: RawAxiosRequestConfig<D>): Promise<R>;
  put<R = unknown, D = unknown>(url: string, data?: D, config?: RawAxiosRequestConfig<D>): Promise<R>;
  patch<R = unknown, D = unknown>(url: string, data?: D, config?: RawAxiosRequestConfig<D>): Promise<R>;
  postForm<R = unknown, D = unknown>(url: string, data?: D, config?: RawAxiosRequestConfig<D>): Promise<R>;
  putForm<R = unknown, D = unknown>(url: string, data?: D, config?: RawAxiosRequestConfig<D>): Promise<R>;
  patchForm<R = unknown, D = unknown>(url: string, data?: D, config?: RawAxiosRequestConfig<D>): Promise<R>;
}

const axiosInstance: CustomAxiosInstance = axios.create({
  baseURL: 'https://wykop.pl/api/v3',
});

export default axiosInstance;
