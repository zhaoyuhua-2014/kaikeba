const MyPlugin = {
    install (Vue, options) {
        Vue.component('heading', {
            props: {
                level: {
                    type: String,
                    default: '1'
                },
                title: {
                    type: String,
                    default: ''
                },
                icon: {
                    type: String
                }
            },
            render: function (h) {
                // 构造子元素节点
                let children = []

                if (this.icon) {
                    children.push(h(
                        'svg',
                        {
                            class: 'icon'
                        },
                        [h(
                            'use',
                            {
                                attrs: { 'xlink:href': '#icon-' + this.icon }
                            }
                        )]
                    ))
                }
                children = children.concat(this.$slots.default)
                const vNode = h(
                    // 第一个参数
                    'h' + this.level,
                    // 第二个参数 一个与模板中属性对应的数据对象。可选。
                    {
                        class: 'tit',
                        attrs: {
                            title: this.title
                        }
                    },
                    // 第三个参数
                    // 子级虚拟节点 (VNodes)，由 `createElement()` 构建而成，
                    // 也可以使用字符串来生成“文本虚拟节点”。可选。
                    children
                )
                console.log(vNode);
                // snabbdom
                return vNode
            }
        })
    }
}

if (typeof window !== 'undefined' &&  window.Vue) {
    // 使用插件注册插件
    window.Vue.use(MyPlugin)
}