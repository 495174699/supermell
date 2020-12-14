import {
    ADD_COUNT,
    ADD_TO_CART
} from './mutations-types'
export default {
    // 唯一的目的就是修改state中的状态
    // mutations中的方法尽可能完成的事件单一一点
    [ADD_COUNT](state, payload) {
        oldproduct.count += 1
    },
    [ADD_TO_CART](state, payload) {
        payload.isChecked = true
        state.cartList.push(payload)
    }
}