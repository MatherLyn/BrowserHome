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
    // 冬日下雪皮肤
    winterSkin: true
  },
  mutations: {
    onModeChange (state, target) {
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
    }
  },
  actions: {
  },
  modules: {
  }
})
