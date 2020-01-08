<template>
  <div>
    <el-form class="my-form" label-position="top" :class="{ 'narrower' : flag != 1 }">
      <!-- 标题 -->
      <el-form-item>
        <span class="form-title" v-if="!flag">个人中心</span>
        <span class="form-title" v-if="flag === 1">设置</span>
        <span class="form-title" v-if="flag === 2">登录</span>
        <span class="form-title" v-if="flag === 3">注册</span>
        <span class="form-title" v-if="flag === 4">忘记密码</span>
        <i class="el-icon-close close" @click="$store.commit('changeMode', 0)"></i>
      </el-form-item>

      <!-- 设置 -->
      <div v-if="flag === 1">
        <el-form-item label="动画装饰（可能会对性能产生影响）">
          <el-radio-group v-model="$store.state.skinNumber" text-color="#561CF5">
            <el-radio
              v-for="(item, index) in $store.state.skinSet"
              :key="index"
              :label="index"
              class="skin-radio"
              :disabled="index === 2 || index === 3"
              @change="$store.commit('changeSkin', index)">
              {{ item.name }}
            </el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="背景图片">
          <el-image
            v-for="(item, index) in $store.state.backgroundImageSet"
            :key="index"
            :title="item.name"
            :src="item.src"
            class="image-item"
            :class="{ 'active-item': index === $store.state.backgroundImageNumber }"
            @click="$store.commit('changeBackground', index)">
          </el-image>
        </el-form-item>
      </div>

      <!-- 登录 -->
      <div v-if="flag === 2">
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
          <a href="javascript: void(0)" style="float: right;" @click="$store.commit('changeMode', 7)">忘记密码</a>
          <el-input
            placeholder="请输入密码"
            v-model="login.password"
            show-password
            name="loginPassword"
            prefix-icon="el-icon-lock">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="submit-button" @click="doLogin">登录</el-button>
        </el-form-item>
        <a href="javascript: void(0)" @click="$store.commit('changeMode', 6)">注册一个账号</a>
      </div>

      <!-- 注册 -->
      <div v-if="flag === 3">
        <el-form-item>
          <label for="registerUsername">用户名</label>
          <el-input
            placeholder="请输入用户名"
            v-model="register.username"
            clearable
            name="registerUsername"
            prefix-icon="el-icon-user">
          </el-input>
        </el-form-item>
        <el-form-item>
          <label for="registerEmail">密保邮箱</label>
          <el-input
            placeholder="请输入密保邮箱"
            v-model="register.email"
            clearable
            name="registerEmail"
            prefix-icon="el-icon-message">
          </el-input>
        </el-form-item>
        <el-form-item>
          <label for="registerPassword">密码</label>
          <el-input
            placeholder="请输入密码"
            v-model="register.password"
            show-password
            name="registerPassword"
            prefix-icon="el-icon-lock">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="submit-button" @click="doRegister">注册</el-button>
        </el-form-item>
        <a href="javascript: void(0)" @click="$store.commit('changeMode', 5)">返回登录</a>
      </div>


      <!-- 忘记密码 -->
      <div v-if="flag === 4">
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
        </el-form-item>
        <a href="javascript: void(0)" @click="$store.commit('changeMode', 5)">返回登录</a>
      </div>

      <!-- 个人中心 -->
      <div v-if="!flag">

      </div>

    </el-form>
  </div>

</template>

<script>
  export default {
    props: [
      'flag'
    ],
    data () {
      return {
        register: {
          username: '',
          email: '',
          password: ''
        },
        login: {
          username: '',
          password: ''
        },
        forgetPassword: {
          active: true,
          count: 30,
          findPassword: {
            email: '',
            verifyingCode: ''
          }
        },
        profile: {

        }
      }
    },
    methods: {
      doLogin () {

      },
      doRegister () {

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
      // flag: 0表示个人中心，1表示设置，2表示登录，3表示注册，4表示忘记密码
      switch (this.flag) {
        case 0: {
          this.register = undefined
          this.login = undefined
          this.forgetPassword = undefined
          break
        }
        case 1: {
          this.profile = undefined
          this.login = undefined
          this.register = undefined
          this.forgetPassword = undefined
          break
        }
        case 2: {
          this.profile = undefined
          this.register = undefined
          this.forgetPassword = undefined
          break
        }
        case 3: {
          this.profile = undefined
          this.login = undefined
          this.forgetPassword = undefined
          break
        }
        case 4: {
          this.profile = undefined
          this.login = undefined
          this.register = undefined
          break
        }
      }
      
      console.log(!this.flag && !this.$store.state.loggedin && !this.register)
    },
    mounted () {
      
    }
  }
</script>

<style scoped>
  .my-form {
    position: fixed;
    transition-duration: .25s;
    width: 52rem;
    height: fit-content;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    box-sizing: border-box;
    padding: 4rem;
    background: #fff;
    border-radius: .4rem;
  }

  .narrower {
    width: 42rem;
  }

  .form-title {
    line-height: 4rem;
    float: left;
  }

  .close {
    line-height: 4rem;
    float: right;
  }

  .close:hover {
    color: #7090FF;
    cursor: pointer;
  }

  .skin-radio {
    display: block !important;
    margin-bottom: 1rem !important;
    float: none;
  }

  .image-item {
    width: 10rem;
    height: 6.18rem;
    padding: .5rem
  }

  .image-item:hover {
    cursor: pointer;
  }

  .active-item::before {
    content: '';
    position: absolute;
    top: .5rem;
    left: .5rem;
    display: block;
    width: 10rem;
    height: 6.18rem;
    background-color: #333;
    opacity: .3;
  }

  .active-item::after {
    content: '';
    position: absolute;
    top: 2.5rem;
    left: 4rem;
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
</style>