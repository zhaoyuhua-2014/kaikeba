<template>
  <div class="">
      <!-- 疑问？ 为啥在@input 无法触发 bus.$emit()  -->
      <h4>bus 将busa的值和busb的值传给busc相加后展示</h4>
      <bus-a></bus-a>
      <bus-b></bus-b>
      <bus-c></bus-c>
  </div>
</template>

<script>
import busA from "./busA.vue"
import busB from "./busB.vue"
import busC from "./busC.vue"
export default {
  name: "",
  data() {
    return {};
  },
  components: {
      busA,
      busB,
      busC
  }
};
</script>

<style scoped lang="stylus"></style>
