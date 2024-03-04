<template>
  <NavBar />
  <div>
    <Slideshow />
  </div>
  <div class="section_one">
    <TwoSideImage
      subtitle="En perle ved Præstø Fjord"
      title="Lad os sammen skabe en uforglemmelig oplevelse"
      description="Velkommen til Hotel Fjordkroen – det perfekte tilflugtssted ved Præstø Fjord, hvor charme og hyggelig atmosfære mødes. Vores 4-stjernede kro tilbyder 15 unikt indrettede værelser, hvoraf de fleste har en fortryllende udsigt over fjorden.  "
    />
  </div>
  <RoomsCallToAction />
  <CallToAction />
  <Footer />
</template>

<script setup>
import Slideshow from "@/components/Slideshow.vue";
import TwoSideImage from "@/components/TwoSideImage.vue";
import Footer from "@/components/FooterBar.vue";
import NavBar from "@/components/NavBar.vue";
import BoxSection from "@/components/BoxSection.vue";
import CallToAction from "@/components/CallToAction.vue";
import banner1 from "@/assets/image/frontpage/banner1.jpg";
import banner2 from "@/assets/image/frontpage/banner2.jpg";
import RoomsCallToAction from "@/components/RoomsCallToAction.vue";
const imageUrls = [banner1, banner2];
</script>
