<template>
  <div class="">
      <h4>$attrs $listeners</h4>
      <child1 :msg="msg" :title="title"></child1>
      <child2 @click="onClick"></child2>
  </div>
</template>

<script>
import child1 from "./child1.vue"
import child2 from "./child2.vue"
export default {
  name: "",
  data() {
    return {
      title: '父组件',
        msg: 'str'
    };
  },
  components: {
      child1,
      child2
  },
  methods: {
     onClick () {
       console.log("来自父组件的回调函数处理", this);
       
     }
  },
};
</script>

<style scoped lang="stylus"></style>
