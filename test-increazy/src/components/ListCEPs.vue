<template>
  <div class="cep_list">
    <CEPCard
      v-for="item in $store.state.listaCEP"
      :key="item.cep"
      :data="item"
    />
  </div>
</template>

<script>
import CEPCard from "./CEPCard.vue";
import { useStore } from "vuex";
export default {
  name: "ListCEPs",
  components: {
    CEPCard,
  },
  data() {
    return {
      lista: useStore().state.listaCEP,
    };
  },
};
</script>

<style scoped>
.cep_list {
  margin: 20px;
  overflow: auto;
  max-width: 35vw;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
