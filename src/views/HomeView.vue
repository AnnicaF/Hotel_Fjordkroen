<template>
  <div>
    <Slideshow :images="imageUrls" :interval="5000" />
  </div>
</template>

<script setup>
import Slideshow from "@/components/Slideshow.vue";
import banner1 from "@/assets/image/frontpage/banner1.jpg";
import banner2 from "@/assets/image/frontpage/banner2.jpg";

const imageUrls = [banner1, banner2];
</script>
