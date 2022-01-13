<script setup>
const props = defineProps({
  size: String,
  price: Number | String,
});
</script>

<template>
  <div class="product-price">
    <span class="product-price--currency" :class="{ lg: props.size === 'lg' }">
      HRK
    </span>
    <span class="product-price--amount" :class="{ lg: props.size === 'lg' }">
      {{ price }}
    </span>
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
    color: var(--burg-700-opaque);
    margin-right: 5px;
    margin-bottom: -2px;

    &.lg {
      font-size: var(--text-4xl);
    }

    @media only screen and (max-width: 600px) {
      font-size: var(--text-lg);
    }
  }

  &--amount {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: var(--text-4xl);

    &.lg {
      font-size: var(--text-5xl);
    }

    @media only screen and (max-width: 600px) {
      font-size: var(--text-2xl);
    }
  }
}
</style>
