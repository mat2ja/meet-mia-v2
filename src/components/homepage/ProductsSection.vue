<script setup>
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
    <ProductGrid
      class="products-section__grid"
      :items="items"
      :style="{
        paddingLeft: `${offset}px`,
        paddingRight: `${offset}px`,
      }"
    />
  </section>
</template>

<style lang="scss" scoped>
.products-section {
  padding-top: 6rem;
  padding-bottom: 0;

  &__grid {
    margin-top: 2rem;
  }
}

#ponuda-popularno {
  padding-top: 6rem;
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
</style>
