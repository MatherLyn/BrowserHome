<template>
  <main class="main" id="main">
    <Mainbox @click.native.self.stop="$store.commit('changeMode', 0)" /> <!--z-index: 3 4-->
    <Profile class="form" :class="{ 'display-opacity-not-full' : $store.state.mode === 3 }" @click.native.self="$store.commit('changeMode', 0)" /> <!--z-index: 3 4-->
    <Settings class="form" :class="{ 'display-opacity-not-full' : $store.state.mode === 4 }" @click.native.self="$store.commit('changeMode', 0)" /> <!--z-index: 3 4-->
  </main>
</template>

<script>
  import Mainbox from '@/components/Mainbox'
  import Profile from '@/components/Profile'
  import Settings from '@/components/Settings'
  import Login from '@/components/Login'
  import Register from '@/components/Register'
  import ForgetPassword from '@/components/ForgetPassword'
  export default {
    data () {
      return {
        
      }
    },
    methods: {

    },
    components: {
      Mainbox,
      Profile,
      Settings,
      Login,
      Register,
      ForgetPassword
    }
  }
</script>

<style scoped>
  .main {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 3;
    display: flex;
  }

  .main-box {
    position: fixed;
    box-sizing: border-box;
    padding-top: 8rem;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 4;
    opacity: 1;
    transition-duration: .25s;
  }

  .form {
    position: fixed;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: 3;
    opacity: 0;
    transition-duration: .25s;
  }
</style>