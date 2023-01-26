<template>
  <section class="section-hero row">
    <div class="section-hero__content">
      <h1 class="section-hero__title">Zgrabi si torticu</h1>
      <div class="section-hero__buttons">
        <a href="#ponuda-popularno">
          <button class="btn btn--primary">Istraži ponudu</button>
        </a>
        <a href="#ponuda-posebno">
          <button class="btn btn--secondary">daj što daš</button>
        </a>
      </div>
    </div>
    <div class="section-hero__image">
      <img
        srcset="
          /images/cupcake-sm.png   300w,
          /images/cupcake-mid.png  800w,
          /images/cupcake.png     1000w
        "
        sizes="50vw"
        src="/images/cupcake.png"
        alt="cake"
        draggable="false"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section-hero {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  padding-top: 4rem;

  &.row {
    position: relative;
  }

  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media only screen and (max-width: 600px) {
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  &__content {
    grid-column: 1 / span 7;
    transform: translateY(-2rem);
    z-index: 2;

    @media only screen and (max-width: 1000px) {
      grid-column: 1 / span 3;
      width: max-content;
      transform: translateY(0);
    }

    @media only screen and (max-width: 600px) {
      grid-column: 1 / -1;
      transform: translateY(0);
      width: fit-content;
      padding: 2rem 0;
      width: 100%;
    }
  }

  &__title {
    font-size: var(--text-8xl);

    @media only screen and (max-width: 1200px) {
      font-size: var(--text-7xl);
    }
    @media only screen and (max-width: 800px) {
      font-size: var(--text-6xl);
    }
    @media only screen and (max-width: 600px) {
      font-size: var(--text-5xl);
    }
  }

  &__image {
    grid-column: span 5;
    min-height: 450px;
    transform: translateX(5rem) translateY(-2rem);

    @media only screen and (max-width: 1000px) {
      grid-column: span 1;
      width: 750px;
      transform: translateX(0);
    }

    @media only screen and (max-width: 600px) {
      position: absolute;
      top: -0.5rem;
      right: -100px;
      width: fit-content;

      img {
        height: 70vw;
        object-fit: contain;
      }
    }

    img {
      width: 100%;
      max-width: 450px;
      filter: var(--drop-shadow-peach-lg);
    }
  }

  &__buttons {
    margin-top: 2rem;

    display: flex;
    gap: 0.5rem;
  }
}
</style>
