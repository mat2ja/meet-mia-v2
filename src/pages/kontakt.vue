<script setup></script>

<template>
  <div class="contact-page">
    <div class="row">
      <h1 class="contact-page__title">Kontakt</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact-page {
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
