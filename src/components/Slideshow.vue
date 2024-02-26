<template>
  <div class="slideshow">
    <img :src="currentImage" alt="Slideshow" />
  </div>
</template>
  
<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
  interval: {
    type: Number,
    default: 3000,
  },
});

const currentIndex = ref(0);

const currentImage = computed(() => {
  return props.images[currentIndex.value];
});

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
};

let slideshowInterval;

const startSlideshow = () => {
  slideshowInterval = setInterval(nextSlide, props.interval);
};

const stopSlideshow = () => {
  clearInterval(slideshowInterval);
};

onMounted(() => {
  startSlideshow();
});

onUnmounted(() => {
  stopSlideshow();
});
</script>

<style scoped>
@import url("../assets/style/layout/slideshow.css");
</style>
  