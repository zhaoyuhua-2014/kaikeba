let cNumber = 0
function definReactive(obj, key, val) {
    observe(val)
    const dep = new Dep()
    console.log('======================' +cNumber)
    cNumber ++
    Object.defineProperty(obj, key, {
        get() {
            console.log(key)
            console.log(Dep.Target)
            Dep.Target && dep.addDep(Dep.Target)
            console.log('get' + val)
            console.log(dep)
            return val
        },
        set(newVal) {
            if (newVal !== val) {
                console.log(newVal)
                observe(newVal)
                console.log('set' + key + ":" + newVal)
                val = newVal
                dep.notify()
            }
        }
    })
}

function observe(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return
    }
    new Observer(obj)
}
// 代理函数 方便用户直接操作数据
function proxy(vm, key) {
    console.log(Object.keys(vm[key]))
    Object.keys(vm[key]).forEach( k =>{
        console.log(vm[key])
        Object.defineProperty(vm, k, {
            get(){
                return vm[key][k]
            },
            set(newVal){
                vm[key][k] = newVal
            }
        })
    })
}
// 创建kvue的构造函数
class kVue{
    constructor(options) {
        console.log(options)
        // 保存选项
        this.$options = options
        this.$data = options.data
        console.log(this.$data)
        // 响应化处理
        observe(this.$data)

        proxy(this, '$data')
        
        new Compile(options.el, this)
    }
}
// 根据对象类型决定如何做响应化
class Observer {
    constructor (val){
        this.val = val

        if (typeof val === 'object') {
            this.walk(val)
        }
    }
    walk(obj){
        Object.keys(obj).forEach( key =>{
            definReactive(obj, key, obj[key])
        })
    }
}
