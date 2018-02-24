<template>
  <div class="arrow">
    <arrow />
  </div>
</template>

<script>
import arrow from "../assets/images/strzalka.svg";
export default {
  name: "Arrow",
  components: {
    arrow
  }
};
</script>

<style lang="scss" scoped>
.arrow {
  grid-area: arrow;
  align-self: end;
  margin-bottom: -5px;
  @media (max-width: 480px) {
    display: none;
  }
  @media (max-height: 480px) {
    display: none;
  }
}
</style>
