<script setup>
import { useProducts } from '@/stores/products.js';
import { useCategories } from '@/stores/categories.js';

const productsStore = useProducts();
const categoriesStore = useCategories();

const route = useRoute();
console.log(route);

const category = ref();
const products = ref([]);
const query = ref('');

const filteredProducts = computed(() =>
  products.value.filter((product) => {
    if (!query.value) {
      return true;
    }
    return product.name.toLowerCase().includes(query.value.toLowerCase());
  })
);

const hasProducts = computed(() => filteredProducts.value?.length > 0);

watchEffect(() => {
  const {
    params: { categoryId },
  } = route;
  if (categoryId) {
    category.value = categoriesStore.getCategoryById(categoryId);
    products.value = productsStore.getProductsByCategory(category.value.tagId);
  }
});

const bgPattern = computed(() => `var(--bg-img-pattern-1`);
</script>

<template>
  <div class="category-page">
    <div class="row category">
      <div class="category__head">
        <h2 class="category__title">{{ category.label }}</h2>
        <input
          v-if="products && products.length > 0"
          v-model.trim="query"
          type="search"
          placeholder="Pronađi svoj proizvod"
        />
      </div>
      <div>
        <p v-if="!hasProducts" class="category__not-found">Nema proizvoda</p>
        <section v-else class="product-grid">
          <ProductCard
            v-for="product in filteredProducts"
            :key="product.id"
            :item="product"
            class="product-card"
          />
        </section>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.category-page {
  padding: 1rem 0 8rem;
  flex: 1;

  background-image: url('/src/assets/wave-haikei-brown.svg');
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  transform: translateY(4px);
}

.category {
  &__head {
    padding: 2rem 0 4rem;

    // background-image: v-bind(bgPattern);

    background-image: url('/src/assets/blob-pattern.svg');
    background-repeat: no-repeat;
    background-size: 300px;
    background-position: -20px -50px;

    display: flex;
    // flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    @media only screen and (max-width: 800px) {
      padding: 2rem 0 3rem;
    }

    @media only screen and (max-width: 600px) {
      padding: 1rem 0 2rem;
    }

    input {
      padding: 0.75rem 1rem;
      width: 500px;
      display: block;

      color: var(--burg-700);
      background: var(--peach-100);

      border: 2px dashed var(--burg-500-opaque);
      border-radius: var(--border-radius-lg);

      font-family: inherit;
      font-size: var(--text-lg);
      font-weight: 500;

      transition: all 2000ms ease-out;

      @media only screen and (max-width: 800px) {
        // TODO
        display: none;
      }

      &:focus {
        outline: none;
        border: 2px solid var(--burg-500-opaque);
      }

      &::placeholder {
        color: var(--burg-700-opaque);
      }
    }
  }

  &__title {
    font-size: var(--text-8xl);
    text-align: center;

    @media only screen and (max-width: 800px) {
      font-size: var(--text-6xl);
    }

    @media only screen and (max-width: 600px) {
      font-size: var(--text-5xl);
    }
  }

  &__not-found {
    font-size: var(--text-3xl);
    font-weight: 500;
    text-align: center;
    padding: 4rem 0;
  }
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  padding-bottom: 10rem;
}
</style>
