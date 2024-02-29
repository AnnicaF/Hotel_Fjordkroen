<template>
  <div>
    <Slideshow />
  </div>
  <div class="section_one">
    <Headline
      title="Velkommen til en perle ved Præstø fjord "
      description="Hotel Fjordkroen er et 4-stjernet hotel beliggende med den skønneste udsigt ud over Præstø fjord.

Om det er et ophold der skal bookes eller et selskab der skal arrangeres, så står vi altid klar til at hjælpe."
    />
    <BoxSection />
  </div>
  <AboutSection />
  <Footer />
</template>

<script setup>
import Slideshow from "@/components/Slideshow.vue";
import Footer from "@/components/FooterBar.vue";
import BoxSection from "@/components/BoxSection.vue";
import Headline from "@/components/Headline.vue";
import AboutSection from "@/components/AboutSection.vue";
import banner1 from "@/assets/image/frontpage/banner1.jpg";
import banner2 from "@/assets/image/frontpage/banner2.jpg";

const imageUrls = [banner1, banner2];
</script>

<style scoped>
.section_one {
  border-radius: 25px 25px 0 0;
  background: #f5f5f5;
  position: relative;
  top: -50px;
  z-index: 1;
}
</style>
