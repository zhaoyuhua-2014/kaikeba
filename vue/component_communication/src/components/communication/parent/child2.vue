<template>
  <div class="child2">
    <h6>child2</h6>
    <button @click="send">给child1发送消息</button>
  </div>
</template>

<script>
export default {
  methods: {
    send() {
      this.$parent.$emit('send', 'hello')
    },
    eat() {
      console.log('child2 回来')
    }
  },
};
</script>

<style scoped lang="stylus"></style>
