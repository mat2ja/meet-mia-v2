<script setup>
defineProps({
  items: Array,
});
</script>

<template>
  <div v-dragscroll class="product-grid">
    <ProductCard v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

<style lang="scss" scoped>
.product-grid {
  padding: 0.5rem 0 2rem;
  display: flex;
  gap: 1rem;
  overflow-y: visible;
  overflow-x: auto;
  flex-wrap: nowrap;
  transition: padding-left 800ms ease-out;
  margin-left: 1rem;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0.5rem;
    height: 0;
  }

  @media only screen and(max-width: 800px) {
    margin-top: 2rem;
  }

  @media only screen and(max-width: 600px) {
  }
}
</style>
