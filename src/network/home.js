import { request } from './request'
export function getHomeMultidata() {
    return request({
        url: '/home/multidata',
        params: {
            type: 'pop',
            page: 1
        }
    })
}