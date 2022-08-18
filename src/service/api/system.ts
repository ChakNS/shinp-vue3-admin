import http from '@/service/http'

export const FetchAllMenus = (): Promise<any> => http.post('/menu/fetchAll').then(res => res.data)
