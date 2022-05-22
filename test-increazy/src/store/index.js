import { createStore } from "vuex";
import axios from "axios";
const store = createStore({
  state: {
    listaPesquisa: ["61916-570"],
    listaCEP: {},
  },
  getters: {
    getListaPesquisa(state) {
      return state.listaPesquisa;
    },
  },
  mutations: {
    addToListaPesquisa(state, cep) {
      state.listaPesquisa.push(cep);
    },
    addToListaCEP(state, data) {
      state.listaCEP = data;
    },
    deleteFromListaCEP(state, cep) {
      delete state.listaCEP[cep];
    },
  },
  actions: {
    async getCEPs({ commit, state }) {
      const res = {};
      for (const item of state.listaPesquisa) {
        let i = item.replace("-", "");
        let aux = await axios(`https://viacep.com.br/ws/${i}/json/`);
        res[aux.data.cep] = aux.data;
      }
      console.log(res);
      commit("addToListaCEP", res);
    },
  },
});

export default store;
