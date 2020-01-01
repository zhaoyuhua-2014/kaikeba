<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      form: this
    };
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Object
    }
  },
  methods: {
    validate(cb) {
      // 获取所有的孩子
      // result 可能有异步的
      const tasks = this.$children
        .filter( item => item.prop) // 过滤掉没有prop属性 -提交按钮
        .map(item => item.validate());
      
      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => cb(false));
    }
  }
};
</script>

<style scoped></style>
