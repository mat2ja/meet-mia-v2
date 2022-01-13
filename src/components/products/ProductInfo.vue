<script setup>
import { useCategories } from '@/stores/categories.js';

const props = defineProps({
  item: Object,
  bgPattern: String,
});

const { getCategoryTags } = useCategories();

const fullTags = getCategoryTags(props.item.tags);

const productCount = ref(0);
const addProduct = () => {
  if (productCount.value < 50) {
    productCount.value += 1;
  }
};
</script>

<template>
  <div class="product-info">
    <div class="product-info--inner">
      <div class="product-info__content">
        <div class="product-info__categories">
          <CategoryTag
            :name="tag.label"
            v-for="tag in fullTags"
            :key="tag.id"
          />
        </div>
        <p class="product-info__crumbs">bez aditiva × 300g</p>
        <h2 class="product-info__title">{{ item.name }}</h2>
        <p class="product-info__description">
          {{ item.description }}
        </p>
        <div class="product-info__amount-bar">
          <ProductCount :count="productCount" v-if="productCount > 0" />
          <ProductPrice
            :price="item.price"
            size="lg"
            class="product-info__price"
          />
        </div>
      </div>
      <div class="product-info__buttons">
        <button class="btn btn--primary">Kupi odmah</button>
        <button class="btn btn--secondary" @click="addProduct">
          Dodaj u košaricu
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-info {
  position: relative;
  // padding-left: 3rem;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--box-shadow-peach);

  background: var(--peach-200);
  background-image: v-bind(bgPattern);
  transform: rotate(1deg);

  .product-info--inner {
    padding: 2.5rem 3rem 2rem 2.5rem;
    background: var(--peach-200);
    transform: translateY(2rem) translateX(1.5rem) rotate(-1deg);
    box-shadow: var(--box-shadow-peach);

    // border-top: none;
    // border-bottom: none;
    // border-top-left-radius: 0;
    // border-top-right-radius: 0
    border-radius: var(--border-radius-lg);
  }

  &__content {
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-size: var(--text-6xl);
    margin-top: 0.4em;
    margin-bottom: 0.5em;
  }

  &__description {
    max-width: 40ch;
    font-size: var(--text-xl);
  }

  &__amount-bar {
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    min-height: 4rem;
  }

  &__cart-data {
  }

  &__price {
    margin-left: auto;
  }

  &__buttons {
    margin-top: 2rem;
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
    margin-left: auto;
  }

  &__crumbs {
    margin-top: -0.5rem;
    color: var(--burg-700-opaque);
  }

  &__categories {
    position: absolute;
    top: -1rem;
    left: 2rem;
    display: flex;
    gap: 0.25rem;
  }
}
</style>
