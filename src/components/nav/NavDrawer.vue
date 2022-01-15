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
      <RouterLink to="/" @click="closeNavDrawer">
        <HeaderLogo />
      </RouterLink>
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
              <RouterLink
                :to="`/kategorija/kolaci`"
                class="nav-drawer-dropdown__link"
                @click="closeNavDrawer"
              >
                <span class="emoji">🍰️</span> Kolači
              </RouterLink>
            </li>
            <li class="nav-drawer-dropdown__item">
              <RouterLink
                :to="`/kategorija/torte`"
                class="nav-drawer-dropdown__link"
                @click="closeNavDrawer"
              >
                <span class="emoji">🎂️</span> Torte
              </RouterLink>
            </li>
            <li class="nav-drawer-dropdown__item">
              <RouterLink
                :to="`/kategorija/kroasani`"
                class="nav-drawer-dropdown__link"
                @click="closeNavDrawer"
              >
                <span class="emoji">🥐</span> Krosasani
              </RouterLink>
            </li>
            <li class="nav-drawer-dropdown__item">
              <RouterLink
                :to="`/kategorija/sendvici`"
                class="nav-drawer-dropdown__link"
                @click="closeNavDrawer"
              >
                <span class="emoji">🥪️</span> Sendviči
              </RouterLink>
            </li>
            <li class="nav-drawer-dropdown__item">
              <RouterLink
                :to="`/kategorija/cijela-ponuda`"
                class="nav-drawer-dropdown__link"
                @click="closeNavDrawer"
              >
                <span class="emoji">🍹️</span> Sve
              </RouterLink>
            </li>
          </ul>
        </li>
        <li class="nav-drawer__item">
          <RouterLink
            to="/o-nama"
            class="nav-drawer__link"
            @click="closeNavDrawer"
          >
            O nama
          </RouterLink>
        </li>
        <li class="nav-drawer__item">
          <RouterLink
            to="/blog"
            class="nav-drawer__link"
            @click="closeNavDrawer"
          >
            Blog
          </RouterLink>
        </li>
        <li class="nav-drawer__item">
          <RouterLink
            to="/kontakt"
            class="nav-drawer__link"
            @click="closeNavDrawer"
          >
            Kontakt
          </RouterLink>
        </li>
      </ul>
      <div class="nav-drawer__user">
        <RouterLink
          to="/profil"
          class="nav-link nav-link-mobile"
          aria-label="Location"
          @click="closeNavDrawer"
        >
          <box-icon class="icon" size="lg" name="user-circle" />
          Matija Osrečki
        </RouterLink>
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
    //  cursor: pointer;

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
