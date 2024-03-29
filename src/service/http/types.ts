interface HttpResponse<T> {
  data: T
  message: string
  code: number
}

export interface AxiosHttp {
  get<T>(url: string, params?: Object, options?: Object): Promise<HttpResponse<T>>
  post<T>(url: string, params?: Object, options?: Object): Promise<HttpResponse<T>>
}
