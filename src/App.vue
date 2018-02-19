<template>
  <div id="app" class="op-main-div">
    <hello></hello>
  </div>
</template>

<script>
import Hello from './components/hello'
export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style>
.op-main-div {
  background-color: #30308f;
}
</style>
