<template>
  <div>
    <img src="../imgs/icone-lugar.svg" alt="" />
    CEP<span> {{ cep }}</span>
  </div>
</template>

<script>
import { mask } from "vue-the-mask";
export default {
  name: "CEPToSearch",
  data() {
    return {
      cep: this.cep,
    };
  },
  props: {
    cep: String,
  },
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: space-around;
  max-width: 150px;
  font-weight: bold;
}
img {
  width: 20px;
}

span {
  color: #aaa;
  font-weight: bold;
}
</style>
