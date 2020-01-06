import Vue from 'vue';
import VueRouter from './kvue-router';
import Home from "../ivew/home"
import About from "../ivew/about"



// 应用插件
Vue.use(VueRouter);

const router = new VueRouter({
    base: process.env.BASE_URL,
    mode: 'history',
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})
export default router