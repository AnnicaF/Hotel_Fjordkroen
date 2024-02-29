<template>
  <div class="banner-container">
    <img :src="imageUrl" alt="Banner" class="banner-image" />
    <h2 class="banner-title">{{ title }}</h2>
  </div>
</template>
  
  <script setup>
import { ref } from "vue";

const imageUrl = ref("");
const title = ref("");

// Modtag props
const props = defineProps({
  imageUrl: String,
  title: String,
});

// Opdater de ref'er, der er bundet til props
imageUrl.value = props.imageUrl;
title.value = props.title;
</script>
  
  <style scoped>
.banner-container {
  text-align: center;
}

.banner-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.banner-title {
  margin-top: 10px;
  font-size: 24px;
}
</style>
  