<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

import ProductsSection from '@/components/homepage/ProductsSection.vue';
import CategoriesSection from '@/components/homepage/CategoriesSection.vue';
import HeroSection from '@/components/homepage/HeroSection.vue';
import useProducts from '@/composables/useProducts.js';

const offset = ref(0);

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

const calculateRowOffset = () => {
  const [row] = [...document.querySelectorAll('.row')];
  offset.value = `${row?.getBoundingClientRect().left || 0}`;
};

calculateRowOffset();

onMounted(() => {
  window.addEventListener('resize', calculateRowOffset);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', calculateRowOffset);
});
</script>

<template>
  <HeroSection />

  <ProductsSection
    v-for="(section, i) in productsSections"
    :key="`${section.title}-${i}`"
    :title="section.title"
    :items="section.items"
    :offset="offset"
  >
    <box-icon class="icon" :name="section.icon.name" :type="section.icon.type || ''" />
  </ProductsSection>

  <CategoriesSection />
</template>

<style lang="scss">
section {
  padding: 2rem 0;
}
</style>
