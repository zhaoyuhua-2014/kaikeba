

function definReactive(obj, key, val){
    console.log(obj)
    Object.defineProperty(obj, key,{
        get(){
            console.log('get' + val)
            return val
        },
        set(newVal){
            if (newVal !== val) {
                console.log(newVal)
                observe(newVal)
                console.log('set' + key + ":" + newVal)
                val = newVal
            }
        }
    })
}

function observe(obj){
    if (typeof obj !== 'object' || obj === null) {
        return
    }
    Object.keys(obj).forEach( key =>{
        definReactive(obj, key, obj[key])
    })
}
// 
function set (obj,key,val) {
    if (typeof obj !== 'object' || obj === null) {
        return
    }
    definReactive(obj, key, val)
}
const obj = {
    a:1,
    b:2,
    ab:{
        a:3,
        b:4
    }
}
observe(obj)
obj.a
set(obj, 'c', 1)
obj.c
obj.c = 5