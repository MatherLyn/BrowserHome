import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Esc键：切换到 0 状态（观赏状态）
    // 回车键：切换到 1 状态（输入状态）
    // 空格键：切换到 2 状态（功能状态）
    // 点击右上角个人按钮：切换到3状态（定制状态）
    // 点击右上角设置按钮：切换到4状态（设置状态）
    mode: 0,
    // 背景图片设置
    backgroundImageSet: [
      {
        src: require('../assets/bg-forest-1.jpg')
      },
      {
        src: require('../assets/bg-forest-2.jpg')
      },
      {
        src: require('../assets/bg-grass.jpg')
      },
      {
        src: require('../assets/bg-lake-1.jpg')
      },
      {
        src: require('../assets/bg-milk-sea.jpg')
      },
      {
        src: require('../assets/bg-snow.jpg')
      }
    ],
    backgroundImageNumber: 0,

    // 动画装饰设置
    skinSet: [
      {
        name: '不使用动画装饰'
      },
      {
        name: '冬日装饰'
      },
      {
        name: '雨夜装饰（即将到来）'
      },
      {
        name: '暖阳装饰（即将到来）'
      }
    ],
    skinNumber: 0,

    // 登陆状态
    loggedin: false,
    userInfo: {
      username: '',
      email: '',
      password: '',
    }
  },
  mutations: {
    changeMode (state, target) {
      state.mode = target
      switch (target) {
        case 0: {
          console.log('切换到0')
          document.getElementById('search').blur()
          break
        }
        case 1: {
          console.log('切换到1')
          document.getElementById('search').focus()
          break
        }
        case 2: {
          console.log('切换到2')
          document.getElementById('search').blur()
          break
        }
        case 3: {
          console.log('切换到3')
          break
        }
        case 4: {
          console.log('切换到4')
          break
        }
      }
    },
    changeBackground (state, target) {
      state.backgroundImageNumber = target
      localStorage.setItem('backgroundImageNumber', target)
    },
    changeSkin (state, target) {
      state.skinNumber = target
      localStorage.setItem('skinNumber', target)
    }
  },
  actions: {
  },
  modules: {
  }
})
