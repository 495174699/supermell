import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const home = () =>
    import ('../views/home/home.vue')
const cat = () =>
    import ('../views/cat/cat.vue')
const catagory = () =>
    import ('../views/catagory/catagory.vue')
const profile = () =>
    import ('../views/profile/pofile.vue')


const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: home
    },
    {
        path: '/cate',
        component: cat
    },
    {
        path: '/catagory',
        component: catagory
    },

    {
        path: '/profile',
        component: profile
    }
]

export default new Router({
    routes,
    mode: 'history'
})