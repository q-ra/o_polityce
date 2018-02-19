<template>
  <div class="op-hello">
    <page1 class="op-page"></page1>
    <page2 class="op-page"></page2>
    <page3 class="op-page"></page3>
    <page4 class="op-page"></page4>
    <page5 class="op-page"></page5>
    <page6 class="op-page"></page6>
    <page7 class="op-page"></page7>
    <page8 class="op-page"></page8>
    <page9 class="op-page"></page9>
    <page10 class="op-page"></page10>
    <page11 class="op-page"></page11>
  </div>
</template>

<script>

import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page5";
import Page7 from "./Page7";
import Page8 from "./Page8";
import Page9 from "./Page9";
import Page10 from "./Page10";
import Page11 from "./Page11";

export default {
  name: "hello",
  components: {
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6,
    Page6,
    Page7,
    Page8,
    Page9,
    Page10,
    Page11
  },
  computed: {},
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style lang="scss">
  .op-page{
    height: 100vh;
    width: 99vw;
  }
  .op-hello {
     overflow-y: hidden;
  }
</style>
