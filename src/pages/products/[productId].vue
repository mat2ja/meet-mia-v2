<script setup>
import { useProducts } from '@/stores/products.js';

const { getProductById } = useProducts();

const { params } = useRoute();

const product = ref(getProductById(params.productId));
</script>

<template>
  <div class="row-wrapperr">
    <div class="row">
      <div class="product-overview">
        <div class="product-overview__image">
          <img
            :src="`/images/products/${product.imageUrl}`"
            alt="Product image"
          />
        </div>
        <ProductInfo :item="product" class="product-overview__info" />
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
name: productPage
</route>

<style lang="scss" scoped>
.product-overview {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;

  &__image {
    flex: 1;

    max-width: 700px;
    border-radius: var(--border-radius-lg);
    overflow: hidden;
    box-shadow: var(--box-shadow-peach);
    grid-column: 1 / 7;
    padding: 2rem;
    background: var(--peach-400);
    outline: 4px dashed var(--burg-600-opaque);
    outline-offset: -16px;

    img {
      display: block;
      aspect-ratio: 4 / 3;
      object-fit: cover;
      object-position: center;
      border-radius: var(--border-radius-lg);
    }
  }

  &__info {
    flex: 1;
    grid-column: 7 / -1;
  }
}
</style>
