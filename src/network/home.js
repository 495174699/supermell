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
export function getHomeGoods(type, page) {
    return request({
        url: '/home/data',
        params: {
            type: type,
            page: page
        }
    })
}