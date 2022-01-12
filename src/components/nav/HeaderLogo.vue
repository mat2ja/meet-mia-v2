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
  transition: all 250ms ease-out;

  &:hover {
    .header-logo--img {
      filter: brightness(1.06);
    }
  }

  &--img {
    max-height: 100%;
    height: var(--nav-height);
    user-select: none;
    display: block;
    transition: all 250ms ease-out;
    transform: scale(1.4) translateY(2px);
  }
}
</style>
