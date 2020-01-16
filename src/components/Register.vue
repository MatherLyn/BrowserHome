<template>
  <div class="form">
    <el-form class="my-form narrower" label-position="top">
      <!-- 标题 -->
      <el-form-item class="title">
        <span class="form-title">注册</span>
        <i class="el-icon-close close" @click="$store.commit('changeMode', { mode: 0 })"></i>
      </el-form-item>

      <!-- 注册 -->
      <div class="form-body">
        <el-form-item class="register-item">
          <label for="registerUsername">用户名</label>
          <el-input
            placeholder="请输入用户名"
            v-model="username"
            clearable
            name="registerUsername"
            prefix-icon="el-icon-user">
          </el-input>
        </el-form-item>
        <el-form-item class="register-item">
          <label for="registerEmail">密保邮箱</label>
          <el-input
            placeholder="请输入密保邮箱"
            v-model="email"
            clearable
            name="registerEmail"
            prefix-icon="el-icon-message">
          </el-input>
        </el-form-item>
        <el-form-item class="register-item">
          <label for="registerBirthday">生日</label>
          <el-date-picker
            v-model="birthday"
            type="date"
            placeholder="请选择您的生日"
            class="birthday"
            :picker-options="pickerOptions"
            :default-value="'2000/1/1'">
          </el-date-picker>
        </el-form-item>
        <el-form-item class="register-item">
          <label for="registerPassword">密码</label>
          <el-input
            placeholder="请输入密码"
            v-model="password"
            show-password
            name="registerPassword"
            prefix-icon="el-icon-lock">
          </el-input>
        </el-form-item>
        <el-form-item class="register-item">
          <el-button
            type="primary"
            class="submit-button"
            @click="doRegister"
            :disabled="!username || !email 
            || !birthday || !password">
            注册
          </el-button>
          <p class="msg" v-if="errorMsg">{{ errorMsg }}</p>
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
export default class Register extends Vue {
  private username: string = ''
  private email: string = ''
  private birthday: string = ''
  private password: string = ''
  private errorMsg: string = ''
  private pickerOptions: any = {
    disabledDate(time: any) {
      return time.getTime() > Date.now()
    }
  }

  constructor () {
    super()
  }

  doRegister () {
    // 还需要对用户名、密码以及邮箱进行规范
    const birthday: Date = new Date(this.birthday)
    const year: number = birthday.getFullYear()
    let monthData: number = birthday.getMonth()
    let dateData: number = birthday.getDate()
    monthData++
    let month: string = monthData.toString()
    let date: string = dateData.toString()
    if (monthData < 10) {
      month = `0${monthData}`
    }
    if (dateData < 10) {
      date = `0${dateData}`
    }
    this.birthday = `${year}/${month}/${date}`
    this.axios.post('/api/user/register', {
      "username": this.username,
      "email": this.email,
      "birthday": this.birthday,
      "password": this.password
    }).then((response: any) => {
      console.log(response)
      if (response.data.status) {
        this.$store.commit('displayTips', { msg: response.data.msg })
        this.$store.commit('changeMode', {
          mode: 5,
          username: this.username,
          password: this.password
        })
      } else {
        this.errorMsg = response.data.msg
      }
    })
  }
}
</script>

<style scoped>
  .register-item {
    margin-bottom: 1rem !important;
  }
  .birthday {
    display: block;
    overflow: hidden;
    width: 100% !important;
  }
</style>