<script setup>
import { useProducts } from '@/stores/products.js';

const { getProductById } = useProducts();

const { params } = useRoute();

const product = ref(getProductById(params.productId));
</script>

<template>
  <!-- :src="`/images/${'cover.jpg'}`" -->
  <img
    class="wrapper-img"
    :src="`/images/products/${product.imageUrl}`"
    alt="Product image"
  />
  <div class="row-wrapper">
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
.wrapper-img {
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 900px;
  max-width: 100vw;
  z-index: -1;
  filter: opacity(0.15) saturate(0.5);
}
.row-wrapper {
  padding: 3rem 0;
}
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
    // box-shadow: var(--box-shadow-peach);
    grid-column: 1 / 7;
    // padding: 2rem;
    // background: var(--peach-400);
    // outline: 4px dashed var(--burg-600-opaque);
    outline: 4px dashed var(--peach-400);
    background: var(--peach-100);
    padding: 1rem;
    // outline-offset: 16px;

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
