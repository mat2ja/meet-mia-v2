<script setup>
const footerItems = {
  navigacija: [
    { label: 'Ponuda' },
    { label: 'O nama' },
    { label: 'Blog' },
    { label: 'Kontakt' },
    { label: 'Košarica' },
    { label: 'Korisnički profil' },
  ],
  lokacija: [
    { label: 'Vlaška ul. 43, 10000 Zagreb' },
    { label: 'Pondjeljak - Petak' },
    { label: '8:00 - 21:00' },
  ],
  kontakt: [{ label: 'info@meetmia.hr' }, { label: '+385 91 445 5122' }],
  info: [
    { label: 'FAQ' },
    { label: 'Plaćanje' },
    { label: 'Dostava' },
    { label: 'Povrati' },
    { label: 'Uvjeti korištenja' },
  ],
};
</script>

<template>
  <footer class="footer">
    <div class="row">
      <div class="footer__grid">
        <div class="footer__column">
          <h4 class="footer__column-title">Navigacija</h4>
          <ul class="footer__list">
            <li
              class="footer__list-item"
              v-for="item in footerItems.navigacija"
              :key="item.label"
            >
              <a href="#" class="footer_link">{{ item.label }}</a>
            </li>
          </ul>
        </div>
        <div class="footer__column desktop">
          <h4 class="footer__column-title">Lokacija</h4>
          <ul class="footer__list">
            <li
              class="footer__list-item"
              v-for="item in footerItems.lokacija"
              :key="item.label"
            >
              <a href="#" class="footer_link">{{ item.label }}</a>
            </li>
          </ul>
        </div>
        <div class="footer__logo desktop">
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div class="footer__column right">
          <h4 class="footer__column-title">Kontakt</h4>
          <ul class="footer__list">
            <li
              class="footer__list-item"
              v-for="item in footerItems.kontakt"
              :key="item.label"
            >
              <a href="#" class="footer_link">{{ item.label }}</a>
            </li>
          </ul>
        </div>
        <div class="footer__column right">
          <h4 class="footer__column-title">Info</h4>
          <ul class="footer__list">
            <li
              class="footer__list-item"
              v-for="item in footerItems.info"
              :key="item.label"
            >
              <a href="#" class="footer_link">{{ item.label }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  margin-top: size(100);
  background: var(--brown-800);
  padding: 5rem 0;

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
    color: var(--peach-300);
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
}
</style>
