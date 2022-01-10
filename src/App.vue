<script setup>
import { ref, onMounted } from 'vue';

import TheFooter from '@/components/TheFooter.vue';
import TheHeader from '@/components/TheHeader.vue';
import ProductsSection from '@/components/homepage/ProductsSection.vue';
import CategoriesSection from '@/components/homepage/CategoriesSection.vue';

const offset = ref(0);

const productsSections = [
  {
    title: 'Popularno ovaj tjedan',
    iconName: 'trending-up',
    items: [
      {
        name: 'Salty & Nutty',
        description:
          'Biskviti s lješnjacima, slani karamel, krema od mascarponea i karamela',
        price: '22.00',
        imageUrl: 'salty-nutty.avif',
      },
      {
        name: 'Blu',
        description:
          'Hrskava podloga s lješnjacima, cheesecake s lješnjacima, borovnice, cheesecake mousse s vanilijom',
        price: '26.00',
        imageUrl: 'blu.avif',
      },
      {
        name: 'Queen Niki',
        description:
          'Čokoladni biskvit, hrkavi sloj čokolade s lješnjacima, žele od karamele, čokoladna krema, mousse od tonke',
        price: '24.00',
        imageUrl: 'queen-niki.avif',
      },
      {
        name: 'iPie',
        description: 'Tart od jabuka s crumbleom od lješnjaka i karamelom',
        price: '18.00',
        imageUrl: 'ipie.avif',
      },
      {
        name: 'Veggie Bagel',
        description:
          'Domaće bagel pecivo s hummusom, avokadom, salatom, klice, chilli flakes',
        price: '25.00',
        imageUrl: 'veggie-bagel.avif',
      },
      {
        name: 'Spring Cake',
        description:
          'Cheesecake podloga, biskvit od limuna, marelice, cheesecake mousse s bazgom',
        price: '28.00',
        imageUrl: 'spring-cake.avif',
      },
      {
        name: 'Meet Mia',
        description:
          'Biskvit od pistacija, mousse od pistacija, hrskave pistacije, krema od čokolade i naranče',
        price: '24.00',
        imageUrl: 'meet-mia.avif',
      },
    ],
  },
  {
    title: 'Posebna ponuda',
    iconName: 'discount',
    items: [
      {
        name: 'Salty & Nutty',
        description:
          'Biskviti s lješnjacima, slani karamel, krema od mascarponea i karamela',
        price: '22.00',
        imageUrl: 'salty-nutty.avif',
      },
      {
        name: 'Blu',
        description:
          'Hrskava podloga s lješnjacima, cheesecake s lješnjacima, borovnice, cheesecake mousse s vanilijom',
        price: '26.00',
        imageUrl: 'blu.avif',
      },
      {
        name: 'Queen Niki',
        description:
          'Čokoladni biskvit, hrkavi sloj čokolade s lješnjacima, žele od karamele, čokoladna krema, mousse od tonke',
        price: '24.00',
        imageUrl: 'queen-niki.avif',
      },
      {
        name: 'iPie',
        description: 'Tart od jabuka s crumbleom od lješnjaka i karamelom',
        price: '18.00',
        imageUrl: 'ipie.avif',
      },
      {
        name: 'Veggie Bagel',
        description:
          'Domaće bagel pecivo s hummusom, avokadom, salatom, klice, chilli flakes',
        price: '25.00',
        imageUrl: 'veggie-bagel.avif',
      },
      {
        name: 'Spring Cake',
        description:
          'Cheesecake podloga, biskvit od limuna, marelice, cheesecake mousse s bazgom',
        price: '28.00',
        imageUrl: 'spring-cake.avif',
      },
      {
        name: 'Meet Mia',
        description:
          'Biskvit od pistacija, mousse od pistacija, hrskave pistacije, krema od čokolade i naranče',
        price: '24.00',
        imageUrl: 'meet-mia.avif',
      },
    ],
  },
];

const calculateRowOffset = () => {
  const [row] = [...document.querySelectorAll('.row')];
  offset.value = `${row.getBoundingClientRect().left || 0}`;
};

onMounted(() => {
  calculateRowOffset();
  window.addEventListener('resize', calculateRowOffset);
});
</script>

<template>
  <TheHeader />

  <main class="container main">
    <section class="section-hero row">
      <div class="section-hero__content">
        <h1 class="section-hero__title">Zemi si tortu</h1>
        <div class="section-hero__buttons">
          <button class="btn btn--primary" @click="calculateoffset">
            primary
          </button>
          <button class="btn btn--secondary">secondary</button>
        </div>
      </div>
      <div class="section-hero__image">
        <img src="../assets/images/hero.png" alt="" draggable="false" />
      </div>
    </section>

    <ProductsSection
      v-for="(section, i) in productsSections"
      :key="`${section.title}-${i}`"
      :title="section.title"
      :items="section.items"
      :offset="offset"
    >
      <box-icon class="icon" :name="section.iconName" />
    </ProductsSection>

    <CategoriesSection />
  </main>

  <TheFooter />
</template>

<style lang="scss">
@import '../assets/styles/variables';

* {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  // overscroll-behavior-y: contain;
}

body {
  background: var(--peach-50);
  color: var(--brown-900);
  font-family: var(--font-primary);
  line-height: 1.5;
  font-weight: 400;
  overflow-x: hidden;
  // background-image: url('./assets/Rectangle439.svg');
  // background-image: url('./assets/wickedbackground.svg');
  // background-image: url('./assets/blob-scene-haikei.svg');
  // background-repeat: no-repeat;
  // background-position: top right;
  // background-size: cover;
  background-size: contain;
}

ul {
  list-style: none;
}

img {
  max-width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
  display: block;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-display);
  line-height: 1.02;
  font-weight: 700;
}

h2 {
  font-size: var(--text-6xl);

  @media only screen and (max-width: 800px) {
    font-size: var(--text-4xl);
  }
  @media only screen and (max-width: 800px) {
    font-size: var(--text-3xl);
  }
}

button {
  font: inherit;
  font-size: var(--text-base);
  color: inherit;
  cursor: pointer;
}

.row {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.container {
  width: 100%;
}

.icon {
  color: currentColor;
  fill: currentColor;
}

.btn {
  padding: 0.85em 2.2em;
  text-transform: uppercase;
  border: none;
  border-radius: var(--border-radius);
  color: var(--peach-100);
  font-size: var(--text-base);
  font-weight: 700;
  cursor: pointer;

  &--primary {
    background: var(--burg-700);

    &:hover {
      background: var(--burg-800);
    }
  }

  &--secondary {
    background: var(--peach-700);

    &:hover {
      background: var(--burg-800);
    }
  }

  @media only screen and (max-width: 600px) {
    padding: 0.6em 1.5em;
    font-size: var(--text-sm);
  }
}

.desktop {
  @media only screen and (max-width: 800px) {
    display: none !important;
  }
}

.tablet {
  @media only screen and (min-width: 800px) {
    display: none !important;
  }
  display: block;
}

.mobile {
  @media only screen and (min-width: 600px) {
    display: none !important;
  }
  display: block;
}

.main {
  margin-top: var(--nav-height);
  padding-top: 2rem;
  padding-bottom: 6rem;
  margin-bottom: 4rem;

  @media only screen and(min-width: 800px) {
    padding-top: 4rem;
  }
}

section {
  padding: 2rem 0;
}

.section-hero {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  padding-bottom: 0;
  padding-top: 0;

  @media only screen and(max-width: 800px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media only screen and(max-width: 600px) {
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  &__content {
    grid-column: 1 / span 7;
    transform: translateY(-2rem);
    z-index: 2;

    @media only screen and(max-width: 1000px) {
      grid-column: 1 / span 3;
      width: max-content;
      transform: translateY(0);
    }

    @media only screen and(max-width: 600px) {
      // grid-column: 1 / span 1;
      transform: translateY(0);
      width: fit-content;
    }
  }

  &__title {
    font-size: var(--text-8xl);

    @media only screen and(max-width: 1200px) {
      font-size: var(--text-7xl);
    }
    @media only screen and(max-width: 800px) {
      font-size: var(--text-6xl);
    }
    @media only screen and(max-width: 600px) {
      font-size: var(--text-5xl);
    }
  }

  &__image {
    grid-column: span 5;
    transform: translateX(6rem) translateY(-4rem);
    position: relative;
    // z-index: -1;

    @media only screen and(max-width: 1000px) {
      grid-column: span 1;
      width: 750px;
      transform: translateX(0) translateY(0);
    }

    @media only screen and(max-width: 600px) {
      display: none;
      transform: translateX(40%) translateY(0);
    }

    img {
      width: 100%;
    }
  }

  &__buttons {
    margin-top: 2rem;

    display: flex;
    gap: 0.5rem;
  }
}

.section-categories {
  margin-top: 4rem;
}

.categories {
  &__grid {
    padding: 4rem 0;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr auto;

    &.reverse {
      grid-template-columns: auto 1fr;

      @media only screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
      }
    }

    @media only screen and(max-width: 1000px) {
      grid-template-columns: 1fr;
    }
  }

  &__product-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

    @media only screen and (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }

  &__title {
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    writing-mode: vertical-lr;
    font-size: var(--text-7xl);
    color: var(--burg-500-opaque);
    padding: 0 3rem;

    @media only screen and (max-width: 1000px) {
      writing-mode: initial;
      order: -1;
      margin: 0;
      padding-bottom: 2rem;
      font-size: var(--text-5xl);
    }

    &.reverse {
      transform: rotate(180deg);

      @media only screen and (max-width: 1000px) {
        transform: rotate(0);
      }
    }
  }
}

.category-card {
  flex: 0 1 390px;
  aspect-ratio: 1 / 1;
  box-shadow: var(--box-shadow-peach);
  border-radius: var(--border-radius);
  background: pink;

  background-position: center;
  background-size: cover;

  display: flex;
  align-items: end;
  justify-content: end;
  padding: 0.75rem;

  @media only screen and (max-width: 800px) {
    aspect-ratio: revert;
    height: 350px;
  }

  @media only screen and (max-width: 600px) {
    max-width: 350px;
    width: 100%;
    height: auto;
    aspect-ratio: 1 / 1;
    margin: 0 auto;
  }

  &__label {
    text-align: right;
    padding: 1rem 1.2rem;
    background: var(--white-opaque);
    backdrop-filter: blur(10px);
    border-radius: var(--border-radius);
    text-transform: uppercase;
  }

  &#cat-kolaci {
    background-image: url('./assets/images/kolaci.jpg');
  }

  &#cat-torte {
    background-image: url('./assets/images/torte.jpg');
  }

  &#cat-kroasani {
    background-image: url('./assets/images/kroasani.jpg');
  }
}
</style>
