<template>
  <div class="main-box" id="mainBox" :class="{ 'hidden' : $store.state.mode >= 3 && $store.state.mode <= 7 }">
    <Timer />
    <Input />
    <Motto />
    <Copyright />
    <ProfileBtn @click.native="profileManagement" />
    <SettingsBtn @click.native="$store.commit('changeMode', { mode: 4 })" />
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
      profileManagement () {
        if (this.$store.state.loggedin) {
          this.$store.commit('changeMode', { mode: 3 })
        } else {
          this.$store.commit('changeMode', { mode: 5 })
        }
      }
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
  
</style>