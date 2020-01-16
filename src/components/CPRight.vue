<template>
  <footer class="cpright" :class="{ 'display': $store.state.mode == 1, 'hidden': $store.state.mode != 1 }">
    <img src="../assets/cpright.png" alt="" class="cpright-img">
    <span class="cpright-text">Copy right 木木日常 2019</span>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class CPRight extends Vue {}
</script>

<style scoped>
  .cpright {
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