<template>
  <div class="form">
    <el-form class="my-form narrower" label-position="top">
      <el-form-item class="title">
        <span class="form-title">登录</span>
        <i class="el-icon-close close" @click="$store.commit('changeMode', { mode: 0 })"></i>
      </el-form-item>

      <div class="form-body">
        <el-form-item>
          <label for="loginUsername">用户名</label>
          <el-input
            placeholder="请输入用户名"
            v-model="$store.state.userInfo.username"
            clearable
            name="loginUsername"
            prefix-icon="el-icon-user">
          </el-input>
        </el-form-item>
        <el-form-item>
          <label for="loginPassword">密码</label>
          <a href="javascript: void(0)" style="float: right;" @click="$store.commit('changeMode', { mode: 7 })">忘记密码</a>
          <el-input
            placeholder="请输入密码"
            v-model="$store.state.userInfo.password"
            show-password
            name="loginPassword"
            prefix-icon="el-icon-lock">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            class="submit-button"
            @click="doLogin"
            :disabled="!$store.state.userInfo.username || !$store.state.userInfo.password">
            登录
          </el-button>
          <p class="msg" v-if="errorMsg">{{ errorMsg }}</p>
        </el-form-item>
        <a href="javascript: void(0)" @click="$store.commit('changeMode', { mode: 6 })">注册一个账号</a>
      </div>
    </el-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Login extends Vue {
  private errorMsg: string = ''

  constructor () {
    super()
  }

  doLogin () {
    this.axios.post('/api/user/login', {
      username: this.$store.state.userInfo.username,
      password: this.$store.state.userInfo.password
    }).then((response: any) => {
      console.log(response)
      if (response.data.status) {
        // 登录成功，将token存到vuex和localStorage中，跳转到profile状态
        this.$store.commit('displayTips', { msg: response.data.msg })
        setTimeout(() => {
          this.$store.commit('login', {
            token: response.data.token,
            username: this.$store.state.userInfo.username,
            password: this.$store.state.userInfo.password
          })
          this.$store.commit('changeMode', { mode: 3 })
        }, 1000);
      } else {
        this.errorMsg = response.data.msg
      }
    })
  }
}
</script>
