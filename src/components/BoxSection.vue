<template>
  <div class="menu-boxes">
    <div class="menu-box">
      <img :src="frokostImage" alt="Frokost" class="menu-image" />
      <div class="menu-text-box">
        <router-link to="/frokost" class="menu-link">Menukort </router-link>
      </div>
    </div>
    <div class="menu-box">
      <img :src="aftenmenuImage" alt="Aftenmenu" class="menu-image" />
      <div class="menu-text-box">
        <router-link to="/aftenmenu" class="menu-link"> Værelser </router-link>
      </div>
    </div>
    <div class="menu-box">
      <img :src="kroopholdImage" alt="Kroophold" class="menu-image" />
      <div class="menu-text-box">
        <router-link to="/kroophold" class="menu-link">Selskaber </router-link>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import FrokostImage from "@/assets/image/frontpage/forret.jpg";
import AftenmenuImage from "@/assets/image/frontpage/ophold.jpg";
import KroopholdImage from "@/assets/image/frontpage/selskab.jpg";

const frokostImage = FrokostImage;
const aftenmenuImage = AftenmenuImage;
const kroopholdImage = KroopholdImage;
</script>
  
<style scoped>
@import url("../assets/style/layout/BoxSection.css");
</style>
  