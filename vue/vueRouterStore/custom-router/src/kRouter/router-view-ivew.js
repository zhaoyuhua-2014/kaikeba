/* eslint-disable no-console */
export default {
    render(h){
        let {
            hasMap,
            current
        } = this.$router
        let com = null
        if (current === '' || current === '/'){
            let p = hasMap[''].redirect
            current = p.slice(1)
        }
        // h() component
        com = hasMap[current].component 
        console.log(com)
        return h(com)
    }
}