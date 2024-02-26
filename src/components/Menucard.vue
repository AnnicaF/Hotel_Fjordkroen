<template>
  <section class="menu-section">
    <h2 class="menu-heading">{{ menuType }}</h2>

    <div class="menu-items">
      <div
        v-for="(menuItem, index) in menuItems"
        :key="index"
        class="menu-item"
      >
        <h3 class="menu-item-name">{{ menuItem.name }}</h3>
        <p class="menu-item-description">{{ menuItem.description }}</p>
        <p class="menu-item-price">{{ menuItem.price }}</p>
      </div>
    </div>
  </section>
</template>
  
  <script setup>
import { defineProps } from "vue";

const props = defineProps({
  menuItems: {
    type: Array,
    required: true,
  },
  menuType: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
@import url("../assets/style/layout/menucard.css");
</style>
  
