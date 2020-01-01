<template>
  <div class="child1">
    <h6>child1</h6>
  </div>
</template>

<script>
export default {
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
