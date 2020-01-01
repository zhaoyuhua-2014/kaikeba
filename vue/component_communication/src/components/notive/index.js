import component from "./index.vue"

export default function (Vue) {
    const Constructor = Vue.extend(component)
    const Instance = new Constructor();
    Instance.$mount()

    document.body.appendChild(Instance.$el)
    Instance.remove = function () {
        document.body.removeChild(Instance.$el)
    }
    Vue.prototype.$Notive = ({
        title,
        content,
        duration
    }) => {
        Instance.title = title
        Instance.content = content
        Instance.duration = duration || 2000
        return Instance
    }
}