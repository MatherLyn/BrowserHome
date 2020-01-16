<template>
  <main class="main" id="main">
    <Mainbox @click.native.self.stop="$store.commit('changeMode', { mode: 0 })" /> <!--z-index: 3 4-->
    <Profile @click.native.self="$store.commit('changeMode', { mode: 0 })" class="form" :class="{ 'display-opacity-not-full' : $store.state.mode === 3 }" /> <!--z-index: 3 4-->
    <Settings @click.native.self="$store.commit('changeMode', { mode: 0 })" class="form" :class="{ 'display-opacity-not-full' : $store.state.mode === 4 }" /> <!--z-index: 3 4-->
    <Login @click.native.self="$store.commit('changeMode', { mode: 0 })" class="form" :class="{ 'display-opacity-not-full' : $store.state.mode === 5 }" /> <!--z-index: 3 4-->
    <Register @click.native.self="$store.commit('changeMode', { mode: 0 })" class="form" :class="{ 'display-opacity-not-full' : $store.state.mode === 6 }" /> <!--z-index: 3 4-->
    <ForgetPassword @click.native.self="$store.commit('changeMode', { mode: 0 })" class="form" :class="{ 'display-opacity-not-full' : $store.state.mode === 7 }" /> <!--z-index: 3 4-->
    <Tips :class="[ $store.state.tipsDisplay ? 'display-high-z-index' : 'hidden']" />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import Mainbox from './Mainbox.vue'
import Profile from './Profile.vue'
import Settings from './Settings.vue'
import Login from './Login.vue'
import Register from './Register.vue'
import ForgetPassword from './ForgetPassword.vue'
import Tips from './Tips.vue'
import Component from 'vue-class-component'

  @Component({
    components: {
      Mainbox,
      Profile,
      Settings,
      Login,
      Register,
      ForgetPassword,
      Tips
    }
  })
  export default class Main extends Vue {}
</script>

<style scoped>
  .main {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 3;
    display: flex;
  }
  .form {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 3;
    opacity: 0;
    transition-duration: .25s;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>