<template>
  <div>
    <div class="box" v-if="isShow">
      <h3 class="title" v-if="title">{{ title }}</h3>
      <div class="content" v-if="content">{{ content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: "",
      duration: 2000,
      isShow: false
    };
  },
  methods: {
    show() {
      this.isShow = true;
      console.log(this.isShow);
      setTimeout(() => {
        this.hide();
      }, this.duration);
    },
    hide() {
      this.isShow = false;
      //   this.remove();
    }
  }
};
</script>

<style scoped>
.box {
  background: red;
  width: 60%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 24px;
}
.box h3 {
  padding: 0;
  margin: 0;
}
</style>
