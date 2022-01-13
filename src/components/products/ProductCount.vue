<script setup>
defineProps({
  count: Number,
});
</script>

<template>
  <div class="product-cart-count">
    <span class="product-cart-count__circle">
      <span class="product-cart-count__amount">{{ count }}</span>
    </span>
    <p class="product-cart-count__text">već u košarici</p>
  </div>
</template>

<style lang="scss" scoped>
.product-cart-count {
  display: flex;
  align-items: center;

  &__circle {
    width: 4rem;
    height: 4rem;
    display: grid;
    place-content: center;
    background: var(--peach-400);
    border-radius: 100rem;
  }

  &__amount {
    font-size: var(--text-4xl);
    font-weight: 500;
  }

  &__text {
    margin-left: 0.8em;
    font-size: var(--text-lg);
  }
}
</style>
