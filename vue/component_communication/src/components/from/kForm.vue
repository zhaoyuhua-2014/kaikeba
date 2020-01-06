<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'kFrom',
  componentName: 'kFrom',
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
  created () {
    this.filelds = []
    this.$on("kkb.form.addFiled", item => {
      this.filelds.push(item)
    });
  },
  methods: {
    validate(cb) {
      // 获取所有的孩子
      // result 可能有异步的
      // const tasks = this.$children
      //   .filter( item => item.prop) // 过滤掉没有prop属性 -提交按钮
      //   .map(item => item.validate());
      const tasks = this.filelds.map( item => {item.validate()})
      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => cb(false));
    }
  }
};
</script>

<style scoped></style>
