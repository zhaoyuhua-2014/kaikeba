<template>
  <div>
    <k-form :model="userInfo" :rules="rules" ref="loginForm">
      <div>
        <!-- 用户名 -->
      <k-form-item label="用户名" prop="username">
        <div>
            <k-input
          v-model="userInfo.username"
          placeholder="请输入用户名"
        ></k-input>
        </div>
      </k-form-item>
      </div>
      <!-- 密码 -->
      <k-form-item label="密码" prop="password">
        <k-input
          type="password"
          v-model="userInfo.password"
          placeholder="请输入密码"
        ></k-input>
      </k-form-item>
      <!-- 提交按钮 -->
      <k-form-item>
        <button @click="login">登录</button>
      </k-form-item>
    </k-form>
  </div>
</template>
<script>
import KInput from "./kInput";
import kFormItem from "./kFormItem";
import kForm from "./kForm";
// import Notive from "../notive"
export default {
  name: "",
  data() {
    return {
      userInfo: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "请输入用户名" }],
        password: [{ required: true, message: "请输入密码" }]
      }
    };
  },
  components: {
    KInput,
    kFormItem,
    kForm
  },
  methods: {
    login() {
      this.$refs["loginForm"].validate(valid => {
        // if (valid) {
        //   // alert("submit");
          
        // } else {
        //   return false;
        // }
        // let notive = this.$creat(Notive, {
        //   title: '提示',
        //   content: !valid ? '检验不通过' : '登录'
        // })
        // notive.show()
        let notive = this.$Notive({
          title: '提示',
          content: !valid ? '检验不通过' : '登录'
        })
        notive.show()
        console.log(valid)
      });
    }
  }
};
</script>

<style scoped></style>
