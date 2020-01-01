<template>
  <div id="app">
    <img src="./assets/logo.png" alt="" srcset="">
    <!-- <communication></communication> -->
    <!-- <slot-example></slot-example> -->
    <from-example></from-example>
  </div>
</template>
<script>
// import communication from "./components/communication";
// import SlotExample from "./components/solt"
import FromExample from "./components/from"
export default {
  name: 'app',
  components: {
    // communication,
    // SlotExample,
    FromExample
  },

}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
