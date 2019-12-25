import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mode: 0
  },
  mutations: {
    onModeChange (state, target) {
      state.mode = target
      switch (target) {
        case 0: {
          document.getElementById('search').blur()
          document.getElementById('container').setAttribute('class', '')
          break
        }
        case 1: {
          document.getElementById('search').focus()
          document.getElementById('container').setAttribute('class', 'blur')
          break
        }
        case 2: {
          document.getElementById('search').blur()
          document.getElementById('container').setAttribute('class', '')
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
