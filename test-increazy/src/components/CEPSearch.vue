<template>
  <div class="cpf-search">
    <input
      type="text"
      placeholder="Insira o CEP"
      id="input_cep"
      v-mask="['#####-###']"
    />
    <button @click="$store.commit('addToListaPesquisa', getInput())">
      <img src="../imgs/icone-plus.svg" alt="" />
      <span>Adicionar Endereço</span>
    </button>
    <div class="cep_container">
      <CEPToSearch v-for="item in lista" :key="item" :cep="item" />
    </div>
    <button @click="$store.dispatch('getCEPs')">
      <span>Gerar Endereços</span>
    </button>
  </div>
</template>

<script>
import CEPToSearch from "./CEPToSearch.vue";
import { useStore } from "vuex";
import { mask } from "vue-the-mask";
export default {
  name: "CEPSearch",

  components: {
    CEPToSearch,
  },
  data() {
    return {
      lista: useStore().state.listaPesquisa,
    };
  },
  methods: {
    getInput() {
      return document.querySelector('[id="input_cep"]').value;
    },
  },
  directives: { mask },
};
</script>

<style scoped>
.cpf-search {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 3fr 1fr;
  gap: 10px;
  max-height: 40vh;
  max-width: 35vw;
  min-width: 400px;
  padding: 10px 10px 50px;
  margin: 20px;
  border-bottom: solid 5px #aaa;
}
.cep_container {
  grid-column-start: 1;
  grid-column-end: 3;
  overflow-y: auto;
}
button {
  grid-column-start: 2;
  grid-column-end: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #b600ee;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  border: none;
  border-radius: 5px;
  transition: 0.2s ease-in-out;
}
button:hover {
  background: #6d038d;
}
button img {
  width: 20px;
}
input {
  padding: 2px 5px;
  border-radius: 5px;
  border: solid 1px #aaa;
}
input:focus {
  outline: none;
}
</style>
