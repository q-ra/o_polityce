<template>
  <div class="op-hello">
    <page1 class="op-page-breakpoint" data-breakpoint="10"></page1>
    <page2 class="op-page-breakpoint" data-breakpoint="20"></page2>
    <page3 class="op-page-breakpoint" data-breakpoint="30"></page3>
    <page4 class="op-page-breakpoint" data-breakpoint="40"></page4>
    <page5 class="op-page-breakpoint" data-breakpoint="50"></page5>
    <page6 class="op-page-breakpoint" data-breakpoint="60"></page6>
    <page7 class="op-page-breakpoint" data-breakpoint="70"></page7>
    <page8 class="op-page-breakpoint" data-breakpoint="80"></page8>
    <page9 class="op-page-breakpoint" data-breakpoint="90"></page9>
    <page10 class="op-page-breakpoint" data-breakpoint="100"></page10>
    <page11 class="op-page-breakpoint" data-breakpoint="110"></page11>
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
  .op-hello {
     overflow-y: hidden;
  }
</style>
