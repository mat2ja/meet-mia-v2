<script setup>
import useProducts from '@/composables/useProducts.js';

const { getProductById } = useProducts();

const {
  params: { productId },
} = useRoute();

const product = ref(getProductById(productId));
</script>

<template>
  <div class="row">
    <pre v-if="product">{{ product }}</pre>
  </div>
</template>

<style lang="scss" scoped></style>
