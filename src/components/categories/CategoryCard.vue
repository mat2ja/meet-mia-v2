<script setup>
defineProps({
  category: Object,
});

const imageImport = (filename) => `url(./images/${filename}.jpg)`;
</script>

<template>
  <RouterLink :to="`/kategorija/${category.id}`">
    <div
      :id="`cat-${category.id}`"
      class="category-card"
      :style="{ backgroundImage: imageImport(category.id) }"
    >
      <h4 class="category-card__label">
        {{ category.label }}
      </h4>
    </div>
  </RouterLink>
</template>

<style lang="scss" scoped>
.category-card {
  flex: 0 1 390px;
  aspect-ratio: 1 / 1;
  box-shadow: var(--box-shadow-peach);
  border-radius: var(--border-radius);
  background: pink;

  background-position: center;
  background-size: cover;

  display: flex;
  align-items: end;
  justify-content: end;
  padding: 0.75rem;

  @media only screen and (max-width: 800px) {
    aspect-ratio: revert;
    height: 350px;
  }

  @media only screen and (max-width: 600px) {
    max-width: 350px;
    width: 100%;
    height: auto;
    aspect-ratio: 1 / 1;
    margin: 0 auto;
  }

  &__label {
    font-family: var(--font-primary);
    text-align: right;
    padding: 1rem 1.2rem;
    background: var(--white-opaque);
    backdrop-filter: blur(10px);
    border-radius: var(--border-radius);
    text-transform: uppercase;
  }
}
</style>
