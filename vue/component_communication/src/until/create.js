import Vue from "vue"

function creat(Component, props) {
    // 如何获取构造函数
    // 1.vue.extend()
    const Ctor = Vue.extend(Component)
    const comp = new Ctor({
        propsData: props
    })
    comp.$mount()
    document.body.appendChild(comp.$el)
    comp.remove = function(){
        document.body.removeChild(comp.$el)
        comp.$destroy()
    }
    // 2.render 函数
    // const vm = new Vue({
    //     // h 是 creatElement ,返回vNode 是虚拟DOM
    //     // 需要挂载才能成为真实的dom
    //     render: h => h(Component, {props})
    // }).$mount() // 不指定宿主元素 ，则会创建真实dom，但不会追加操作

    // document.body.appendChild(vm.$el)

    // const comp = vm.$children[0]
    // // 删除
    // comp.remove = function () {
    //     document.body.removeChild(vm.$el)
    //     vm.$destroy()
    // }
    return comp
}
export default creat