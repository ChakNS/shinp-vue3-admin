import axios, { AxiosRequestConfig, AxiosResponse, AxiosError, AxiosInstance } from 'axios'

function requestInterceptors(config: AxiosRequestConfig<any>): AxiosRequestConfig<any> {
  // do something...
  return config
}

function responseInterceptors(response: AxiosResponse<any>): AxiosResponse<any> {
  // do something...
  return response
}

interface ExAxios extends AxiosInstance {
  isCancel?: (err: Error) => boolean
}

export function setupAxios() {
  const request: ExAxios = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    withCredentials: true,
    timeout: 1000 * 60 * 2,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  })
  request.interceptors.request.use(requestInterceptors, (err: AxiosError): Promise<AxiosError> => Promise.reject(err))
  request.interceptors.response.use(responseInterceptors, (err: AxiosError): Promise<AxiosError> => Promise.reject(err))

  request.isCancel = err => axios.isCancel(err)
  return request
}
