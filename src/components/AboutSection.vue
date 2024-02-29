<template>
  <div class="about-section">
    <div class="image-half">
      <img :src="aboutImage" alt="About" class="about-image" />
    </div>
    <div class="text-half">
      <div class="text-content">
        <h2>Om Fjordkroen</h2>
        <hr />
        <br />
        <p>
          Vi er et familie drevet hotel, som ligger placeret ved kanten af
          Præstø Fjord. På Hotel Fjordkroen lægger vi vægt på at give kunderne
          en hyggelig og ganske særlig oplevelse i de smukkeste omgivelser.
          <br />
          <br />
        </p>

        <p>
          Vi sørger for god og personlig service samt lækker mad og gode vine.
          Du kan vælge at booke bord i vores restaurant evt. med en overnatning
          eller booke et kroophold i et af vores mange fine værelser.
        </p>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import AboutImage from "@/assets/image/frontpage/banner2.jpg";

const aboutImage = AboutImage;
</script>
  
<style scoped>
@import url("../assets/style/layout/aboutSection.css");

hr {
  height: 2px;
  width: 100px;
  margin: 15px;
  background-color: black;
  border: none;
}
</style>
  