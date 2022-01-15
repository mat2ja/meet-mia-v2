<script setup>
import { useCategories } from '@/stores/categories.js';

const { categories } = useCategories();

const imageImport = (filename) => `url(./images/${filename}.jpg)`;
</script>

<template>
  <section class="section-categories row">
    <div
      v-for="(categoryGroup, categoryName) of categories"
      :id="`kat-${categoryName}`"
      :key="categoryName"
      class="categories__grid"
      :class="{ reverse: categoryName === 'slano' }"
    >
      <div class="categories__product-grid">
        <CategoryCard
          v-for="category in categoryGroup"
          :key="category.id"
          :category="category"
          class="categories__card"
        />
      </div>
      <h3
        class="categories__title"
        :class="{ reverse: categoryName === 'slano' }"
      >
        {{ categoryName }}
      </h3>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section-categories {
  padding-bottom: 5rem;

  @media only screen and (max-width: 800px) {
    padding-bottom: 2rem;
  }
  @media only screen and (max-width: 600px) {
    padding-bottom: 0;
  }
}

.categories {
  &__grid {
    padding: 2rem 0 4rem;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr auto;

    &.reverse {
      grid-template-columns: auto 1fr;

      @media only screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
      }
    }

    @media only screen and(max-width: 1000px) {
      grid-template-columns: 1fr;
    }
  }

  &__product-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

    @media only screen and (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }

  &__title {
    font-family: var(--font-primary);
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    writing-mode: vertical-lr;
    font-size: var(--text-7xl);
    color: var(--burg-500-opaque);
    padding: 0 4rem;

    @media only screen and (max-width: 1000px) {
      writing-mode: initial;
      order: -1;
      margin: 0;
      padding-bottom: 2rem;
      font-size: var(--text-5xl);
    }

    &.reverse {
      transform: rotate(180deg);

      @media only screen and (max-width: 1000px) {
        transform: rotate(0);
      }
    }
  }
}

#kat-slano {
  .categories__title {
    order: -1;
  }
}
</style>
