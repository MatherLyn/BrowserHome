<template>
  <div>
    <el-form class="my-form narrower" label-position="top" :class="{ 'narrower' : flag !== 1 }">
      <!-- 标题 -->
      <el-form-item class="title">
        <span class="form-title" v-if="!flag">个人中心</span>
        <span class="form-title" v-if="flag === 1">设置</span>
        <span class="form-title" v-if="flag === 2">登录</span>
        <span class="form-title" v-if="flag === 3">注册</span>
        <span class="form-title" v-if="flag === 4">忘记密码</span>
        <i class="el-icon-close close" @click="$store.commit('changeMode', { mode: 0 })"></i>
      </el-form-item>

      <!-- 设置 -->
      <div v-if="flag === 1" class="form-body">
        <el-form-item label="外观">
          <el-radio-group v-model="$store.state.appearanceNumber" text-color="#561CF5">
            <el-radio
              v-for="(item, index) in $store.state.appearanceSet"
              :key="index"
              :label="index"
              :disabled="index === 0 || index === 1"
              @change="$store.commit('changeAppearance', { index })">
              {{ item.name }}
              </el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="动画装饰（可能会对性能产生影响）">
          <el-radio-group v-model="$store.state.skinNumber" text-color="#561CF5">
            <el-radio
              v-for="(item, index) in $store.state.skinSet"
              :key="index"
              :label="index"
              class="skin-radio"
              :disabled="index === 2 || index === 3 || index === 4"
              @change="$store.commit('changeSkin', { index })">
              {{ item.name }}
            </el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="背景图片">
          <div class="image-container">
            <el-image
              v-for="(item, index) in $store.state.backgroundImageSet"
              :key="index"
              :title="item.name"
              :src="item.src"
              class="image-item"
              :class="{ 'active-item': index === $store.state.backgroundImageNumber }"
              @click="$store.commit('changeBackgroundImage', { index })"
              lazy>
              <div slot="placeholder" class="image-slot">
                加载中<span class="dot">...</span>
              </div>
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </div>
        </el-form-item>
      </div>

      <!-- 登录 -->
      <div v-if="flag === 2" class="form-body">
        <el-form-item>
          <label for="loginUsername">用户名</label>
          <el-input
            placeholder="请输入用户名"
            v-model="login.username"
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
            v-model="login.password"
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
            :disabled="!login.username || !login.password">
            登录
          </el-button>
          <p class="msg" v-if="loginMsg">{{ loginMsg }}</p>
        </el-form-item>
        <a href="javascript: void(0)" @click="$store.commit('changeMode', { mode: 6 })">注册一个账号</a>
      </div>

      <!-- 注册 -->
      <div v-if="flag === 3" class="form-body">
        <el-form-item class="register-item">
          <label for="registerUsername">用户名</label>
          <el-input
            placeholder="请输入用户名"
            v-model="register.username"
            clearable
            name="registerUsername"
            prefix-icon="el-icon-user">
          </el-input>
        </el-form-item>
        <el-form-item class="register-item">
          <label for="registerEmail">密保邮箱</label>
          <el-input
            placeholder="请输入密保邮箱"
            v-model="register.email"
            clearable
            name="registerEmail"
            prefix-icon="el-icon-message">
          </el-input>
        </el-form-item>
        <el-form-item class="register-item">
          <label for="registerBirthday">生日</label>
          <el-date-picker
            v-model="register.birthday"
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
            v-model="register.password"
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
            :disabled="!register.username || !register.email 
            || !register.birthday || !register.password">
            注册
          </el-button>
          <p class="msg" v-if="registerMsg">{{ registerMsg }}</p>
        </el-form-item>
        <a href="javascript: void(0)" @click="$store.commit('changeMode', { mode: 5 })">返回登录</a>
      </div>


      <!-- 忘记密码 -->
      <div v-if="flag === 4" class="form-body">
        <el-form-item>
          <label for="forgetPasswordEmail">密保邮箱</label>
          <el-input
            placeholder="请输入注册时填入的邮箱地址"
            v-model="forgetPassword.email"
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
              v-model="forgetPassword.verifyingCode"
              clearable
              name="verifyingCode"
              prefix-icon="el-icon-unlock"
              style="margin-right: 1rem; flex: 1;">
            </el-input>
            <el-button
              icon="el-icon-thumb"
              id="sendCode"
              :disabled="!forgetPassword.active"
              :class="{'my-disabled' : !forgetPassword.active}"
              @click="doSendCode">
              {{ forgetPassword.active ? '发送验证码' : `${forgetPassword.count}秒后再次发送` }}
            </el-button>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="submit-button" @click="doFindPassword">验证</el-button>
          <p class="msg" v-if="forgetPasswordMsg">{{ forgetPasswordMsg }}</p>
        </el-form-item>
        <a href="javascript: void(0)" @click="$store.commit('changeMode', { mode: 5 })">返回登录</a>
      </div>

      <!-- 个人中心 -->
      <div v-if="!flag">
        <div>你好，{{ $store.state.userInfo.username }}</div>
        <el-form-item>
          <el-button type="danger" class="submit-button" @click="doLogout">退出登录</el-button>
        </el-form-item>
      </div>

    </el-form>
    <Tips :msg="tipsMsg" :class="[tipsDisplay ? 'display' : 'hidden']"/>
  </div>

</template>

<script>
  import Tips from './Tips'
  export default {
    props: [
      'flag'
    ],
    data () {
      return {
        register: {
          username: '',
          email: '',
          birthday: '',
          password: ''
        },
        registerMsg: '',
        login: {
          username: '',
          password: ''
        },
        loginMsg: '',
        forgetPassword: {
          active: true,
          count: 30,
          findPassword: {
            email: '',
            verifyingCode: ''
          }
        },
        forgetPasswordMsg: '',
        profile: {
          
        },
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now()
          },
        },
        tipsMsg: '',
        tipsDisplay: false
      }
    },
    methods: {
      doLogin () {
        console.log(this)
        this.axios.post('/api/user/login', this.login)
        .then(response => {
          console.log(response)
          if (response.data.status) {
            // 登录成功，将token存到vuex和localStorage中，跳转到profile状态
            this.tipsMsg = response.data.msg
            this.tipsDisplay = true
            setTimeout(() => {
              this.tipsDisplay = false
              this.$store.commit('login', {
                token: response.data.token,
                username: this.login.username,
                password: this.login.password
              })
              this.$store.commit('changeMode', { mode: 3 })
            }, 1000);
          } else {
            // 登录失败，显示提示
            this.loginMsg = response.data.msg
          }
        })
      },
      doLogout () {
        this.$store.commit('logout')
        this.tipsMsg = '退出登录成功'
        this.tipsDisplay = true
        setTimeout(() => {
          this.tipsDisplay = false
          this.$store.commit('changeMode', { mode: 0 })
        }, 1000);
      },
      doRegister () {
        const birthday = new Date(this.register.birthday)
        const year = birthday.getFullYear()
        let month = birthday.getMonth()
        let date = birthday.getDate()
        month++
        if (month < 10) {
          month = `0${month}`
        }
        if (date < 10) {
          date = `0${date}`
        }
        this.register.birthday = `${year}/${month}/${date}`
        this.axios.post('/api/user/register', this.register)
        .then(response => {
          console.log(response)
          if (response.data.status) {
            // 注册成功跳转到登录状态
            // 如何把参数传递到注册
            const username = this.register.username
            const password = this.register.password
            this.tipsMsg = response.data.msg
            this.tipsDisplay = true
            setTimeout(() => {
              this.tipsDisplay = false
              this.$store.commit('changeMode', { mode: 5, username, password })
            }, 1000);
          } else {
            // 注册失败显示提示
            this.registerMsg = response.data.msg
          }
        })
      },
      doSendCode () {
        // 向服务端请求发送邮件
        this.forgetPassword.active = false
        this.forgetPassword.count = 30
        const sendCodeCD = setInterval(() => {
          this.forgetPassword.count--
          if (!this.forgetPassword.count) {
            clearInterval(sendCodeCD)
            this.forgetPassword.active = true
          }
        }, 1000)
      },
      doFindPassword () {
      }
    },
    beforeMount() {
      
      console.log(!this.flag && !this.$store.state.loggedin && !this.register)
    },
    mounted () {
      // flag: 0表示个人中心，1表示设置，2表示登录，3表示注册，4表示忘记密码
      switch (this.flag) {
        case 0: {
          const DataKeys = Object.keys(this.$data)
          DataKeys.splice(6, 1)
          DataKeys.splice(7, 2)
          DataKeys.forEach(item => {
            delete this.$data[item]
          })
          break
        }
        case 1: {
          Object.keys(this.$data).forEach((item) => {
            delete this.$data[item]
          })
          break
        }
        case 2: {
          const DataKeys = Object.keys(this.$data)
          DataKeys.splice(2, 2)
          DataKeys.splice(6, 2)
          DataKeys.forEach(item => {
            delete this.$data[item]
          })
          break
        }
        case 3: {
          const DataKeys = Object.keys(this.$data)
          DataKeys.splice(0, 2)
          DataKeys.splice(5, 3)
          DataKeys.forEach(item => {
            delete this.$data[item]
          })
          break
        }
        case 4: {
          const DataKeys = Object.keys(this.$data)
          DataKeys.splice(4, 2)
          DataKeys.splice(6, 2)
          DataKeys.forEach(item => {
            delete this.$data[item]
          })
          break
        }
      }
    },
    components: {
      Tips
    }
  }
</script>

<style scoped>
  .my-form {
    transition-duration: .25s;
    width: 50.6rem;
    height: fit-content;
    max-height: 60rem;
    box-sizing: border-box;
    padding: 4rem;
    background: #fff;
    border-radius: .4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
  }
  .narrower {
    width: 42rem;
  }
  .title {
    overflow: visible;
  }
  .form-title {
    line-height: 4rem;
    float: left;
    font-weight: 600;
    overflow: visible;
  }
  .close {
    line-height: 4rem;
    float: right;
  }
  .close:hover {
    color: #561CF5;
    cursor: pointer;
  }
  .form-body {
    overflow-y: auto;
  }
  .form-body::-webkit-scrollbar {
    width: .6rem;
  }
  .form-body::-webkit-scrollbar-thumb {
    width: 100%;
    background-color: rgba(48, 48, 48, .15);
    border-radius: .3rem;
  }
  .form-body::-webkit-scrollbar-button {
    display: none;
  }
  .form-body::-webkit-scrollbar-track {
    display: none;
  }
  .skin-radio {
    display: block !important;
    margin-bottom: 1rem !important;
    float: none;
  }
  .image-container {
    display: flex;
    flex-wrap: wrap;
  }
  .image-item {
    box-sizing: border-box;
    width: 14rem;
    height: 9rem;
    padding: .5rem;
  }
  .image-item:hover {
    cursor: pointer;
  }
  .image-slot {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eee;
  }
  .image-slot > i {
    font-size: 2rem;
    color: #777;
  }
  .active-item::before {
    content: '';
    position: absolute;
    top: .5rem;
    left: .5rem;
    display: block;
    width: calc(100% - 1rem);
    height: calc(100% - 1rem);
    background-color: #333;
    opacity: .3;
  }
  .active-item::after {
    content: '';
    position: absolute;
    top: 40%;
    left: 42%;
    display: block;
    box-sizing: border-box;
    width: 3rem;
    height: 1.5rem;
    border-left: .2rem solid #fff;
    border-bottom: .2rem solid #fff;
    transform: rotate(-45deg);
  }
  #sendCode {
    width: 16rem;
    background-color: #561CF5;
    color: #fff;
  }
  #sendCode:hover {
    background-color: #7849f7;
  }
  .register-item {
    margin-bottom: 1rem !important;
  }
  .birthday {
    display: block;
    overflow: hidden;
    width: 100% !important;
  }
  .msg {
    text-align: center;
    color: #ff0000;
  }
  @media screen and (max-width: 520px) {
    .my-form {
      width: 90%;
      padding: 2rem;
    }
    .image-item {
      width: 33%;
    }
  }
  @media screen and (max-width: 520px) {
    .my-form {
      width: 90%;
    }
    .image-item {
      height: 8rem;
    }
    .active-item::after {
      top: 36%;
      left: 38%;
    }
  }
  
  @media screen and (max-width: 400px) {
    .image-item {
      height: 6rem;
    }
    .active-item::after {
      top: 28%;
    }
  }
</style>