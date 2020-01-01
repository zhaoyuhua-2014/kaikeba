<template>
  <div class="child2">
    <h6>child2</h6>
    <h4>{{foo}}</h4>
  </div>
</template>

<script>
export default {
  inject:['foo'],
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
