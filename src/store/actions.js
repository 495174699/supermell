import {
    ADD_COUNT,
    ADD_TO_CART
} from './mutations-types'
export default {
    addCart(context, payload) {
        return new Promise((resolve, reject) => {
            let oldproduct = null
                // state.cartList.push(payload)
            for (let item of context.state.cartList) {
                if (item.iid == payload.iid) {
                    oldproduct = item;
                }
            }
            if (oldproduct) {
                oldproduct.count += 1
                resolve('当前商品数量+1')
                    // context.commit(ADD_COUNT, oldproduct)
            } else {
                payload.count = 1
                resolve('已添加到你的购物车')

                context.commit(ADD_TO_CART, payload)
            }
        })
    }
}