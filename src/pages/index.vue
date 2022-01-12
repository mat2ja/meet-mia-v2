<script setup>
import { useProducts } from '@/stores/products.js';

const { getRandomProducts, productsSections } = useProducts();

const heroRow = ref(null);
const { left } = useElementBounding(heroRow);
</script>

<template>
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
</template>

<style lang="scss" scoped>
section {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
</style>
