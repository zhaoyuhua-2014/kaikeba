<template>
  <div class="">
    <h6>busA</h6>
    <input type="number" v-model="val1"  />
    <p>busa={{ val1 }}</p>
    <button @click="send">发送</button>
  </div>
</template>

<script>
// import EventBus from "./../../../until/bus.js";
export default {
  name: "",
  data() {
    return {
      val1: ""
    };
  },
  methods: {
    send () {
        this.$bus.$emit("busa", this.val1);
    }
  },
  components: {}
};
</script>

<style scoped lang="stylus"></style>
