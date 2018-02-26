<template>
  <div class="page3">
    <div class="logo">
      <logo />
    </div>
    <div class="wh-text">Jak pozyskujesz informacje o tym, co się dzieje w Twojej społeczności, kraju, na świecie?</div>
    <div class="headphones">
      <headphones v-if="normalHeadphones"/>
      <headphonesWh v-if="!normalHeadphones"/>
    </div>
    <div class="phone">
      <phone v-if="normalPhone" />
      <phoneWh v-if="!normalPhone"/>
    </div>
    <div class="tv">
      <tv v-if="normalTv"/>
      <tvWh v-if="!normalTv"/>
    </div>
    <div class="newspaper">
      <newspaper v-if="normalNewspaper"/>
      <newspaperWh v-if="!normalNewspaper"/>
    </div>

    <arrow />
  </div>

</template>

<script>
import headphonesWh from "../assets/images/ekran3_1a.svg";
import headphones from "../assets/images/ekran3_1b.svg";
import phoneWh from "../assets/images/ekran3_2a.svg";
import phone from "../assets/images/ekran3_2b.svg";
import tvWh from "../assets/images/ekran3_3a.svg";
import tv from "../assets/images/ekran3_3b.svg";
import newspaperWh from "../assets/images/ekran3_4a.svg";
import newspaper from "../assets/images/ekran3_4b.svg";
import logo from "../assets/images/ekran3_e4_e5_e6.svg";
import Arrow from "./Arrow.vue";
export default {
  name: "page3",
  components: {
    headphonesWh, headphones, phoneWh, phone, tvWh, tv, newspaper, newspaperWh, logo, Arrow
  },
  data() {
    return {
      normalPhone: true,
      normalHeadphones: true,
      normalTv: true,
      normalNewspaper: true
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../style/variables.scss";
.page3 {
  display: grid;
  text-align: center;
  grid-template-columns: 1fr auto repeat(4, 8.5rem) auto 1fr;
  grid-template-areas:
    ". logo wh-text wh-text wh-text wh-text . ."
    ". . headphones headphones phone phone . ."
    ". . tv tv newspaper newspaper . ."
    ". . . . . . . ."
    ". . . arrow arrow . . .";
  @media (max-width: 480px) {
    grid-template-columns: 0 auto auto auto auto 0;
    grid-template-areas:
      ". . . . . ."
      ". logo wh-text wh-text wh-text ."
      ". headphones headphones phone phone ."
      ". phone phone phone phone ."
      ". tv tv newspaper newspaper ."
      ". . . . . ."
      ". . arrow arrow . .";
  }
  align-items: center;
}
@mixin wh-icons {
  svg {
    height: 10rem;
    max-height: 15vw;
    margin: 1rem;
  }
}
.logo {
  grid-area: logo;
  @include wh-icons;
}

@mixin wh-text {
  text-align: left;
  font-size: 1.5rem;
}

.wh-text {
  @include wh-text;
  grid-area: wh-text;
}
.phone {
  @include wh-icons;
  grid-area: phone;
}
.headphones {
  @include wh-icons;
  grid-area: headphones;
}
.tv {
  @include wh-icons;
  grid-area: tv;
}
.newspaper {
  @include wh-icons;
  grid-area: newspaper;
}
</style>
