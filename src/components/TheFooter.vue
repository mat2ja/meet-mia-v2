<script setup>
import { useStore } from '@/stores/index.js';
const { footerItems } = useStore();
</script>

<template>
  <footer class="footer">
    <div class="footer__top">
      <div class="row">
        <section class="footer__grid">
          <div class="footer__column">
            <h4 class="footer__column-title">
              Navigacija
            </h4>
            <ul class="footer__list">
              <li
                v-for="item in footerItems.navigacija"
                :key="item.label"
                class="footer__list-item"
              >
                <a href="#" class="footer_link">{{ item.label }}</a>
              </li>
            </ul>
          </div>
          <div class="footer__column desktop">
            <h4 class="footer__column-title">
              Lokacija
            </h4>
            <ul class="footer__list">
              <li
                v-for="item in footerItems.lokacija"
                :key="item.label"
                class="footer__list-item"
              >
                <a href="#" class="footer_link">{{ item.label }}</a>
              </li>
            </ul>
          </div>
          <div class="footer__logo desktop">
            <img src="/images/logo-2.png" alt="logo" />
          </div>
          <div class="footer__column right">
            <h4 class="footer__column-title">
              Kontakt
            </h4>
            <ul class="footer__list">
              <li
                v-for="item in footerItems.kontakt"
                :key="item.label"
                class="footer__list-item"
              >
                <a href="#" class="footer_link">{{ item.label }}</a>
              </li>
            </ul>
          </div>
          <div class="footer__column right">
            <h4 class="footer__column-title">
              Info
            </h4>
            <ul class="footer__list">
              <li
                v-for="item in footerItems.info"
                :key="item.label"
                class="footer__list-item"
              >
                <a href="#" class="footer_link">{{ item.label }}</a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
    <section class="footer__bottom">
      <div class="row">
        <div class="footer__bottom-content">
          <p class="footer__copyright">
            ©2021 Meet Mia®, Site by Matija Osrečki
          </p>
          <div class="footer__socials">
            <a href="#" class="footer__social-link">
              <box-icon
                class="icon"
                size="lg"
                name="trip-advisor"
                type="logo"
              ></box-icon>
            </a>
            <a href="#" class="footer__social-link">
              <box-icon
                class="icon"
                size="lg"
                name="instagram-alt"
                type="logo"
              ></box-icon>
            </a>
            <a href="#" class="footer__social-link">
              <box-icon
                class="icon"
                size="lg"
                name="facebook-circle"
                type="logo"
              ></box-icon>
            </a>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background: var(--brown-800);
  margin-top: auto;
  z-index: 20;

  &__top {
    padding: 5rem 0;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    gap: 2rem;

    @media only screen and (max-width: 800px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media only screen and (max-width: 600px) {
      grid-template-columns: 1fr;
      row-gap: 3rem;
    }
  }

  &__column {
    &.right {
      text-align: right;
    }

    &.center {
      text-align: center;
    }

    @media only screen and (max-width: 800px) {
      &:nth-of-type(4) {
        text-align: center;
      }
    }

    @media only screen and (max-width: 600px) {
      text-align: left !important;
    }
  }

  &__column-title {
    font-family: var(--font-primary);
    text-transform: uppercase;
    color: var(--peach-400);
    font-size: var(--text-md);
    margin-bottom: 0.75rem;
  }

  &__list {
    color: var(--peach-20);
    font-size: var(--text-base);
    font-weight: 500;
  }

  &__list-item {
    padding: 0.2rem 0;
  }

  &__logo {
    max-width: 100%;
    padding: 0 3rem;
    overflow: hidden;

    img {
      max-height: 200px;
      border-radius: var(--border-radius);
    }
  }

  &__link {
    display: block;
  }

  &__bottom {
    color: var(--peach-20);
    background: var(--brown-900);
  }

  &__bottom-content {
    display: flex;
    align-items: center;
    padding: 1rem 0;
    font-weight: 500;
    justify-content: space-between;
    gap: 1rem;

    @media only screen and (max-width: 600px) {
      padding: 2rem 0;
      flex-direction: column-reverse;
      gap: 2rem;
    }
  }

  &__socials {
    display: flex;
    gap: 2rem;

    .icon {
      color: var(--peach-500);
    }
  }

  &__social-link {
    &:hover {
      .icon {
        color: var(--peach-200);
      }
    }
  }
}
</style>
