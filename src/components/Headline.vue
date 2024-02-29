<template>
  <section class="banner-section">
    <div class="left-half">
      <h1>{{ title }}</h1>
      <p>{{ subtitle }}</p>
    </div>
    <div class="right-half">
      <h2>{{ description }}</h2>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  description: String,
});
</script>

<style scoped>
@import url("../assets/style/typography.css");

.banner-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.left-half {
  width: 30%;
}

.right-half {
  width: 70%;
}

h1 {
  padding: 0 0 0 100px;
  line-height: 1.5;
}

h2 {
  padding: 0 150px 0 100px;
  font-size: 25px;
  line-height: 1.8;
}
</style>

