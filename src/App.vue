<template>
  <div id="app">
    <Main /> <!--z-index: 3-->
    <keep-alive include="Snow"> <!--z-index: 2-->
      <Snow v-if="this.$store.state.skinNumber === 1" />
    </keep-alive>
    <BGContainer /> <!--z-index: 1-->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Main from './components/Main.vue'
import Snow from './components/Snow.vue'
import BGContainer from './components/BGContainer.vue'
import Component from 'vue-class-component'

@Component({
  components: {
    Main,
    Snow,
    BGContainer
  }
})
export default class App extends Vue{
  constructor () {
    super()
  }

  mounted () {
    // 绑定键盘按键
    document.onkeydown = (e) => {
      switch (this.$store.state.mode) {
        case 0: {
          // 观赏状态
          // Esc退出到0
          // Enter进入1
          // 空格进入2
          if (e.keyCode == 27) {
            this.$store.commit('changeMode', { mode: 0 })
          }
          if (e.keyCode == 13) {
            this.$store.commit('changeMode', { mode: 1 })
          }
          if (e.keyCode == 32) {
            this.$store.commit('changeMode', { mode: 2 })
          }
          break
        }
        case 1: {
          // 输入状态
          // Esc退出到0
          // Enter应该跳转搜索
          // 空格不应该设置功能（要输入内容的）
          if (e.keyCode == 27) {
            this.$store.commit('changeMode', { mode: 0 })
          }
          if (e.keyCode == 13) {
            // 跳转搜索
            this.$store.commit('doSearch')
          }
          break
        }
        case 2: {
          // 功能状态还没想好
          if (e.keyCode == 27) {
            this.$store.commit('changeMode', { mode: 0 })
          }
          if (e.keyCode == 13) {
            this.$store.commit('changeMode', { mode: 1 })
          }
          if (e.keyCode == 32) {
            this.$store.commit('changeMode', { mode: 2 })
          }
          break
        }
        case 3: {
          // 定制状态
          // Esc退出到0
          if (e.keyCode == 27) {
            this.$store.commit('changeMode', { mode: 0 })
          }
        }
        case 4: {
          // 设置状态
          // Esc退出到0
          if (e.keyCode == 27) {
            this.$store.commit('changeMode', { mode: 0 })
          }
        }
      }
    }
    // 初始化 store 的状态
    this.$store.dispatch('initialization')
  }
}
</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }
  html {
    font-size: 10px;
    min-width: 320px;
    min-height: 568px;
  }
  body {
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    min-width: 320px;
    min-height: 568px;
    font-family: "PingFang SC", "BlinkMacSystemFont", "Microsoft YaHei Light", "Microsoft YaHei", "Ubuntu", "WenQuanYi Micro Hei", ;
    /* Helvetica, Tahoma, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei"; */
    letter-spacing: .2rem;
    overflow-x: auto;
    overflow-y: hidden;
  }
  canvas {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 2;
    top: 0;
    left: 0;
  }
  label {
    display: inline-block;
    color: #666;
  }
  a {
    display: block;
    color: #888;
    font-size: 1.4rem;
    line-height: 4rem;
    height: 4rem;
    text-align: center;
  }
  #app {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    z-index: 1;
  }
  .blur {
    filter: blur(.1rem);
    -webkit-filter: blur(.1rem);
    -moz-filter: blur(.1rem);
    -ms-filter: blur(.1rem);
    transform: scale(1.1);
  }
  .display {
    opacity: 1 !important;
    z-index: 4 !important;
  }
  .display-opacity-not-full {
    opacity: .9 !important;
    z-index: 4 !important;
  }
  .display-high-z-index {
    opacity: 1 !important;
    z-index: 5 !important;
  }
  .hidden {
    opacity: 0 !important;
    z-index: 3 !important;
  }
  .my-disabled {
    background-color: rgba(230, 230, 230, .8) !important;
    color: #888 !important;
  }
  .icon {
    position: fixed;
    top: 3.8rem;
    width: 2.2rem;
    height: 2.2rem;
    opacity: .8;
    transition-duration: .25s;
  }
  .icon:hover {
    opacity: 1;
    cursor: pointer;
  }
  .submit-button {
    width: 100% !important;
    margin-top: 2rem !important;
  }
  .el-input__inner {
    line-height: 1.6rem !important;
    width: 100%;
  }
  .my-form {
    transition-duration: .25s;
    width: 50.6rem;
    height: fit-content;
    max-height: 60rem;
    box-sizing: border-box;
    padding: 4rem;
    background: #fff;
    border-radius: .4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
  }
  .narrower {
    width: 42rem;
  }
  .title {
    width: 100%;
    height: 4rem;
    overflow: visible;
  }
  .form-title {
    line-height: 4rem;
    float: left;
    font-weight: 600;
    overflow: visible;
  }
  .close {
    line-height: 4rem;
    float: right;
  }
  .close:hover {
    color: #561CF5;
    cursor: pointer;
  }
  .form-body {
    overflow-y: auto;
  }
  .form-body::-webkit-scrollbar {
    width: .6rem;
  }
  .form-body::-webkit-scrollbar-thumb {
    width: 100%;
    background-color: rgba(48, 48, 48, .15);
    border-radius: .3rem;
  }
  .form-body::-webkit-scrollbar-button {
    display: none;
  }
  .form-body::-webkit-scrollbar-track {
    display: none;
  }
  .msg {
    text-align: center;
    color: #ff0000;
  }
  @media screen and (max-width: 520px) {
    .my-form {
      width: 90%;
      padding: 2rem;
    }
    .image-item {
      width: 33%;
    }
  }
  @media screen and (max-width: 520px) {
    .my-form {
      width: 90%;
    }
    .image-item {
      height: 8rem;
    }
    .active-item::after {
      top: 36%;
      left: 38%;
    }
  }
  
  @media screen and (max-width: 400px) {
    .image-item {
      width: 50%;
      height: 6rem;
    }
    .active-item::after {
      top: 28%;
    }
  }
</style>