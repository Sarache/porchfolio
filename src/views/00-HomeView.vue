<script setup>
import hero from "@/components/hero.vue";
import clipart from "@/components/clipart.vue";
import InfiniteSlider from "@/components/InfiniteSlider.vue";
import { useHead } from "@unhead/vue";

useHead({
  title: "✧ 𝓟𝓵𝓪𝓷𝓮𝓽 𝓢𝓪𝓻𝓪 ✧ Welcome abroad!",
});
</script>

<template>
  <main>
    <hero />
    <clipart />
    <br />
    <InfiniteSlider />
  </main>

  <div class="cardproject"></div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/grid.scss";

main {
  display: flex;
  flex-direction: row;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
}
</style>
