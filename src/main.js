import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
Vue.config.productionTip = false

// 图片懒加载插件
import LazyLoad from 'vue-lazyload'
Vue.use(LazyLoad)
    // 之后就是需要把图片的src属性改为 v-lazy 这个项目我没有用懒加载 这里要会使用

// 事件总线
Vue.prototype.$bus = new Vue()

// 解决移动端300秒延迟
import Fastclick from 'fastclick'
Fastclick.attach(document.body)

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')