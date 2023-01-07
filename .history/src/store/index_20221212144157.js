import { createStore } from 'vuex'

export default createStore({
  state: {
      appName: "Country CRUD",
      countries: [
        { name: 'Chuck Norris', power: Infinity },
        { name: 'Bruce Lee', power: 9000 },
        { name: 'Jackie Chan', power: 7000 },
        { name: 'Jet Li', power: 8000 }
      ]  
    },
    mutations: {
      editCountry(state, payload) {
        let countries = state.countries;
        countries[payload.index].code = payload.code;
        countries[payload.index].name = payload.name;
        console.log("Country updated to: ", payload.code, payload.name);
      },
      deleteCountry(state, payload) {
        let countries = state.countries;
        let index = payload.index;
        let countryToDelete = countries[index];
        countries.splice(index, 1);
        console.log(countryToDelete.name, " deleted.");
      },
      addCountry(state, payload) {
        state.countries.push({ name: payload.name, code: payload.code });
        console.log(payload.name, payload.code, " saved.");
      }
    },
    getters: {
      getCountries: state => {
        if (state !== null) {
          return state.countries.sort(function(a, b) {
            return a.name > b.name ? 1 : -1;
          });
        } else {
          return "Unavailable";
        }
      }
    }
  });