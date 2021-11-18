import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authenticated: false
  },
  mutations: {
    SET_AUTH(state) {
      state.authenticated = state
    }
  },
  actions: {
    setAuth({commit}, payload) {
      commit('SET_AUTH', payload)
    }
  },
  modules: {
  }
})
