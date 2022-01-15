<script setup>
import useNavDrawer from '@/composables/useNavDrawer.js';

const { openNavDrawer } = useNavDrawer();

const { y } = useWindowScroll();
</script>

<template>
  <div
    class="container header__wrapper"
    :class="{ colored: y > 1 || categoryBarOpen }"
  >
    <div class="row">
      <header class="header">
        <div
          class="header__hamburger icon__wrapper left tablet"
          @click="openNavDrawer"
        >
          <box-icon class="icon" size="md" name="menu-alt-left" />
        </div>
        <RouterLink to="/" class="router-link">
          <HeaderLogo />
        </RouterLink>
        <NavBar />
        <div class="header__hamburger icon__wrapper right tablet">
          <a href="/kosarica">
            <box-icon class="icon" size="md" name="cart-alt" />
          </a>
        </div>

        <NavDrawer />
      </header>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--nav-height);
  width: 100%;

  &__wrapper {
    transition: all 250ms ease-in-out;

    background: transparent;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;

    &.colored {
      background: hsla(16, 100%, 82%, 0.3);
      backdrop-filter: blur(8px);
      box-shadow: var(--box-shadow-peach-sm);
    }
  }

  .icon {
    &__wrapper {
      //  cursor: pointer;
      padding: 1rem;
      display: flex;

      &.left {
        margin-left: -1rem;
      }
      &.right {
        margin-right: -1rem;
      }
    }
  }
}


</style>
