<script setup>
defineProps({
  item: Object,
});
</script>

<template>
  <div class="product-card">
    <RouterLink
      :to="{ name: 'productPage', params: { productId: item.id } }"
      class="product-card__link"
    >
      <div class="product__image">
        <img :src="`/images/products/${item.imageUrl}`" alt="Product image" />
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
      <ProductPrice class="product__price" :price="item.price" />
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

  transform: rotate(0deg) scale(1);
  transition: all 400ms cubic-bezier(0.26, 0.22, 0.27, 1.45);

  &:hover {
    outline: 3px dashed transparent;
    outline-offset: 5px;
    transform: scale(0.98);
  }

  &:hover {
    // transform: rotate(-2deg);
    z-index: 10;
    box-shadow: var(--box-shadow-peach-sm);
    outline-color: var(--peach-600);
  }

  @media only screen and(max-width: 600px) {
    flex: 0 0 250px;
  }

  &__content {
    padding: 1.3rem 1rem 1rem;
  }

  &__link {
    &:hover {
      img {
        filter: saturate(1.2) contrast(1.05) brightness(0.99);
      }
    }
  }

  .product {
    &__image {
      img {
        transition: all 200ms ease-out;
        display: block;
      }
    }

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

    // TODO
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
