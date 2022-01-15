<script setup></script>

<template>
  <div class="blog-page">
    <div class="row">
      <h1 class="blog-page__title">Blog</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.blog-page {
  padding: 2rem 0 6rem;
  flex: 1;

  background-image: url('/src/assets/wave-haikei-brown.svg');
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  transform: translateY(4px);

  &__title {
    font-size: var(--text-8xl);

    @media only screen and (max-width: 800px) {
      font-size: var(--text-6xl);
    }

    @media only screen and (max-width: 600px) {
      font-size: var(--text-5xl);
    }
  }
}
</style>
