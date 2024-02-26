<template>
  <div>
    <MenuSection :menu-items="lunchMenu" menu-type="Frokostmenu"></MenuSection>
    <MenuSection :menu-items="dinnerMenu" menu-type="Aftenmenu"></MenuSection>
  </div>
</template>

<script setup>
import MenuSection from "@/components/Menucard.vue";

const lunchMenu = [
  { name: "Rettnavn 1", description: "Beskrivelse av rett 1", price: "100 kr" },
  { name: "Rettnavn 2", description: "Beskrivelse av rett 2", price: "120 kr" },
];

const dinnerMenu = [
  { name: "Rettnavn 1", description: "Beskrivelse av rett 1", price: "150 kr" },
  { name: "Rettnavn 2", description: "Beskrivelse av rett 2", price: "180 kr" },
];
</script>
