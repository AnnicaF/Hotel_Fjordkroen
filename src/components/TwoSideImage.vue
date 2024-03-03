<template>
  <div class="container">
    <div class="left-image">
      <img src="@/assets/image/frontpage/forret.jpg" alt="Banner image" />
    </div>
    <div class="center-text">
      <h4>{{ subtitle }}</h4>
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <div class="buttons">
        <router-link to="/menukort" class="menu-link">Menukort</router-link>
        <router-link to="/ophold" class="ophold-link">Ophold</router-link>
      </div>
    </div>
    <div class="right-image">
      <img src="@/assets/image/frontpage/champagne.jpg" alt="Banner image" />
    </div>
  </div>
</template>
  
  <script setup>
defineProps({
  title: String,
  subtitle: String,
  description: String,
});
</script>
  
  <style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 500px;
  padding: 10px;
  padding-top: 50px;
}

.left-image,
.right-image {
  width: 30%;
}
h2 {
  padding-bottom: 20px;
  line-height: 1.5;
  font-weight: 500;
}
p {
  text-align: center;
}
h4 {
  font-size: 16px;
  padding-bottom: 20px;
}

.center-text {
  width: 50%;
  text-align: center;
  padding: 0px 100px 0 100px;
}

img {
  max-width: 100%;
  object-fit: cover;
  height: 400px;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 25px;
  margin-top: 30px;
  text-align: center;
  border: none;
  cursor: pointer;
}

.menu-link {
  background-color: #454141;
  color: white;
  font-size: 16px;
  padding-left: 30px;
  padding-top: 8px;
  padding-right: 30px;
  padding-bottom: 8px;
}

.ophold-link {
  border: 1px solid black;
  font-size: 16px;
  color: black;
  padding-left: 30px;
  padding-top: 8px;
  padding-right: 30px;
  padding-bottom: 8px;
}
a {
  text-decoration: none;
}
</style>
  