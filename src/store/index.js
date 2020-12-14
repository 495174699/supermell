import vue from 'vue'
import vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
vue.use(vuex)
const state = {
    cartList: []
}
const store = new vuex.Store({
    state: state,
    mutations: mutations,
    actions: actions,
    getters
})
export default store