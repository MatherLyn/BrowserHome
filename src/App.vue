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
              this.$store.commit('changeMode', 0)
            }
            if (e.keyCode == 13) {
              this.$store.commit('changeMode', 1)
            }
            if (e.keyCode == 32) {
              this.$store.commit('changeMode', 2)
            }
            break
          }
          case 1: {
            // 输入状态
            // Esc退出到0
            // Enter应该跳转搜索
            // 空格不应该设置功能（要输入内容的）
            if (e.keyCode == 27) {
              this.$store.commit('changeMode', 0)
            }
            if (e.keyCode == 13) {
              // 跳转搜索
            }
            break
          }
          case 2: {
            // 功能状态还没想好
            if (e.keyCode == 27) {
              this.$store.commit('changeMode', 0)
            }
            if (e.keyCode == 13) {
              this.$store.commit('changeMode', 1)
            }
            if (e.keyCode == 32) {
              this.$store.commit('changeMode', 2)
            }
            break
          }
          case 3: {
            // 定制状态
            // Esc退出到0
            if (e.keyCode == 27) {
              this.$store.commit('changeMode', 0)
            }
          }
          case 4: {
            // 设置状态
            // Esc退出到0
            if (e.keyCode == 27) {
              this.$store.commit('changeMode', 0)
            }
          }
        }
      }
      localStorage.clear()
      // 将当前选择的动画装饰存入localStorage
      const skinNumber = localStorage.getItem('skinNumber')
      if (skinNumber !== null) {
        this.$store.commit('changeSkin', skinNumber)
      } else {
        localStorage.setItem('skinNumber', 0)
      }

      // 向后端请求图片数组
      // 将当前背景图片存入localStorage
      const backgroundNumber = localStorage.getItem('backgroundImageNumber')
      if (backgroundNumber !== null) {
        this.$store.commit('changeBackground', backgroundNumber)
      } else {
        localStorage.setItem('backgroundImageNumber', 0)
      }
    },
    components: {
      Main,
      BGContainer,
      Snow
    },
    beforeMount () {
      
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
    font-family: applesystem, BlinkMacSystemFont, Ubuntu, Microsoft YaHei Light, Microsoft YaHei;
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
    float: left;
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
    width: 100vw;
    height: 100vh;
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
</style>