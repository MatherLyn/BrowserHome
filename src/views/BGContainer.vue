<template>
  <div
    id="container"
    :class="{ 'blur': $store.state.mode === 1 || $store.state.mode >= 3 }"
    :style="{ backgroundImage: `url(${$store.state.backgroundImageSet[$store.state.backgroundImageNumber].src})`}"></div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  #container {
    position: absolute;
    width: 100vw;
    height: 100vh;
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