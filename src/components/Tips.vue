<template>
  <div class="tips">
    <div class="container">
      <div class="hook"></div>
    </div>
    <p class="msg">{{ $store.state.tipsMsg }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

  @Component
  export default class Tips extends Vue {}
</script>

<style scoped>
  .tips {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem 2rem;
    width: fit-content;
    height: 1.8rem;
    line-height: 1.8rem;
    background-color: #fff;
    border-radius: .5rem;
    display: flex;
    align-items: center;
    border: .1rem solid #888;
    margin: auto;
    transition-duration: .25s;
    z-index: 5;
  }
  .container {
    display: inline-block;
    vertical-align: top;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    background-color: #561CF5;
    margin-right: .6rem;
  }
  .hook {
    position: relative;
    top: .3rem;
    left: .2rem;
    width: 1.2rem;
    height: .6rem;
    border-left: .1rem solid #fff;
    border-bottom: .1rem solid #fff;
    transform: rotate(-45deg);
    
  }
  .msg {
    display: inline-block;
    height: 1.8rem;
    vertical-align: top;
    color: #333;
  }
</style>