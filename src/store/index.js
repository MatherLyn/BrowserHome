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
          document.querySelector('#search').blur()
          break
        }
        case 1: {
          document.querySelector('#search').focus()
          break
        }
        case 2: {
          document.querySelector('#search').blur()
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
