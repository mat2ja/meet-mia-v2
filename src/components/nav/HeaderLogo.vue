<script setup></script>

<template>
  <div class="header-logo">
    <!-- <RouterLink :to="{ name: 'home' }"> -->
    <img src="/images/logo.png" alt="Logo" class="header-logo--img" />
    <!-- </RouterLink> -->
  </div>
</template>

<style lang="scss" scoped>
.header-logo {
  height: 100%;
  overflow: hidden;

  &--img {
    max-height: 100%;
    user-select: none;
  }
}

// a {
//   display: inline !important;
// }
</style>
