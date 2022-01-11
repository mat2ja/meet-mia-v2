<script setup>
import useProducts from '@/composables/useProducts.js';

const route = useRoute();
const { getProduct } = useProducts();

const product = ref();

const productId = route.params.id;

product.value = getProduct(productId);
</script>

<template>
  <div class="row">
    <pre v-if="product">{{ product }}</pre>
  </div>
</template>

<style lang="scss" scoped></style>
