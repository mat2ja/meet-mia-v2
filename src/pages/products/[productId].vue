<script setup>
import { useProducts } from '@/stores/products.js';

const { getProductById } = useProducts();

const { params } = useRoute();

const product = ref(getProductById(params.productId));
</script>

<template>
  <div class="row">
    <pre v-if="product">{{ product }}</pre>
  </div>
</template>

<route lang="yaml">
name: productPage
</route>

<style lang="scss" scoped></style>
