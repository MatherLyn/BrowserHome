<template>
  <div id="app">
    <Main /> <!--z-index: 3-->
    <keep-alive include="Snow"> <!--z-index: 2-->
      <Snow v-if="this.$store.state.skinNumber === 1" />
    </keep-alive>
    <BGContainer /> <!--z-index: 1-->
  </div>
</template>

<script>
  import Main from './views/Main'
  import BGContainer from './views/BGContainer'
  import Snow from './views/Snow'
  export default {
    data () {
      return {

      }
    },
    methods: {
      focusOnInput () {
        
      },
      focusOnHomepage () {

      },
      focusOnFunctions () {

      }
    },
    mounted () {
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

      // 从localStorage读出保存到登录状态
      this.$store.dispatch('initLogin')

      // 从localStorage读出保存的装饰编号
      this.$store.commit('initFromStorage', 'skinNumber')

      // 向后端请求图片数组
      // 从localStorage读出保存的背景图片编号
      this.$store.commit('initFromStorage', 'backgroundNumber')

      // 从localStorage读出保存的搜索引擎编号
      this.$store.commit('initFromStorage', 'searchEngineNumber')
    },
    components: {
      Main,
      BGContainer,
      Snow
    },
    beforeMount () {
      console.log(this.$store)
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
  }

  body {
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    min-width: 360px;
    min-height: 600px;
    font-family: -apple-system, BlinkMacSystemFont, Ubuntu, Microsoft YaHei Light, Microsoft YaHei;
    letter-spacing: .2rem;
    overflow: hidden;
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
</style>