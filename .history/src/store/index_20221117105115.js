import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoading: false
  },
  getters: {
  },
  mutations: {
    LOADING (state, status) {
      state.isLoading = status
    }
  },
  actions: {
    updateLoading (context, status) {
      context.commit('LOADING', status)
    }
  },
  modules: {
  }
})
