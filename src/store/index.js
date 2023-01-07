import { createStore } from 'vuex'

export default createStore({
  state: {
      countries: [
        { name: 'Chuck Norris', power: Infinity },
        { name: 'Bruce Lee', power: 9000 },
        { name: 'Jackie Chan', power: 7000 },
        { name: 'Jet Li', power: 8000 }
      ]  
    },
    mutations: {
    },
    getters: {
      countries: (state) => state.countries,

    }
  });