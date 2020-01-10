import Vue from 'vue';
import VueRouter from './kvue-router';
import Home from "../ivew/home"
import About from "../ivew/about"
import AbouotA from "../ivew/about/view/a.vue"
import AbouotB from "../ivew/about/view/b.vue"



// 应用插件
Vue.use(VueRouter);

const router = new VueRouter({
    base: process.env.BASE_URL,
    mode: 'history',
    routes: [
        {
            path: '',
            redirect: '/home',
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About,
            childen: [
                {
                    path: '/about/a',
                    component: AbouotA,
                },
                {
                    path: '/about/a',
                    component: AbouotB,
                }
            ]
        }
    ]
})
export default router