import request from '../request'


const baseUrl = (url: string) => `/api/${url}`


export const login = (params: object) => {
    return request({
        url: baseUrl('sign'),
        method: 'post',
        data: params
    })
}
