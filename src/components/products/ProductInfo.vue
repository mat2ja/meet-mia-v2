<script setup>
defineProps({
  item: Object,
});
</script>

<template>
  <div class="product-info">
    <div class="product-info--inner">
      <div class="product-info__content">
        <div class="product-info__categories">
          <CategoryTag
            :name="name"
            v-for="(name, i) in ['kolači', 'slatko', 'popularno']"
            :key="i"
          />
        </div>
        <p class="product-info__crumbs">bez aditiva × 300g</p>
        <h2 class="product-info__title">{{ item.name }}</h2>
        <p class="product-info__description">
          {{ item.description }}
        </p>
        <div>
          <ProductPrice :price="item.price" />
        </div>
      </div>
      <div class="product-info__buttons">
        <button class="btn btn--primary">Kupi odmah</button>
        <button class="btn btn--secondary">Dodaj u košaricu</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-info {
  position: relative;
  background: var(--peach-200);
  padding: 0 1.5rem 0;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--box-shadow-peach);

  .product-info--inner {
    padding: 2.5rem 1.75rem;
    border: 4px dashed var(--burg-500-opaque);
    border-top: none;
    border-bottom: none;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__description {
    max-width: 50ch;
    font-size: var(--text-lg);
  }

  &__buttons {
    margin-top: 1.5rem;
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
    margin-left: auto;
  }

  &__crumbs {
    margin-top: -0.5rem;
    color: var(--burg-700-opaque);
  }

  &__categories {
    position: absolute;
    top: -1rem;
    left: 3rem;
    display: flex;
    gap: 0.25rem;
  }
}
</style>
