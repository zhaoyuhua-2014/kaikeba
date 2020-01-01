<template>
  <div class="">
    <h3>组件通信</h3>
    <div class="item">
        <h4>1.props $emit </h4>
        <!-- props $emit  -->
        <child1 :msg="msg" @some-event="onSomeEvent"></child1>
    </div>
    <div class="item">
        <h4>2.bus $emit $on</h4>
        <!-- props $emit  -->
        <Bus></Bus>
    </div>
    <div class="item">
        <h4>3.vuex</h4>
    </div>
    <div class="item">
        <h4>4.$parent/$root</h4>
        <parent></parent>
    </div>
    <div class="item">
        <h4>5.$atter/$listeners</h4>
        <attrs-listeners></attrs-listeners>
    </div>
    <div class="item">
        <h4>6. provide/$inject</h4>
        <provide-inject></provide-inject>
    </div>
  </div>
</template>

<script>
import child1 from "./child1";
import Bus from "./bus"
import parent from "./parent"
import attrsListeners from "./attrs_listeners"
import provideInject from "./provide_inject"
export default {
  name: "",
  data() {
    return {
      msg: "my index msg"
    };
  },
  components: {
    child1,
    Bus,
    parent,
    attrsListeners,
    provideInject
  },
  methods: {
    onSomeEvent(msg) {
      console.log("Communition:", msg);
      this.msg = msg
    }
  }
};
</script>

<style scoped >
    .item{
        border-bottom: 2px solid #F0F;
    }
</style>
