<template>
  <div class="page2">
    <div class="phone">
      <phone />
    </div>
    <div class="ph-text">Czy zgadzasz się na wprowadzenie zakazu używania telefonów komórkowych w szkole?</div>
    <div class="wifi">
      <wifi />
    </div>
    <div class="wf-text">Czy zgadzasz się, aby nałożono dodatkowy podatek – akcyzę na zakup dostępu do Internetu?</div>
    <div class="tv">
      <tv />
    </div>
    <div class="tv-text">Czy zgadzasz się, żeby w telewizji dostępny był tylko jeden kanał?</div>
    <div class="gr-text">O TYM TEŻ DECYDUJĄ POLITYCY!</div>
    <div class="rd-text">POLITYKA OBCHODZI TAKŻE CIEBIE!</div>
    <arrow />
  </div>

</template>

<script>
import phone from "../assets/images/ekran2_1.svg";
import wifi from "../assets/images/ekran2_2.svg";
import tv from "../assets/images/ekran2_3.svg";
import Arrow from './Arrow.vue'
export default {
  name: "page2",
  components: {
    phone,
    wifi,
    tv,
    arrow: Arrow
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';
.page2 {
  display: grid;
  text-align: center;
  grid-template-columns: 1fr auto repeat(4, 8.5rem) auto 1fr;
  grid-template-areas:
    ". . . . . . . ."
    ". . . . . . . ."
    ". . . . . . . ."
    ". phone ph-text ph-text ph-text ph-text . ."
    ". wifi wf-text wf-text wf-text wf-text . ."
    ". tv tv-text tv-text tv-text tv-text . ."
    ". . . . . . . ."
    ". . gr-text gr-text gr-text gr-text . ."
    ". . rd-text rd-text rd-text rd-text . ."
    ". . . . . . . ."
    ". . . . . . . ."
    ". . . arrow arrow . . .";
  @media (max-width: 480px) {
    grid-template-columns: 0 auto auto auto auto 0;
    grid-template-areas:
      ". . . . . ."
      ". . . . . ."
      ". . . . . ."
      ". phone ph-text ph-text ph-text ."
      ". wifi wf-text wf-text wf-text ."
      ". tv tv-text tv-text tv-text ."
      ". . . . . ."
      ". gr-text gr-text gr-text gr-text ."
      ". rd-text rd-text rd-text rd-text ."
      ". . . . . ."
      ". . . . . ."
      ". . arrow arrow . .";
  }
  align-items: center;
}
@mixin wh-icons {
  svg {
    height: 3rem;
    max-height: 14vw;
    margin: 1rem;
  }

}
.phone {
  grid-area: phone;
  @include wh-icons;
}
.wifi {
  grid-area: wifi;
  @include wh-icons;
}
.tv {
  grid-area: tv;
  @include wh-icons;

}
@mixin wh-text {
  text-align: left;
  font-size: 1.5rem;
}
@mixin colored-text {
  font-size: 1.8rem;
  font-weight: bold;
}

.ph-text {
  @include wh-text;
  grid-area: ph-text;
}
.tv-text {
  @include wh-text;
  grid-area: tv-text;
}
.wf-text {
  @include wh-text;
  grid-area: wf-text;
}
.gr-text {
  @include colored-text;
  grid-area: gr-text;
  color: $gr;
  align-self: end;
}
.rd-text {
  @include colored-text;
  grid-area: rd-text;
  color: $rd;
}

</style>
