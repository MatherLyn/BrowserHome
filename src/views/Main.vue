<template>
  <div class="main">
    <Timer />
    <Input />
    <Motto />
    <Copyright />
    <ProfileBtn />
    <SettingsBtn />
  </div>
</template>

<script>
  import Input from '@/components/Input'
  import Timer from '@/components/Timer'
  import Motto from '@/components/Motto'
  import Copyright from '@/components/Copyright'
  import ProfileBtn from '@/components/ProfileBtn'
  import SettingsBtn from '@/components/SettingsBtn'
  export default {
    data () {
      return {
        
      }
    },
    methods: {

    },
    components: {
      Input,
      Timer,
      Motto,
      Copyright,
      ProfileBtn,
      SettingsBtn
    }
  }
</script>

<style scoped>
  .main {
    box-sizing: border-box;
    padding-top: 8rem;
    width: 100vw;
    height: 100vh;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    height: 100%;
  }
</style>