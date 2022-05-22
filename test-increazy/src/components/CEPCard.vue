<template>
  <div class="card">
    <img src="../imgs/icone-lugar.svg" alt="" class="icon_location" />
    <div class="endereco">
      <div class="logradouro">
        {{ logradouro }}
      </div>
      <div class="localidade_uf">{{ localidade }} {{ uf }}</div>
    </div>
    <div class="cep">{{ cep }}</div>
    <button @click="$store.commit('deleteFromListaCEP', cep)">
      <img src="../imgs/icone-lixo.svg" alt="" class="delete" />
    </button>
  </div>
</template>

<script>
export default {
  name: "CEPCard",
  data() {
    return {
      cep: this.data.cep,
      logradouro: this.data.logradouro,
      localidade: this.data.localidade,
      uf: this.data.uf,
    };
  },
  props: {
    data: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.card {
  width: 95%;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 7fr 3fr 1fr;
  padding: 10px 7px;
  margin: 10px auto;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
}

.icon_location {
  width: 25px;
}

.logradouro {
  font-weight: bold;
  margin-left: 5px;
}

.cep {
  color: #b600ee;
}

button {
  background-color: white;
  height: 100%;
  border: none;
  border-left: solid 2px #ddd;
  transition: 0.2s ease-in-out;
}

button:hover {
  background-color: #ddd;
}
button img {
  width: 20px;
}
</style>
