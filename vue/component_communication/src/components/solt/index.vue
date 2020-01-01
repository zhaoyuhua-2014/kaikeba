<template>
  <div class="">
    <h3>插槽</h3>
    <layout>
      <!-- 具名插槽 -->
      <template v-slot:header>header头部</template>
      <!-- 匿名插槽 -->
      <template>content...</template>
      <!-- 作用域插槽   -->
      <!-- {fc} 对象解构 语法 -->
      <template v-slot:footer="{ fc }">{{ fc }}</template>
    </layout>
  </div>
</template>

<script>
import Layout from "./layout";
export default {
  components: {
    Layout
  }
};
</script>

<style scoped lang="stylus"></style>
