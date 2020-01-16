<template>
  <div class="form">
    <el-form class="my-form narrower" label-position="top">
      <!-- 标题 -->
      <el-form-item class="title">
        <span class="form-title">忘记密码</span>
        <i class="el-icon-close close" @click="$store.commit('changeMode', { mode: 0 })"></i>
      </el-form-item>

      <!-- 忘记密码 -->
      <div class="form-body">
        <el-form-item>
          <label for="forgetPasswordEmail">密保邮箱</label>
          <el-input
            placeholder="请输入注册时填入的邮箱地址"
            v-model="email"
            clearable
            name="forgetPasswordEmail"
            prefix-icon="el-icon-message">
          </el-input>
        </el-form-item>
        <el-form-item>
          <label for="verifyingCode">验证码</label>
          <div style="width: 100%; display: flex;">
            <el-input
              placeholder="请输入验证码"
              v-model="verifyingCode"
              clearable
              name="verifyingCode"
              prefix-icon="el-icon-unlock"
              style="margin-right: 1rem; flex: 1;">
            </el-input>
            <el-button
              icon="el-icon-thumb"
              id="sendCode"
              :disabled="!active"
              :class="{'my-disabled' : !active}"
              @click="doSendCode">
              {{ active ? '发送验证码' : `${count}秒后再次发送` }}
            </el-button>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="submit-button" @click="doFindPassword">验证</el-button>
          <p class="msg" v-if="msg">{{ msg }}</p>
        </el-form-item>
        <a href="javascript: void(0)" @click="$store.commit('changeMode', { mode: 5 })">返回登录</a>
      </div>
    </el-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Login extends Vue {
  private email: string = ''
  private verifyingCode: string = ''
  private active: boolean = true
  private count: number = 30
  private msg: string = ''

  constructor () {
    super()
  }

  doSendCode () {
    // 向服务端请求发送邮件
    console.log('请求邮件')
    this.active = false
    this.count = 30
    const sendCodeCD: number = setInterval(() => {
      this.count--
      if (!this.count) {
        clearInterval(sendCodeCD)
        this.active = true
      }
    }, 1000)
  }

  doFindPassword () {
    console.log('找回密码')
    console.log(this)
  }
}
</script>

<style scoped>
  #sendCode {
    width: 16rem;
    background-color: #561CF5;
    color: #fff;
  }
  #sendCode:hover {
    background-color: #7849f7;
  }
</style>