<script setup></script>

<template>
  <div class="header-logo">
    <img src="@/../assets/images/logo.png" alt="Logo" class="header-logo--img" />
  </div>
</template>

<style lang="scss">
.header-logo {
  height: 100%;
  overflow: hidden;

  &--img {
    max-height: 100%;
    user-select: none;
  }
}
</style>
