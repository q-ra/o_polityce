<template>
  <div class="page1">
    <div class="o-pol"> <img :src="oPol" /></div>
    <div class="ambasada"> <img :src="ambasada" /></div>
    <div class="ceo"><img :src="ceo" /></div>
    <div class="interested"> Czy interesujesz się polityką? </div>
    <div class="yes">TAK</div>
    <div class="no">NIE</div>

  </div>
</template>

<script>
import oPol from '../assets/images/ekran1_1opolityce.png';
import ambasada from '../assets/images/ekran1_2usa.png';
import ceo from '../assets/images/ekran1_3ceo.png';

export default {
  name: "page1",
  methods: {

  },
  data() {
    return {
      ambasada: ambasada,
      oPol,
      ceo
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';
  svg, img {
    height: 5rem;
    max-height: 14vw;
  }
  .page1 {
    display: grid;
    text-align: center;
    grid-template-columns: 1fr auto auto auto auto 1fr;
    @media(max-width: 320px) {
      grid-template-columns: 5vw auto auto auto auto 5vw;
    }
    align-items: end;
    grid-template-areas:
      ". . . . . ."
      ". . . . . ."
      ". . . . . ."
      ". interested interested interested interested ."
      ". yes yes no no ."
      ". o-pol ambasada ambasada ceo ."
      ". . . . . .";
  }

  .interested {
    grid-area: interested;
    font-size: 1.8rem;
    font-weight: bold;
  }
  .o-pol {
    grid-area: o-pol;
  }
  .ambasada {
    grid-area: ambasada;
    padding-right: 1vw;
    padding-left: 1vw;
  }
  .ceo {
    grid-area: ceo;
  }
  @mixin but {
    align-self: flex-start;
    font-size: 5rem;
    font-weight: bold;
    margin: 0.7vw;
    border-radius: 1.5rem;
    margin-top: 1rem;
  }
  .yes {
    grid-area: yes;
    background-color: $rd;
    @include but;

  }
  .no {
    grid-area: no;
    background-color: $gr;
    @include but;
  }
</style>
