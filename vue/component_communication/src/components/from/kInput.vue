<template>
  <div>
    <!-- 自定义组件双向绑定：vlaue @ input  -->
    <!-- v-bind=$attrs 表示展开$attrs -->
    <input :type="type" :value="value" @input="onInput" v-bind="$attrs" />
  </div>
</template>

<script>
import emitter from "@/mixins/emitter"
export default {
  // 设置inheritAttrs 为false 避免设置到根元素上面
  inheritAttrs: false,
  mixins: [emitter],
  props: {
    type: {
      type: String,
      default: "text"
    },
    value: {
      type: String,
      default: ""
    }
  },
  methods: {
    onInput(e) {
      // 派发一个emit事件
      this.$emit("input", e.target.value);
      // 通知父级执行校验
      // this.$parent.$emit("validate");
      //   console.log(this.$parent)
      // this.send()
      this.dispatch('kFromItem', 'validate')
    },
    send() {
      let target = this.$parent;
      while (!target.prop) {
        target = target.$parent;
      }
      target.$emit("validate");
    }
  }
};
</script>

<style scoped></style>
