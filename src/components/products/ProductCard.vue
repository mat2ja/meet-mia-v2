<script setup>
defineProps({
  item: Object,
});
</script>

<template>
  <div class="product-card">
    <RouterLink :to="{ name: 'product', params: { id: item.id } }">
      <div class="product-card__image">
        <img :src="`./images/products/${item.imageUrl}`" alt="Product image" />
      </div>
    </RouterLink>
    <div class="product-card__content">
      <div class="product">
        <div class="product__info">
          <p class="product__crumbs">small text • 300g</p>
          <h5 class="product__name">{{ item.name }}</h5>
          <p class="product__description">
            {{ item.description }}
          </p>
        </div>
      </div>
      <div class="product__price">
        <span class="product__price--currency">HRK</span>
        <span class="product__price--amount">{{ item.price }}</span>
      </div>
      <div class="product__buttons">
        <button class="btn btn--primary">Dodaj u košaricu</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-card {
  position: relative;
  overflow: hidden;
  border-radius: var(--border-radius);
  background: var(--peach-white-opaque);
  backdrop-filter: blur(6px);
  flex: 0 0 300px;

  box-shadow: var(--box-shadow-peach);

  @media only screen and(max-width: 600px) {
    flex: 0 0 250px;
  }

  &__content {
    padding: 1rem;
  }

  .product {
    &__info {
      margin-bottom: 0.5rem;
    }

    &__crumbs {
      font-size: var(--text-xs);
      color: var(--burg-700-opaque);
      font-family: var(--font-display);
      margin-top: -6px;
    }

    &__name {
      font-size: var(--text-2xl);
      margin-bottom: 0.5em;
      margin-top: 0.4em;
      font-weight: 800;

      @media only screen and (max-width: 600px) {
        font-size: var(--text-lg);
      }
    }

    &__description {
      font-size: var(--text-md);
      line-height: 1.3;
      max-height: 5ch;
      overflow: hidden;

      @media only screen and (max-width: 600px) {
        font-size: var(--text-base);
      }
    }

    &__price {
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

    &__buttons {
      margin-top: 0.75rem;
      width: 100%;
      display: flex;

      .btn {
        flex: 1;
        padding-top: 1em;
        padding-bottom: 1em;

        @media only screen and (max-width: 600px) {
          padding: 0.8em;
        }
      }
    }
  }
}
</style>
