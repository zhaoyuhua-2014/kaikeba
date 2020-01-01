<template>
  <div class="child1">
    <h6>child1</h6>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped lang="stylus"></style>
