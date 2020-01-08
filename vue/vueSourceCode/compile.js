// 编译器
// 

class Compile {
    // el 宿主元素
    // vm 当前实例
    constructor(el, vm){
        this.$el = document.querySelector(el)
        this.$vm = vm

        if (this.$el) {
            this.compile(this.$el)
        }
    }
    compile(el){
        const childNodes = el.childNodes
        Array.from(childNodes).forEach(node =>{
            if (this.isElement(node)) {
                console.log("是元素")
                console.log(node)
                this.compileElement(node)
            } else if (this.isInter(node)) {
                this.compileText(node)
            }
            if (node && node.childNodes.length > 0) {
                this.compile(node)
            }
        })
    }
    isElement(node){
        return node.nodeType === 1
    }
    isInter(node){
        return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)
    }
    compileElement(node){
        let attrs = node.attributes
        console.log(attrs)
        if (attrs.length) {
            Array.from(attrs).forEach(attr => {
                let attrName = attr.name
                let attrVal = attr.value
                if (this.isDirective(attrName)) {
                    const dir = attrName.substring(2)
                    this[dir] = this[dir](node, attrVal)
                }
            })
        }
    }
    isDirective(name){
        return name.indexOf('k-') === 0
    }
    compileText(node) {
        this.updata(node, RegExp.$1, 'text')
    }
    text(node,exp){
        this.updata(node, exp, 'text')
    }
    html(node, exp) {
        this.updata(node, exp, 'html')
    }
    updata(node, exp, dir){
        const fn = this[dir + "Updater"]
        fn && fn(node, this.$vm[exp])

        new Watcher(this.$vm, exp , function (val) {
            console.log('312')
            fn && fn(node, val)
        })
    }
    textUpdater(node, val) {
        node.textContent = val
    }
    htmlUpdater(node, val) {
        node.innerHTML = val
    }
    on(node,val){
        node.add
    }
}
// 创建观察者
// 观察者  用来
class Watcher {
    constructor(vm, key, updataFn) {
        this.$vm = vm

        this.$key = key

        this.$updataFn = updataFn
        console.log(this)
        Dep.Target = this
        this.$vm[key]
        // console.log(this.$vm[key])
        Dep.Target = null
    }
    updata(){
        this.$updataFn.call(this.$vm, this.$vm[this.$key])
    }
}
// dep 依赖收集

class Dep {
    constructor(){
        this.deps = []
    }
    addDep(dep){
        this.deps.push(dep)
    }
    notify(){
        console.log('notify')
        console.log(this.deps)
        this.deps.forEach( dep => dep.updata())
    }
}