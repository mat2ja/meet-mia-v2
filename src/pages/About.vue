<script setup></script>

<template>
  <div class="about-page">
    <div class="row">
      <h1 class="about-page__title">O nama</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-page {
  padding: 2rem 0 6rem;
  flex: 1;

  background-image: url('/src/assets/wave-haikei-brown.svg');
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  transform: translateY(4px);

  &__title {
    font-size: var(--text-6xl);

    @media only screen and (max-width: 800px) {
      font-size: var(--text-5xl);
    }

    @media only screen and (max-width: 600px) {
      font-size: var(--text-4xl);
    }
  }
}
</style>
