<template>
  <nav class="navbar">
    <div class="menu-toggle" @click="toggleMenu">
      <i class="fas fa-bars"></i>
    </div>
    <div class="menu" :class="{ active: isMenuOpen }">
      <ul>
        <li v-for="(item, index) in menuItems" :key="index">
          <router-link :to="item.route">{{ item.label }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
  
  <script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const menuItems = [
  { label: "Forside", route: "/" },
  { label: "Menukort", route: "/menu" },
  { label: "Væresler", route: "/stay" },
  { label: "Kroophold", route: "/stay" },
  { label: "Selskaber", route: "/stay" },
  { label: "Kontakt", route: "/contact" },
  { label: "Selskaber", route: "/events" },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
<style scoped>
@import url("../assets/style/layout/navbar.css");
</style>
  