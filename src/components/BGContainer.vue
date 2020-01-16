<template>
  <div
    id="BGContainer"
    :class="{ 'blur': $store.state.mode === 1 || ($store.state.mode >= 3 && $store.state.mode <= 7) }"
    :style="{ backgroundImage: `url(${$store.state.backgroundImageSet[$store.state.backgroundImageNumber].src})`}">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

  @Component
  export default class BGContainer extends Vue {
    constructor () {
      super()
    }
  }
</script>

<style scoped>
  #BGContainer {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition-duration: .25s;
    overflow: hidden;
  }
</style>