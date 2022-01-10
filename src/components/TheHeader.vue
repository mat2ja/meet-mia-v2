<script setup>
import { ref } from 'vue';
import NavDrawer from '@/components/nav/NavDrawer.vue';
import HeaderLogo from '@/components/nav/HeaderLogo.vue';
import useNavDrawer from '@/composables/useNavDrawer.js';

const { openNavDrawer } = useNavDrawer();

const categoryBarOpen = ref(false);
const toggleCategoryBar = () => {
  categoryBarOpen.value = !categoryBarOpen.value;
};
</script>

<template>
  <div
    class="container header__wrapper"
    :class="{ 'full-color': categoryBarOpen }"
  >
    <div class="row">
      <header class="header">
        <div
          class="header__hamburger icon__wrapper left tablet"
          @click="openNavDrawer"
        >
          <box-icon class="icon" size="md" name="menu-alt-left" />
        </div>
        <HeaderLogo />
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
    // background: rgba(255, 225, 214, 0.2);
    background: hsla(16, 100%, 82%, 0.3);
    backdrop-filter: blur(8px);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    // TODO
    // background: var(--peach-500);
    // background: var(--peach-200);

    &.full-color {
      // background: var(--peach-500);
      // background: var(--brown-900);
      // color: var(--burg-500);
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
        // TODO
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
  }
}

.category-bar {
  background: var(--brown-900);
  &__nav {
    // z-index: 20;
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

.nav-drawer {
  // z-index: 100;
  // background: peachpuff;
  background: var(--peach-200);
  height: 100vh;
  width: 100%;
  position: absolute;
  inset: 0;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: var(--nav-height);
  }

  &__nav {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    height: calc(100vh - 100px);
  }

  &__list {
    flex: 1;
  }

  &__item {
    font-size: var(--text-3xl);
    font-weight: 600;
    margin: 0.5rem 0;
    text-transform: uppercase;
  }

  &__link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 0;
    border-radius: var(--border-radius);
    cursor: pointer;

    .inner-icon {
    }
  }

  &__user {
    margin-top: auto;
    font-size: var(--text-2xl);

    a {
      display: flex;
      align-items: center;
      font-weight: 600;

      .icon {
        margin-right: 1rem;
      }
    }
  }
}

.nav-drawer-dropdown {
  &__list {
    margin-bottom: 1rem;
    // border-left: 4px solid var(--peach-400);
    // padding-left: 1rem;
  }

  &__item {
    font-weight: 400;
    text-transform: uppercase;
  }

  &__link {
    padding: 0.5rem 0;

    .emoji {
      margin-right: 1rem;
    }
  }
}
</style>
