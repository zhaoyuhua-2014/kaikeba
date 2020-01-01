<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <slot></slot>
    <!-- 校验信息的展示 -->
    <p class="msg" v-if="errorMsg">{{ errorMsg }}</p>
  </div>
</template>

<script>
import Schema from "async-validator";
export default {
  inject: ["form"],
  props: {
    label: {
      type: String,
      default: ""
    },
    prop: {
      type: String
    }
  },
  data() {
    return {
      errorMsg: ""
    };
  },
  mounted() {
    this.$on("validate", res => {
      console.log(res);
      this.validate();
    });
  },
  methods: {
    validate() {
        
      // 值
      let val = this.form.model[this.prop];
      // 规则
      let rules = this.form.rules[this.prop];
      // 校验描述对象
      let des = {
        [this.prop]: rules
      };
      // 创建schema 实例
      let schema = new Schema(des);
      return schema.validate({ [this.prop]: val }, errors => {
        if (errors) {
          this.errorMsg = errors[0].message;
        } else {
          this.errorMsg = "";
        }
      });
    }
  }
};
</script>

<style scoped>
.msg {
  color: red;
}
</style>
