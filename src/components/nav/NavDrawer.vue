<script setup>
import useNavDrawer from '@/composables/useNavDrawer.js';

const {
  isNavDrawerOpen,
  isCategoryDropdownOpen,
  closeNavDrawer,
  toggleCategoryDropdown,
} = useNavDrawer();
</script>

<template>
  <div v-if="isNavDrawerOpen" class="nav-drawer tablet">
    <header class="nav-drawer__header row">
      <div class="icon__wrapper left" @click="closeNavDrawer">
        <box-icon class="icon" size="md" name="x" />
      </div>
      <HeaderLogo />
      <div class="header__hamburger tablet icon__wrapper right">
        <a href="/kosarica" class="nav-link-mobile icon__link">
          <box-icon class="icon" size="md" name="cart-alt" />
        </a>
      </div>
    </header>
    <nav class="nav-drawer__nav row">
      <ul class="nav-drawer__list">
        <li class="nav-drawer__item">
          <span class="nav-drawer__link" @click="toggleCategoryDropdown">
            Ponuda
            <box-icon
              class="icon inner-icon"
              size="md"
              name="chevron-down-square"
            />
          </span>
          <ul v-if="isCategoryDropdownOpen" class="nav-drawer-dropdown__list">
            <li class="nav-drawer-dropdown__item">
              <a href="#" class="nav-drawer-dropdown__link">
                <span class="emoji">🍰️</span> Kolači</a>
            </li>
            <li class="nav-drawer-dropdown__item">
              <a href="#" class="nav-drawer-dropdown__link">
                <span class="emoji">🎂️</span> Torte</a>
            </li>
            <li class="nav-drawer-dropdown__item">
              <a href="#" class="nav-drawer-dropdown__link">
                <span class="emoji">🥐</span> Krosasani
              </a>
            </li>
            <li class="nav-drawer-dropdown__item">
              <a href="#" class="nav-drawer-dropdown__link"><span class="emoji">🥪️</span> Sendviči</a>
            </li>
            <li class="nav-drawer-dropdown__item">
              <a href="#" class="nav-drawer-dropdown__link"><span class="emoji">🍹️</span> Ostalo</a>
            </li>
          </ul>
        </li>
        <li class="nav-drawer__item">
          <a href="o-nama.html" class="nav-drawer__link">O nama</a>
        </li>
        <li class="nav-drawer__item">
          <a href="blog.html" class="nav-drawer__link">Blog</a>
        </li>
        <li class="nav-drawer__item">
          <a href="kontakt.html" class="nav-drawer__link">Kontakt</a>
        </li>
      </ul>
      <div class="nav-drawer__user">
        <a
          href="/profil"
          class="nav-link nav-link-mobile"
          aria-label="Location"
        >
          <box-icon class="icon" size="lg" name="user-circle" />
          Matija Osrečki
        </a>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.nav-drawer {
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
