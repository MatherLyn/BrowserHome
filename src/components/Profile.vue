<template>
  <div class="form">
    <el-form class="my-form narrower" label-position="top">
      <el-form-item class="title">
        <span class="form-title">个人中心</span>
        <i class="el-icon-close close" @click="$store.commit('changeMode', { mode: 0 })"></i>
      </el-form-item>

      <div class="form-body">
        <el-form-item>
          你好，{{ $store.state.userInfo.username }}
        </el-form-item>
        <el-form-item>
          <el-button type="danger" class="submit-button" @click="doLogout">退出登录</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Profile extends Vue {
  constructor () {
    super()
  }

  doLogout () {
    this.$store.commit('logout')
    this.$store.commit('changeMode', { mode: 0 })
    this.$store.commit('displayTips', { msg: '退出成功' })
  }
}
</script>