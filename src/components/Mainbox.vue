<template>
  <div class="main-box" id="mainBox" :class="{ 'hidden' : $store.state.mode >= 3 && $store.state.mode <= 7 }">
    <Timer />
    <Input />
    <Motto />
    <CPRight />
    <ProfileBtn @click.native="profileManagement" />
    <SettingsBtn @click.native="$store.commit('changeMode', { mode: 4 })" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Input from './Input.vue'
import Timer from './Timer.vue'
import Motto from './Motto.vue'
import CPRight from './CPRight.vue'
import ProfileBtn from './ProfileBtn.vue'
import SettingsBtn from './SettingsBtn.vue'
import Component from 'vue-class-component'

  @Component({
    components: {
      Input,
      Timer,
      Motto,
      CPRight,
      ProfileBtn,
      SettingsBtn
    }
  })
  export default class Mainbox extends Vue {
    // Constructor
    constructor () {
      super()
    }

    // Methods
    profileManagement () {
      if (this.$store.state.loggedin) {
        this.$store.commit('changeMode', { mode: 3 })
      } else {
        this.$store.commit('changeMode', { mode: 5 })
      }
    }
  }
</script>

<style scoped>
  .main-box {
    position: absolute;
    box-sizing: border-box;
    padding-top: 8rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 4;
    opacity: 1;
    transition-duration: .25s;
  }
</style>