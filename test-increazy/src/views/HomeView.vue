<script setup>
import SideBar from "../components/SideBar.vue";
import CEPSearch from "../components/CEPSearch.vue";
import ListCEPs from "../components/ListCEPs.vue";
</script>

<template>
  <main>
    <SideBar />
    <div class="content">
      <CEPSearch />
      <ListCEPs />
    </div>
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-template-columns: 1fr 13fr;
  min-height: 90vh;
}
</style>
