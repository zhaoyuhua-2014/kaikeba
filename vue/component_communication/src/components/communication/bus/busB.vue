<template>
  <div class="">
    <h6>busB</h6>
    <input type="number" v-model="val2"  />
    <p>busb={{ val2 }}</p>
    <button @click="send">发送</button>
  </div>
</template>

<script>
// import EventBus from "./../../../until/bus.js";
export default {
  name: "",
  data() {
    return {
      val2: ""
    };
  },
  methods: {
    send () {
      this.$bus.$emit("busb", this.val2);
    }
  },
  components: {}
};
</script>

<style scoped lang="stylus"></style>
