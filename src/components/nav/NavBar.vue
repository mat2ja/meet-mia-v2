<script setup>
import useCategoryBar from '@/composables/useCategoryBar';

const { categoryBarOpen, toggleCategoryBar, closeCategoryBar } =
  useCategoryBar();
</script>

<template>
  <nav class="nav desktop">
    <ul class="nav__list nav__list--left">
      <li class="nav__item">
        <span class="nav__link" @click="toggleCategoryBar">
          Ponuda
          <box-icon class="icon inner-icon" name="chevron-down-square" />
        </span>
      </li>
      <li class="nav__item">
        <RouterLink to="/o-nama" class="nav__link">O nama</RouterLink>
      </li>
      <li class="nav__item">
        <RouterLink to="/blog" class="nav__link">Blog</RouterLink>
      </li>
    </ul>
    <ul class="nav__list nav__list--right">
      <li class="nav__item"></li>
      <li class="nav__item">
        <RouterLink to="/kontakt" class="nav__link">Kontakt</RouterLink>
      </li>
      <li class="nav__item">
        <RouterLink to="/kosarica" class="nav__link with-icon">
          <box-icon class="icon" name="cart-alt" />
        </RouterLink>
      </li>
      <li class="nav__item">
        <RouterLink to="/profil" class="nav__link with-icon">
          <box-icon class="icon" name="user-circle" />
        </RouterLink>
      </li>
    </ul>

    <transition name="fade">
      <NavCategoryBar
        v-show="categoryBarOpen"
        class="nav__category-bar"
        @close="closeCategoryBar"
      />
    </transition>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  flex: 1;
  margin-left: 2rem;

  &__list {
    display: flex;
    gap: 1rem;
  }

  &__item {
    display: flex;
    text-transform: uppercase;
    font-weight: 600;
  }

  &__link {
    display: flex;
    align-items: center;
    padding: 0.6rem 1.4rem;
    border-radius: var(--border-radius);
    //  cursor: pointer;
    transition: all 250ms ease-out;

    .inner-icon {
      margin-left: 0.5rem;
      width: 18px;
      height: 18px;
    }

    &.with-icon {
      padding: 0.6rem;
      border-radius: 100rem;
      background: var(--peach-200);

      &:hover {
        background: var(--peach-300);
      }

      .icon {
        height: 26px;
        width: 26px;
      }
    }

    &:hover {
      background: var(--peach-200);
    }
  }

  &__category-bar {
    width: 100%;
    height: 50px;
    position: absolute;
    top: var(--nav-height);
    left: 0;
    box-shadow: var(--box-shadow-peach-sm);
  }
}
</style>
