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

const { width } = useWindowSize();
</script>

<template>
  <div class="product-info">
    <div class="product-info--inner">
      <div class="product-info__content">
        <div class="product-info__categories">
          <CategoryTag
            v-for="tag in fullTags"
            :key="tag.id"
            :name="tag.label"
          />
        </div>
        <p class="product-info__crumbs">bez aditiva × 300g</p>
        <h2 class="product-info__title">
          {{ item.name }}
        </h2>
        <p class="product-info__description">
          {{ item.description }}
        </p>
        <div class="product-info__amount-bar">
          <ProductCount
            v-if="productCount > 0"
            :count="productCount"
            class="product-info__count"
          />
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
          {{ width > 600 ? 'Dodaj u košaricu' : 'Dodaj' }}
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-info {
  position: relative;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--box-shadow-peach);

  background: var(--peach-200);
  background-image: v-bind(bgPattern);
  transform: rotate(1deg);
  margin-right: 1rem;

  @media only screen and (max-width: 800px) {
    transform: rotate(1deg);
    margin-left: -1rem;
  }

  .product-info--inner {
    padding: 2.5rem 3rem 2rem 2.5rem;
    background: var(--peach-200);
    transform: translateY(2rem) translateX(1.5rem) rotate(-1deg);
    box-shadow: var(--box-shadow-peach);

    border-radius: var(--border-radius-lg);

    @media only screen and (max-width: 800px) {
      padding: 2.25rem 1.5rem 1.75rem;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-size: var(--text-6xl);
    margin-top: 0.4em;
    margin-bottom: 0.5em;

    @media only screen and (max-width: 800px) {
      font-size: var(--text-5xl);
    }
  }

  &__description {
    max-width: 40ch;
    font-size: var(--text-xl);

    @media only screen and (max-width: 800px) {
      font-size: var(--text-md);
    }
  }

  &__amount-bar {
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    min-height: 4rem;

    @media only screen and (max-width: 800px) {
      margin-top: 1.75rem;
      min-height: 3.25rem;
    }
  }

  &__count {
    flex-shrink: 0;
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

    @media only screen and (max-width: 800px) {
      justify-content: space-between;

      > .btn {
        flex: 1;
      }
    }
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

    @media only screen and (max-width: 800px) {
      left: 1rem;
    }
  }
}
</style>
