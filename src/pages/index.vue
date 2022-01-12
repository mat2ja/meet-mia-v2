<script setup>
import { useProducts } from '@/stores/products.js';

const { getRandomProducts, productsSections } = useProducts();

const heroRow = ref(null);
const { left } = useElementBounding(heroRow);
</script>

<template>
  <div class="homepage-wrapper"></div>
  <div class="homepage">
    <HeroSection ref="heroRow" />

    <ProductsSection
      v-for="(section, i) in productsSections"
      :key="`${section.title}-${i}`"
      :title="section.title"
      :items="getRandomProducts(section.itemCount)"
      :icon="section.icon"
      :offset="left"
    />

    <CategoriesSection />
  </div>
</template>

<style lang="scss" scoped>
.homepage-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  background-image: url('./Rectangle446.svg');
  background-repeat: no-repeat;
  background-position: -10vw -65vh;
  background-size: 200%;
}
.homepage {
  padding: 3rem 0 6rem;
}

section {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
</style>
