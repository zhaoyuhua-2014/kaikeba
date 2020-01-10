/* eslint-disable no-console */
export default {
    render(h){
        let {
            hasMap,
            current
        } = this.$router
        let com = null
        let cpCurrent  = current



        // 标记深度
        






        console.log(cpCurrent)
        if (typeof cpCurrent === 'undefined') {
            console.log('unde')
            return h(com)
        }
        if (cpCurrent === '' || cpCurrent === '/'){
            let p = hasMap[''].redirect
            cpCurrent = p.slice(1)
        }
        console.log(this.$router)
        console.log(hasMap[cpCurrent])
        // h() component
        if (hasMap[cpCurrent].component) {
            com = hasMap[cpCurrent].component
        } else if (hasMap[cpCurrent].redirect) {
            cpCurrent = hasMap[cpCurrent].redirect
            com = hasMap[cpCurrent].component
        }
        console.log(com)
        
        return h(com)
    }
}