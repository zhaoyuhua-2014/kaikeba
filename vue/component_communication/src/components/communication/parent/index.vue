<template>
  <div class="">
      <h4>$parent $root</h4>
      <button @click="goHome">childs go home </button>
      <child1></child1>
      <child2></child2>
  </div>
</template>

<script>
import child1 from "./child1.vue"
import child2 from "./child2.vue"
export default {
  name: "",
  data() {
    return {
        msg: '123'
    };
  },
  components: {
      child1,
      child2
  },
  methods: {
      goHome () {
          this.$children[0].eat()
          this.$children[1].eat()
      }
  },
};
</script>

<style scoped lang="stylus"></style>
