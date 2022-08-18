import { AxiosHttp } from './types'
import { setupAxios } from './config'

const axios = setupAxios()

// 请求函数组
const http: AxiosHttp = {
  get(url, data, options = {}) {
    return axios({
      method: 'get',
      url,
      data,
      ...options,
    }).then(res => res.data)
  },
  post(url, data, options = {}) {
    return axios({
      method: 'post',
      url,
      data,
      ...options,
    }).then(res => res.data)
  },
}

export default http

export function isCancel(err: Error) {
  if (!err) return false
  return axios.isCancel!(err)
}
