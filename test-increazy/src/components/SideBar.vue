<script></script>

<template>
  <div class="side_bar">
    <div class="side_bar_icon">
      <img src="../imgs/icone-busca.svg" alt="" />
    </div>
    <div class="side_bar_icon">
      <img src="../imgs/icone-folder2.svg" alt="" />
    </div>
    <div class="side_bar_icon bot">
      <img src="../imgs/icone-ajuste.svg" alt="" />
    </div>
  </div>
</template>

<style scoped>
.side_bar {
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #f6f6f6;
}

.side_bar_icon {
  margin: 15px 0;
}

.bot {
  margin-top: auto;
}
.bot img {
  border-radius: 5px;
  background: #333;
}
</style>
