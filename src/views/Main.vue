<template>
  <div class="main" id="main">
    <div class="main-box" id="mainBox" :class="{ 'hidden' : $store.state.mode === 3 || $store.state.mode === 4 }">
      <Timer />
      <Input />
      <Motto />
      <Copyright />
      <ProfileBtn @click.native="changeMode(3)" />
      <SettingsBtn @click.native="changeMode(4)" />
    </div>
    <Profile class="form" :class="{ 'display-opacity-not-full' : $store.state.mode === 3 }" />
    <Settings class="form" :class="{ 'display-opacity-not-full' : $store.state.mode === 4 }" />
  </div>
</template>

<script>
  import Input from '@/components/Input'
  import Timer from '@/components/Timer'
  import Motto from '@/components/Motto'
  import Copyright from '@/components/Copyright'
  import Profile from '@/components/Profile'
  import Settings from '@/components/Settings'
  import ProfileBtn from '@/components/ProfileBtn'
  import SettingsBtn from '@/components/SettingsBtn'
  export default {
    data () {
      return {
        
      }
    },
    methods: {
      changeMode (target) {
        this.$store.commit('onModeChange', target)
        event.stopPropagation()
      }
    },
    components: {
      Input,
      Timer,
      Motto,
      Copyright,
      Profile,
      Settings,
      ProfileBtn,
      SettingsBtn
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
    z-index: -1;
    opacity: 0;
    transition-duration: .25s;
  }
</style>