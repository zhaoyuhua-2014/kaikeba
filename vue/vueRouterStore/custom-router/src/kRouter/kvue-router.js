/* eslint-disable no-console */
import RouterLink from "./router-link-ivew"
import RouterView from "./router-view-ivew"
let Vue;

// 1.实现一个插件  挂载$router
class VueRouter {
    constructor (options) {
        this.$options = options
    }
    
}
VueRouter.install = function (_Vue) {
    // 保存构造函数，在VueRouter 里面使用
    Vue = _Vue
    Vue.mixin({
        beforeCreate () {
            console.log(this)
        }
    })
    Vue.component('routerLink', RouterLink)
    Vue.component('routerView', RouterView)
}
export default VueRouter