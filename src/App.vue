<template>
  <div id="app" class="op-main-div">
    <link href="https://fonts.googleapis.com/css?family=Rubik" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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

<style lang="scss">
@import './style/main.scss';

</style>
