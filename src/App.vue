<template>
  <div id="app">
    <Main />
    <BGContainer />
    <Snow />
  </div>
</template>

<script>
  import Main from './views/Main'
  import BGContainer from './views/BGContainer'
  import Snow from './views/Snow'
  export default {
    data () {
      return {
        imageSet: [
          {
            name: '',
            src: './assets/bg_winter_2.jpg'
          }
        ]
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
      // Esc键：切换到 0 状态（观赏状态）
      // 回车键：切换到 1 状态（输入状态）
      // 空格键：切换到 2 状态（功能状态）
      // 点击右上角个人按钮：切换到3状态（定制状态）
      // 点击右上角设置按钮：切换到4状态（设置状态）
      document.onkeydown = (e) => {
        switch (this.$store.state.mode) {
          case 0: {
            if (e.keyCode == 27) {
              this.$store.commit('onModeChange', 0)
            }
            if (e.keyCode == 13) {
              this.$store.commit('onModeChange', 1)
            }
            if (e.keyCode == 32) {
              this.$store.commit('onModeChange', 2)
            }
            break
          }
          case 1: {
            if (e.keyCode == 27) {
              this.$store.commit('onModeChange', 0)
            }
            if (e.keyCode == 13) {
              this.$store.commit('onModeChange', 1)
            }
            if (e.keyCode == 32) {
              this.$store.commit('onModeChange', 2)
            }
            break
          }
          case 2: {
            if (e.keyCode == 27) {
              this.$store.commit('onModeChange', 0)
            }
            if (e.keyCode == 13) {
              this.$store.commit('onModeChange', 1)
            }
            if (e.keyCode == 32) {
              this.$store.commit('onModeChange', 2)
            }
            break
          }
        }
        console.log(this.$store.state.mode)
      }
      document.onclick = (e) => {
        this.$store.commit('onModeChange', 0)
      }
      document.getElementById('search').onclick = (e) => {
        this.$store.commit('onModeChange', 1)
        e.stopPropagation()
      }
    },
    components: {
      Main,
      BGContainer,
      Snow
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

  #app {
    width: 100vw;
    height: 100vh;
  }

  #container {
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 1;
    background-image: url('./assets/bg_winter_2.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition-duration: .25s;
    overflow: hidden;
  }

  .blur {
    filter: blur(.1rem);
    -webkit-filter: blur(.1rem);
    -moz-filter: blur(.1rem);
    -ms-filter: blur(.1rem);
    transform: scale(1.1);
  }

  .display {
    opacity: 1;
  }

  .hidden {
    opacity: 0;
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
</style>