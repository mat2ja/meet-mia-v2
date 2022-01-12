<script setup></script>

<template>
  <div class="header-logo">
    <img src="/images/logo.png" alt="Logo" class="header-logo--img" />
  </div>
</template>

<style lang="scss" scoped>
.header-logo {
  height: 100%;
  overflow: hidden;

  &--img {
    max-height: 100%;
    height: var(--nav-height);
    user-select: none;
    display: block;
  }
}
</style>
