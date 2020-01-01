<template>
  <div class="">
    <h4>provide inject 依赖注入</h4>
    <child1></child1>
    <child2></child2>
  </div>
</template>

<script>
import child1 from "./child1.vue";
import child2 from "./child2.vue";
export default {
  provide() {
    return {
      foo: "foo",
      com: this
    };
  },
  name: "",
  data() {
    return {
      msg: "123"
    };
  },
  components: {
    child1,
    child2
  },
  methods: {
    goHome() {
      this.$children[0].eat();
      this.$children[1].eat();
    }
  }
};
</script>

<style scoped lang="stylus"></style>
