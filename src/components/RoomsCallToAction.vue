<template>
  <div class="image-gallery">
    <h2>{{ title }}</h2>

    <div class="image-container">
      <div class="image-box" v-for="(image, index) in images" :key="index">
        <img :src="image.src" :alt="image.alt" class="gallery-image" />
        <h4>{{ image.title }}</h4>
      </div>
    </div>
    <div class="view-all">
      <router-link to="/rooms" class="link">
        <p>Se alle værelser og priser <i class="fas fa-chevron-right"></i></p>
      </router-link>
    </div>
  </div>
</template>
  
  <script setup>
const title = "Værelser & suiter";
import banner1 from "@/assets/image/frontpage/vaerelse1.jpg";
import banner2 from "@/assets/image/frontpage/vaerelse5.jpg";
import banner3 from "@/assets/image/frontpage/juniorsuite11.jpg";

const images = [
  {
    src: banner1,
    alt: "Image 1",
    title: "Dobbeltværesle",
    description: "Description for image 1",
  },
  {
    src: banner2,
    alt: "Image 2",
    title: "Dobbelt Deluxe ",
    description: "Description for image 2",
  },
  {
    src: banner3,
    alt: "Image 2",
    title: "Junior suite",
    description: "Description for image 2",
  },
];
</script>
  
  <style scoped>
.image-gallery {
  text-align: center;
  background: white;
  margin-top: 100px;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 80px;
  padding-bottom: 60px;
}

.image-container {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.image-box {
  width: 30%;
}
.gallery-image {
  width: 350px;
  height: 250px;
  object-fit: cover;
}
h2 {
  padding-bottom: 15px;
  font-style: italic;
}
h4 {
  padding-top: 15px;
  padding-bottom: 10px;
}
p {
  text-align: center;
}

.view-all {
  display: flex;
  justify-content: end;
  align-items: center;
  cursor: pointer;
  padding-top: 50px;
}

.view-all p {
  margin-right: 10px;
  font-weight: 600;
  font-size: 18px;
}

.link {
  text-decoration: none;
  color: inherit;
}
</style>
  