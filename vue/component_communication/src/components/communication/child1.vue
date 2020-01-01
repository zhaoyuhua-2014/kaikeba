<template>
  <div class="child1">
    <h6>child1</h6>
    <p>{{ msg }}</p>
    <button @click="onClick">点击反转msg</button>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: ""
    }
  },
  methods: {
    onClick() {
      let msg = this.msg
        .split("")
        .reverse()
        .join("");
      //   console.log(this.msg);
      this.$emit("some-event", msg);
    }
  }
};
</script>

<style scoped lang="stylus"></style>
