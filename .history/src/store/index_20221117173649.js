import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoading: false
  },
  getters: {
  },
  mutations: {
    LOADING (state, status) {
      console.log(state, status)
      state.isLoading = status
    } 
  },
  actions: {
    updateLoading (context, status) {
      console.log(context, status)
      context.commit('LOADING', status)
    }
  },
  modules: {
  }
})
