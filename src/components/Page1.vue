<template>
  <div class="page1">
    <div class="o-pol"> <oPol/></div>
    <div class="ambasada"><ambasada /></div>
    <div class="ceo"><ceo /></div>
    <div class="interested"> Czy interesujesz się polityką? </div>
    <div class="yes">TAK</div>
    <div class="no">NIE</div>

  </div>
</template>

<script>
import oPol from '../assets/images/ekran1_1opolityce.svg';
import ambasada from '../assets/images/ekran1_2usa.svg';
import ceo from '../assets/images/ekran1_3ceo.svg';

export default {
  name: "page1",
  methods: {

  },
  components: {
    oPol,
    ambasada,
    ceo
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style lang="scss" scoped>
  svg {
    // min-height: 5rem;
    height: 5rem;
    // max-height: 50%;
  }
  .page1 {
    display: grid;
    text-align: center;
    grid-template-columns: 1fr auto auto auto auto 1fr;
    grid-column-gap: 0.5rem;
    // grid-template-rows: 10rem auto auto auto auto auto;
    align-items: end;
    grid-template-areas:
      ". . . . . ."
      ". . . . . ."
      ". interested interested interested interested ."
      ". yes yes no no ."
      ". yes yes no no ."
      ". o-pol ambasada ambasada ceo ."
      ". . . . . .";


  }
  .interested {
    grid-area: interested;

  }
  .o-pol {
    grid-area: o-pol;
  }
  .ambasada {
    grid-area: ambasada;
  }
  .ceo {
    grid-area: ceo;
  }
  .yes {
    grid-area: yes;
  }
  .no {
    grid-area: no;
  }
</style>
