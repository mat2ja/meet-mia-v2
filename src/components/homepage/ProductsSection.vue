<script setup>
import { defineProps } from 'vue';
import ProductCard from '@/components/products/ProductCard.vue';

defineProps({
  title: String,
  offset: Number | String,
  items: Array,
  icon: Object,
});
</script>

<template>
  <section class="products-section">
    <div class="title-box row">
      <box-icon
        v-if="icon"
        class="icon"
        :name="icon.name"
        :type="icon.type || ''"
      />
      <h2>{{ title }}</h2>
    </div>
    <div
      class="product-grid"
      :style="{
        paddingLeft: `${offset}px`,
        paddingRight: `${offset}px`,
      }"
    >
      <ProductCard v-for="item in items" :item="item" :key="item.id" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.products-section {
  margin-bottom: 4rem;

  @media only screen and(max-width: 800px) {
    margin-bottom: 1rem;
  }
}

.no-scrollbar {
  overflow: hidden;
}

.title-box {
  position: relative;
  display: flex;
  align-items: center;
  // z-index: -1;

  .icon {
    position: absolute;
    fill: var(--burg-600-opaque);
    z-index: -1;

    &[name='trending-up'] {
      left: -3rem;
      height: 160px;
      width: 160px;
      transform: translateY(0.5rem);
    }
    &[name='discount'] {
      height: 120px;
      width: 120px;
      left: -2rem;
    }
  }
}

.product-grid {
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  // TODO: odreze sjenu
  overflow-y: visible;
  overflow-x: auto;
  // overflow-x: visible;
  flex-wrap: nowrap;
  transition: padding-left 800ms ease-out;
  margin-left: 0.5rem;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0.5rem; //only hide the vertical scrollbar
    height: 0px; //only hide the horizontal scrollbar
  }

  &__wrapper {
    padding: 1rem 0;
    overflow-x: scroll;
  }

  @media only screen and(max-width: 800px) {
    margin-top: 2rem;
  }

  @media only screen and(max-width: 600px) {
  }
}
</style>
