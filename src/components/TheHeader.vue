<script setup>
import useNavDrawer from '@/composables/useNavDrawer.js';

const { openNavDrawer } = useNavDrawer();

const { y } = useWindowScroll();

const categoryBarOpen = ref(false);
const toggleCategoryBar = () => {
  categoryBarOpen.value = !categoryBarOpen.value;
};
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
        <nav class="nav desktop">
          <ul class="nav__list nav__list--left">
            <li class="nav__item">
              <span class="nav__link" @click="toggleCategoryBar">
                Ponuda
                <box-icon class="icon inner-icon" name="chevron-down-square" />
              </span>
            </li>
            <li class="nav__item">
              <a href="o-nama.html" class="nav__link">O nama</a>
            </li>
            <li class="nav__item">
              <a href="blog.html" class="nav__link">Blog</a>
            </li>
          </ul>
          <ul class="nav__list nav__list--right">
            <li class="nav__item"></li>
            <li class="nav__item">
              <a href="kontakt.html" class="nav__link">Kontakt</a>
            </li>
            <li class="nav__item">
              <a href="kosarica.html" class="nav__link with-icon">
                <box-icon class="icon" name="cart-alt" />
              </a>
            </li>
            <li class="nav__item">
              <a href="profil.html" class="nav__link with-icon">
                <box-icon class="icon" name="user-circle" />
              </a>
            </li>
          </ul>

          <transition name="fade">
            <div
              class="nav__category-bar category-bar desktop"
              v-show="categoryBarOpen"
            >
              <div class="row">
                <nav class="category-bar__nav">
                  <ul class="category-bar__list">
                    <li class="category-bar__item">
                      <a href="#" class="category-bar__link">Kolači</a>
                    </li>
                    <li class="category-bar__item">
                      <a href="#" class="category-bar__link">Torte</a>
                    </li>
                    <li class="category-bar__item">
                      <a href="#" class="category-bar__link">Krosasani</a>
                    </li>
                    <li class="category-bar__item">
                      <!-- TODO: not clickable becasue of image -->
                      <a href="#" class="category-bar__link">Sendviči</a>
                    </li>
                    <li class="category-bar__item">
                      <a href="#" class="category-bar__link">Ostalo</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </transition>
        </nav>
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
      cursor: pointer;
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
    cursor: pointer;
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
    background: yellow;
    width: 100%;
    height: 50px;
    position: absolute;
    top: var(--nav-height);
    left: 0;
    box-shadow: var(--box-shadow-peach-sm);
  }
}

.category-bar {
  background: var(--brown-900);
  &__nav {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--peach-300);
    height: 100%;
  }

  .row {
    height: 100%;
  }

  &__list {
    display: flex;
  }

  &__item {
    margin: 0 0.5rem;
    text-transform: uppercase;
    font-weight: 600;
  }

  &__link {
    padding: 0.4rem 1rem;
    border-radius: var(--border-radius);
    &:hover {
      background: var(--brown-800);
    }
  }
}
</style>
