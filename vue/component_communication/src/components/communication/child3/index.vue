<template>
  <div class="">
    <h3>child3</h3>
    <!--  -->
    <child1 :msg="msg"></child1>
    <child2></child2>
  </div>
</template>

<script>
import child1 from "./child1";
import child2 from "./child1";
export default {
  name: "",
  data() {
    return {
        msg: 'my index msg'
    };
  },
  components: {
    child1,
    child2
  }
};
</script>

<style scoped lang="stylus"></style>
