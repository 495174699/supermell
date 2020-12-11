import { request } from './request'
export function getHomeMultidata(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}

export class all {
    constructor(itemlInfo, columns, services) {
        this.columns = columns,
            this.services = services,
            this.title = itemlInfo.title,
            this.desc = itemlInfo.desc,
            this.price = itemlInfo.price,
            this.oldPrice = itemlInfo.oldPrice,
            this.discount = itemlInfo.discountDesc,
            this.realPrice = itemlInfo.lowNowPrice
    }
}

export class logo {
    constructor(shopInfo) {
        this.shopLogo = shopInfo.shopLogo
        this.name = shopInfo.name
        this.cFans = shopInfo.cFans
        this.cSells = shopInfo.cSells
        this.score = shopInfo.score
        this.cGoods = shopInfo.cGoods
        this.shopUrl = shopInfo.shopUrl
    }
}
export function getRecommend() {
    return request({
        url: '/recommend',
        params: {

        }
    })
}