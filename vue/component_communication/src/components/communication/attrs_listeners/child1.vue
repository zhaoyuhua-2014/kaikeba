<template>
  <div class="child1">
    <!-- $attrs 包含了父作用域中不作为prop被识别（且获取）的特性绑定（class 和 style 除外） -->
    <h6>child1</h6>
    <p>{{msg}}</p>
    <p>{{$attrs.title}}</p>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: ''
    },
  },
  methods: {
    eat() {
      console.log('child1 回来')
    }
  },
  mounted () {
    this.$parent.$on('send', res => {
      console.log('child1',res)
    });
  }
};
</script>

<style scoped lang="stylus"></style>
