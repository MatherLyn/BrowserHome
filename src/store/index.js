import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Esc键：切换到 0 状态（观赏状态）
    // 回车键：切换到 1 状态（输入状态）
    // 点击下拉框三角形：切换到 1-1 子状态（选择搜索引擎）
    // 空格键：切换到 2 状态（功能状态）
    // 点击右上角个人按钮：已登录则切换到3状态（定制状态）
    // 未登录则切换到5状态（登录状态）
    // 注册则切换到6状态（注册状态）
    // 忘记密码则切换到7状态（找回密码状态）
    // 点击右上角设置按钮：切换到4状态（设置状态）
    mode: 0,
    // 子状态，每个状态中点击某些按钮触发的该状态下的子状态
    // 附：切换状态时子状态默认切换为0
    subMode: 0,
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

    // 搜索引擎设置
    searchEngineSet: [
      {
        name: '百度',
        logo: require('@/assets/baidu.png')
      },
      {
        name: '360',
        logo: require('@/assets/360.png')
      },
      {
        name: 'Google',
        logo: require('@/assets/google.png')
      },
      {
        name: '搜狗',
        logo: require('@/assets/sougo.png')
      },
      {
        name: 'Bing',
        logo: require('@/assets/bing.png')
      }
    ],
    searchEngineNumber: 0,

    // 登陆状态
    loggedin: false,
    token: '',
    userInfo: {
      username: '',
      password: ''
    },

    // input 的关键字
    searchKeyword: ''

  },
  mutations: {
    changeMode (state, payload) {
      state.mode = payload.mode
      state.subMode = 0
      switch (payload.mode) {
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
        case 5: {
          if (payload.username) {
            state.userInfo.username = payload.username
          }
          if (payload.password) {
            state.userInfo.password = payload.password
          }
          console.log('切换到5')
          break
        }
        case 6: {
          console.log('切换到6')
          break
        }
        case 7: {
          console.log('切换到7')
          break
        }
        case 8: {
          console.log('切换到8')
          break
        }
      }
    },
    changeSubMode (state, target) {
      state.subMode = target
    },
    changeBackground (state, target) {
      localStorage.setItem('backgroundImageNumber', target)
      state.backgroundImageNumber = target
    },
    changeSkin (state, target) {
      localStorage.setItem('skinNumber', target)
      state.skinNumber = target
    },
    changeSearchEngine (state, target) {
      console.log(target)
      localStorage.setItem('searchEngineNumber', target)
      state.searchEngineNumber = target
      state.subMode = 0
    },
    login (state, token) {
      state.loggedin = true
      state.token = token
      localStorage.setItem('loggedin', 1)
      localStorage.setItem('token', token)
    },

    // 需要被复用的函数
    // 要想办法把他们的this绑定在vuex上

    initFromStorage (state, type) {
      // type = 'skinNumber'
      const tempNumber = parseInt(localStorage.getItem(type))
      const functionName = `change${type.substring(0, type.length - 6).replace(type.charAt(0), type.charAt(0).toUpperCase())}`
      console.log(functionName)
      if (isNaN(tempNumber)) {
        this.commit(functionName, 0)
      } else {
        this.commit(functionName, tempNumber)
      }
    },
    doSearch (state) {
      state.searchKeyword = state.searchKeyword.trim()
      console.log(state.searchKeyword)
      switch (state.searchEngineNumber) {
        case 0: {
          location.href = `https://www.baidu.com/s?ie=utf-8&wd=${state.searchKeyword}`
          break
        }
        case 1: {
          break
        }
        case 2: {
          break
        }
        case 3: {
          break
        }
        case 4: {
          break
        }
      }
    }
  },
  actions: {
    
  },
  modules: {
  }
})
