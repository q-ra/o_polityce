<template>
  <div>
    <h1> Page 1</h1>
    <button class='btn btn-primary' @click="skroluj"> TEST </button>
    <div>
      <SomeIcon class="icon"/>
    </div>
  </div>
</template>

<script>
import SomeIcon from '../assets/images/ekran10_1.svg';

export default {
  name: "page1",
  methods: {

  },
  components: {
    SomeIcon
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    this.throttledOnScroll(function () {
      console.log("Dziala")
    })
  },
  methods: {
    skroluj() {
      this.scrollThere("#dupa")
    }
  }
};
</script>

<style>

</style>
