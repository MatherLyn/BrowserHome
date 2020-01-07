<template>
  <div>
    <el-form class="my-form" label-position="top">
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
          <el-radio-group v-model="$store.state.skinNumber">
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
          <el-button type="primary" class="submit-button">登录</el-button>
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
          <el-button type="primary" class="submit-button">注册</el-button>
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
          <el-input
            placeholder="请输入验证码"
            v-model="forgetPassword.verifyingCode"
            clearable
            name="verifyingCode"
            prefix-icon="el-icon-unlock">
            <el-button slot="append" icon="el-icon-thumb" class="send-code">发送验证码</el-button>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="submit-button">验证</el-button>
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
        // register: {
        //   username: '',
        //   email: '',
        //   password: ''
        // },
        // login: {
        //   username: '',
        //   password: ''
        // },
        // forgetPassword: {
        //   email: '',
        //   verifyingCode: ''
        // },
        // profile: {

        // }
      }
    },
    methods: {
      
    },
    beforeMount() {
      // flag: 0表示个人中心，1表示设置，2表示登录，3表示注册，4表示忘记密码
      switch (this.flag) {
        case 0: {
          this.profile = {}
          break
        }
        case 1: {
          break
        }
        case 2: {
          this.login = {
            username: '',
            password: ''
          }
          break
        }
        case 3: {
          this.register = {
            username: '',
            email: '',
            password: ''
          }
          break
        }
        case 4: {
          this.forgetPassword = {
            email: '',
            verifyingCode: ''
          }
          break
        }
      }

      console.log(!this.flag && !this.$store.state.loggedin && !this.register)
    },
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
</style>