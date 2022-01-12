<script setup>
defineProps({
  size: String,
  price: Number,
});
</script>

<template>
  <div class="product-price">
    <span class="product-price--currency">HRK</span>
    <span class="product-price--amount">{{ price }}</span>
  </div>
</template>

<style lang="scss" scoped>
.product-price {
  display: flex;
  justify-content: flex-end;
  align-items: baseline;

  &--currency {
    font-family: var(--font-primary);
    font-weight: 300;
    font-size: var(--text-3xl);
    margin-right: 3px;

    @media only screen and (max-width: 600px) {
      font-size: var(--text-lg);
    }
  }

  &--amount {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: var(--text-4xl);

    @media only screen and (max-width: 600px) {
      font-size: var(--text-2xl);
    }
  }
}
</style>
