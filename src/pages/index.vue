<script setup>
import { useProducts } from '@/stores/products.js';

const { getRandomProducts } = useProducts();

const productsSections = [
  {
    title: 'Popularno ovaj tjedan',
    icon: { name: 'trending-up' },
    items: getRandomProducts(10),
  },
  {
    title: 'Posebna ponuda',
    icon: { name: 'discount', type: 'solid' },
    items: getRandomProducts(8),
  },
];

const heroRow = ref(null);
const { left } = useElementBounding(heroRow);
</script>

<template>
  <HeroSection ref="heroRow" />

  <ProductsSection
    v-for="(section, i) in productsSections"
    :key="`${section.title}-${i}`"
    :title="section.title"
    :items="section.items"
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
