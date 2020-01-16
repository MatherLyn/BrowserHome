import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import httpConfig from '../http-config'

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

    // 外观设置
    appearanceSet: [
      {
        name: '浅色'
      },
      {
        name: '深色'
      }
    ],
    appearanceNumber: 0,

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
      },
      {
        name: '新年烟花装饰（即将到来）'
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
    userInfo: {
      token: '',
      username: '',
      password: ''
    },

    // input 的关键字
    searchKeyword: '',
    // 控制tips是否显示以及显示内容
    tipsDisplay: false,
    tipsMsg: ''
  },
  mutations: {
    changeMode (state: any, payload: any) {
      state.mode = payload.mode
      state.subMode = 0
      switch (payload.mode) {
        case 0: {
          (<HTMLInputElement>document.getElementById('search')).blur()
          console.log('切换到0')
          break
        }
        case 1: {
          (<HTMLInputElement>document.getElementById('search')).focus()
          console.log('切换到1')
          break
        }
        case 2: {
          (<HTMLInputElement>document.getElementById('search')).blur()
          console.log('切换到2')
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
    changeSubMode (state: any, payload: any) {
      state.subMode = payload.subMode
    },
    changeAppearance (state: any, payload: any) {
      localStorage.setItem('appearanceNumber', payload.index)
      state.appearanceNumber = payload.index
    },
    changeBackgroundImage (state: any, payload: any) {
      localStorage.setItem('backgroundImageNumber', payload.index)
      state.backgroundImageNumber = payload.index
    },
    changeSkin (state: any, payload: any) {
      localStorage.setItem('skinNumber', payload.index)
      state.skinNumber = payload.index
    },
    changeSearchEngine (state: any, payload: any) {
      localStorage.setItem('searchEngineNumber', payload.index)
      state.searchEngineNumber = payload.index
      state.subMode = 0
    },
    login (state: any, payload: any) {
      state.loggedin = true
      state.userInfo = payload
      localStorage.setItem('loggedin', '1')
      localStorage.setItem('token', payload.token)
      localStorage.setItem('username', payload.username)
      localStorage.setItem('password', payload.password)
    },
    logout (state: any, payload: any) {
      state.loggedin = false
      state.userInfo = {
        token: '',
        username: '',
        password: ''
      }
      localStorage.setItem('loggedin', '0')
    },

    // 需要被复用的函数
    // 要想办法把他们的this绑定在vuex上

    initFromStorage (state: any, type: string) {
      // type = 'skinNumber'
      const typeName: any = localStorage.getItem(type)
      const functionName: string = `change${type.substring(0, type.length - 6).replace(type.charAt(0), type.charAt(0).toUpperCase())}`
      console.log(functionName)
      if (typeName === null) {
        this.commit(functionName, { index: 0 })
      } else {
        const tempNumber: number = parseInt(typeName)
        this.commit(functionName, { index: tempNumber })
      }
    },
    doSearch (state: any) {
      state.searchKeyword = state.searchKeyword.trim()
      console.log(state.searchKeyword)
      switch (state.searchEngineNumber) {
        case 0: {
          location.href = `https://www.baidu.com/s?ie=utf-8&wd=${ state.searchKeyword }`
          break
        }
        case 1: {
          location.href = `https://www.so.com/s?q=${ state.searchKeyword }`
          break
        }
        case 2: {
          location.href = `https://www.google.com/search?q=${ state.searchKeyword }`
          break
        }
        case 3: {
          location.href = `http://www.sogou.com/web?query=${ state.searchKeyword }`
          break
        }
        case 4: {
          location.href = `https://www.bing.com/search?q=${ state.searchKeyword }`
          break
        }
      }
    },
    displayTips (state: any, payload: any) {
      state.tipsMsg = payload.msg
      state.tipsDisplay = true
      setTimeout(() => {
        state.tipsDisplay = false
        setTimeout(() => {
          state.tipsMsg = ''
        }, 300);
      }, 1000);
    }
  },
  actions: {
    initialization (context) {
      // 处理装饰
      context.commit('initFromStorage', 'skinNumber')
      // 处理背景图片
      context.commit('initFromStorage', 'backgroundImageNumber')
      // 处理搜索引擎
      context.commit('initFromStorage', 'searchEngineNumber')
      // 处理登录状态
      const loggedin = localStorage.getItem('loggedin')
      if (loggedin === null) {
        return
      } else {
        if (parseInt(loggedin) === 0) {
          return
        }
        const token = localStorage.getItem('token')
        const username = localStorage.getItem('username')
        const password = localStorage.getItem('password')
        context.state.userInfo = {
          token,
          username,
          password
        }
        console.log('尝试自动登录')
        if (username !== null && password !== null) {
          // 发送请求
          axios.post(`${httpConfig.host}:${httpConfig.port}/api/user/login`, { username, password })
          .then((response: any) => {
            context.commit('login', context.state.userInfo)
            context.commit('displayTips', { msg: response.data.msg })
          })
        }
      }
    }
  },
  modules: {
  }
})
