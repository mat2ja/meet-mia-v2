<script setup>
const categories = {
  slatko: [
    {
      label: 'Kolači',
      id: 'kolaci',
    },
    {
      label: 'Torte',
      id: 'torte',
    },
    {
      label: 'Kroasani',
      id: 'kroasani',
    },
  ],
  slano: [
    {
      label: 'Sendviči',
      id: 'sendvici',
    },
    {
      label: 'Napitci',
      id: 'napitci',
    },
    {
      label: 'Cijela ponuda',
      id: 'cijela-ponuda',
    },
  ],
};

const imageImport = (filename) => `url(./images/${filename}.jpg)`;
</script>

<template>
  <section class="section-categories row">
    <div
      class="categories__grid"
      :class="{ reverse: categoryName === 'slano' }"
      v-for="(categoryGroup, categoryName) of categories"
      :key="categoryName"
      :id="`kat-${categoryName}`"
    >
      <div class="categories__product-grid">
        <div
          v-for="cat in categoryGroup"
          class="categories__card category-card"
          :style="{ backgroundImage: imageImport(cat.id) }"
          :key="cat.id"
          :id="`cat-${cat.id}`"
        >
          <h4 class="category-card__label">
            {{ cat.label }}
          </h4>
        </div>
      </div>
      <h3
        class="categories__title"
        :class="{ reverse: categoryName === 'slano' }"
      >
        {{ categoryName }}
      </h3>
    </div>
  </section>
</template>

<style lang="scss">
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

#kat-slano {
  .categories__title {
    order: -1;
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
}
</style>
