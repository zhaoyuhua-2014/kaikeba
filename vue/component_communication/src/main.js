import Vue from 'vue'
import App from './App.vue'
import creat from "./until/create"
Vue.prototype.$creat = creat
import Notive from "./components/notive"
import './plugins/element.js'
Vue.use(Notive)
Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
new Vue({
  render: h => h(App)
}).$mount('#app')
