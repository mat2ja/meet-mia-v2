<script setup>
import { useProducts } from '@/stores/products.js';
import { random } from 'lodash';

const { getProductById, getRandomProducts } = useProducts();

const route = useRoute();

const productRow = ref(null);
const { left } = useElementBounding(productRow);

const product = ref();

const BG_COUNT = 5;
const randN = ref();
const bgPattern = computed(() => `var(--bg-img-pattern-${randN.value})`);

const genDifferentNumber = () => {
  let n = 0;
  do {
    n = random(1, BG_COUNT);
  } while (n === randN.value);
  return n;
};

watchEffect(() => {
  const {
    params: { productId },
  } = route;
  product.value = getProductById(productId);
  randN.value = genDifferentNumber();
});
</script>

<template>
  <div class="product-page">
    <img
      class="wrapper-img"
      :src="`/images/products/${product.imageUrl}`"
      alt="Product image"
    />
    <div class="row-wrapper row-wrapper--overview">
      <div class="row" ref="productRow">
        <div class="product-overview">
          <div class="product-overview__image">
            <img
              :src="`/images/products/${product.imageUrl}`"
              alt="Product image"
            />
          </div>
          <ProductInfo
            :key="route.params.productId"
            :item="product"
            class="product-overview__info"
            :bgPattern="bgPattern"
          />
        </div>
      </div>
    </div>
    <div class="row-wrapper row-wrapper--products">
      <div class="row">
        <h3>Slični proizvodi</h3>
      </div>
      <ProductGrid
        :items="getRandomProducts(8)"
        :style="{
          paddingLeft: `${left}px`,
          paddingRight: `${left}px`,
        }"
      />
    </div>
  </div>
</template>

<route lang="yaml">
name: productPage
</route>

<style lang="scss" scoped>
.product-page {
  padding: 5rem 0 0;
}
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
  &--overview {
    padding-bottom: 8rem;
  }

  &--products {
    padding: 5rem 0 5rem;
    background: var(--peach-300);

    h3 {
      font-size: var(--text-4xl);
      margin-bottom: 1.5rem;
    }
  }
}
.product-overview {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem;

  &__image {
    flex: 1;

    max-width: 700px;
    border-radius: var(--border-radius-lg);
    overflow: hidden;
    grid-column: 1 / 7;
    background: var(--peach-400);
    padding: 1.5rem;

    background-image: v-bind(bgPattern);

    img {
      transform: rotate(-2deg) scale(0.95);
      transition: all 500ms cubic-bezier(0.26, 0.22, 0.27, 1.45);

      display: block;
      aspect-ratio: 4 / 3;
      object-fit: cover;
      object-position: center;
      border-radius: var(--border-radius-lg);

      &:hover {
        transform: rotate(0deg);
      }
    }
  }

  &__info {
    flex: 1;
    grid-column: 7 / -1;
  }
}
</style>
