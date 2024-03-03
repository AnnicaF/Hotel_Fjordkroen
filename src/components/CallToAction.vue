<template>
  <div class="container">
    <div class="left-image">
      <img src="@/assets/image/frontpage/vinkort.jpg" alt="Banner image" />
    </div>
    <div class="text-box">
      <h2>Kroophold</h2>
      <hr />
      <p>
        Nyd et afslappende og idylisk ophold i vores skønne omgivelser, hvor du
        kan nyde udsigten ud over Præstø fjord.
      </p>
      <h4>Ankomst</h4>
      <p>
        Fra klokken 15:00 er jeres værelse klart og I vil efterfølgende få
        kaffe/te og hjemmebagt kage
      </p>
      <hr />
      <h4>Aften</h4>
      <p>
        I vil om aftenen få et glas mousserende vin i restauranten efterfulgt af
        en 3-retters middag der er sammensat af kokken.
      </p>
      <hr />
      <h4>Næste morgen</h4>
      <p>
        Om morgenen vil der være en dejlig morgenmad i restauranten. Herefter
        vil der være udtjekning senest klokken 11:00 og et forhåbeligt på
        gensyn.
      </p>
      <hr />
      <div class="read-more">
        <a href="#" class="read-more-link">Læs mere og book dit ophold</a>
        <!-- Pil-ikon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="arrow-right"
        >
          <path
            fill-rule="evenodd"
            d="M11.707 10l-4.147-4.146a.5.5 0 0 1 .708-.708l5 5a.5.5 0 0 1 0 .708l-5 5a.5.5 0 0 1-.708-.708L11.707 10z"
          />
        </svg>
      </div>
    </div>

    <div class="right-image">
      <img src="@/assets/image/frontpage/champagne.jpg" alt="Banner image" />
    </div>
  </div>
</template>
  
<style scoped>
.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  margin-bottom: 150px;
}

.left-image {
  position: absolute;
  left: 15%;
  bottom: -10%;
}

.right-image {
  position: absolute;
  right: 15%;
  top: -10%;
}

.left-image img,
.right-image img {
  width: 400px;
  height: 500px;
  object-fit: cover;
}

.text-box {
  width: 500px;
  height: 600px;
  padding: 30px;
  background-color: white;
  z-index: 99;
}
hr {
  width: 50%;
  margin-top: 10px;
  margin-bottom: 5px;
}
h4 {
  font-weight: 600;
  padding-top: 10px;
  padding-bottom: 10px;
}

.read-more {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}

.read-more-link {
  text-decoration: none;
  color: black;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
  display: inline-block;
}

.arrow-right {
  width: 20px;
  height: 20px;
  fill: currentColor;
  transition: transform 0.3s;
  cursor: pointer;
}

.read-more:hover .arrow-right {
  transform: translateX(5px);
}
</style>