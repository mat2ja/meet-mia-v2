<script setup>
import { defineProps } from 'vue';

defineProps({
  title: String,
  offset: Number | String,
  items: Array,
});
</script>

<template>
  <section class="products-section">
    <div class="title-box row">
      <slot />
      <h2>{{ title }}</h2>
    </div>
    <div
      class="product-grid"
      :style="{
        paddingLeft: `${offset}px`,
        paddingRight: `${offset}px`,
      }"
    >
      <div class="product-card" v-for="item in items" :key="item.name">
        <div class="product-card__image">
          <img
            :src="`@/../assets/images/products/${item.imageUrl}`"
            alt="Product image"
          />
        </div>
        <div class="product-card__content">
          <div class="product">
            <div class="product__info">
              <p class="product__crumbs">small text • 300g</p>
              <h5 class="product__name">{{ item.name }}</h5>
              <p class="product__description">
                {{
                  // item.description.length > 68
                  //   ? item.description.slice(0, 68) + '...' :
                  item.description
                }}
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
    </div>
  </section>
</template>

<style lang="scss">
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

.product-card {
  position: relative;
  overflow: hidden;
  border-radius: var(--border-radius);
  background: var(--peach-white-opaque);
  backdrop-filter: blur(6px);
  flex: 0 0 300px;

  box-shadow: var(--box-shadow-peach);
  // box-shadow: 20px 20px 10px black;

  @media only screen and(max-width: 600px) {
    flex: 0 0 250px;
  }

  &__image {
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
        // border-top-left-radius: 0;
        // border-top-right-radius: 0;

        @media only screen and (max-width: 600px) {
          padding: 0.8em;
        }
      }
    }
  }
}
</style>
