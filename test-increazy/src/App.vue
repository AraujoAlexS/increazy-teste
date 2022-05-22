<script setup>
import HomeView from "./views/HomeView.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <div>
        <div class="logo">
          <img src="./imgs/logo.svg" alt="" srcset="" />
        </div>
        <div class="label">
          <span class="label_name">Surreal São Paulo</span>
          <span class="label_sub">VTXE</span>
        </div>
      </div>
      <div>
        <div>
          <img src="./imgs/icone-bell.svg" alt="" class="notification" />
        </div>
        <div class="user_info">
          <div class="solutation">Olá, Joaquim</div>
          <img src="./imgs/usuario.svg" alt="" class="user_img" />
        </div>
      </div>
    </div>
  </header>
  <home-view> </home-view>
</template>

<style>
@import "@/assets/base.css";
* {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
header {
  background: #9206e9;
  color: white;
  overflow: hidden;
  height: 10vh;
}

.wrapper {
  padding: 5px 25px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.wrapper div {
  display: flex;
}

.label {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30px;
  padding: 4px 7px;
  border: solid 2px white;
  border-radius: 10px;
  width: 300px;
}

.label_name {
  font-size: 16px;
  font-weight: 700;
}

.label_sub {
  font-size: 12px;
  font-weight: 400;
}

.notification {
  width: 30px;
}

.user_info {
  display: flex;
  align-items: center;
  position: relative;
}

.solutation {
  margin: 0 25px;
  position: relative;
}

.solutation::before {
  content: "";
  position: absolute;
  height: 300px;
  width: 1px;
  left: -15px;
  top: -50px;
  background: rgba(255, 255, 255, 0.3);
}

.user_img {
  width: 45px;
}
</style>
