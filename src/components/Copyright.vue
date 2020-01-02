<template>
  <div class="container" :class="{ 'display': $store.state.mode == 1, 'hidden': $store.state.mode != 1 }">
    <img src="../assets/cpright.png" alt="" class="cpright-img">
    <span class="cpright-text">Copy right 木木日常 2019</span>
  </div>
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
  .container {
    display: flex;
    line-height: 1.4rem;
    position: absolute;
    bottom: 4rem;
    transition-duration: .25s;
  }

  .cpright-img {
    margin-right: 1rem;
    width: 1.4rem;
    height: 1.4rem;
  }

  .cpright-text {
    color: #fff;
    font-size: 1.2rem;
  }
</style>