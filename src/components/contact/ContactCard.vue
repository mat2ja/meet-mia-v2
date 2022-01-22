<script setup></script>

<template>
  <div class="contact-card">
    <div class="contact-card__head">
      <h4 class="contact-card__title">Kontakt informacije</h4>
    </div>

    <div class="contact-card__content">
      <p class="contact-card__item">
        <box-icon class="icon" name="gmail" type="logo"></box-icon>
        info@meetmia.hr
      </p>
      <p class="contact-card__item">
        <box-icon class="icon" name="phone" type="solid"></box-icon>
        +385 91 445 5122
      </p>
      <p class="contact-card__item">
        <box-icon class="icon" name="pin" type="solid"></box-icon>
        Vlaška ul. 43, 10000 Zagreb
      </p>
    </div>

    <div class="contact-card__socials">
      <a href="#" class="contact-card__social-link">
        <box-icon
          class="icon"
          size="md"
          name="trip-advisor"
          type="logo"
        ></box-icon>
      </a>
      <a href="#" class="contact-card__social-link">
        <box-icon
          class="icon"
          size="md"
          name="instagram-alt"
          type="logo"
        ></box-icon>
      </a>
      <a href="#" class="contact-card__social-link">
        <box-icon
          class="icon"
          size="md"
          name="facebook-circle"
          type="logo"
        ></box-icon>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact-card {
  background: var(--burg-700);
  box-shadow: var(--box-shadow-peach);
  border-radius: var(--border-radius-lg);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='40' height='69.282' patternTransform='scale(2) rotate(160)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 36%, 34%, 1)'/><path d='M13.333-3.849v23.094M6.667-15.396l20 11.547M13.333-19.245l20 11.547M20 0v23.094m20-34.641l-6.667 3.849-6.666 3.849L20 0M0-11.547l6.667 3.849 6.666 3.849L20 0m0-23.094l20 11.547v23.094L20 23.094l-6.667-3.849-6.666-3.849L0 11.547v-23.094l6.667-3.849 6.666-3.849zM40-3.769L20 7.698m20-3.849l-16.253 9.384L20 15.396M6.667-7.698v23.094m6.666 50.037v23.094M6.667 53.886l20 11.547M13.333 50.037l20 11.547M20 69.282v23.094m20-34.641l-6.667 3.849-6.666 3.849L20 69.282M0 57.735l6.667 3.849 6.666 3.849L20 69.282m0-23.094l20 11.547v23.094L20 92.376l-6.667-3.849-6.666-3.849L0 80.829V57.735l6.667-3.849 6.666-3.849zm20 19.325L20 76.98m20-3.849L20 84.678M6.667 61.584v23.094m26.666-53.886v23.094m-6.666-34.641l20 11.547M33.333 15.396l20 11.547M40 34.641v23.094m20-34.641l-6.667 3.849-6.666 3.849L40 34.641M20 23.094l6.667 3.849 6.666 3.849L40 34.641m0-23.094l20 11.547v23.094L40 57.735l-6.667-3.849-6.666-3.849L20 46.188V23.094l6.667-3.849 6.666-3.849zm20 19.325L40 42.339m20-3.849L40 50.037M26.667 26.943v23.094M-6.667 30.792v23.094m-6.666-34.641l20 11.547M-6.667 15.396l20 11.547M0 34.641v23.094m20-34.641l-6.667 3.849-6.666 3.849L0 34.641m-20-11.547l6.667 3.849 6.666 3.849L0 34.641m0-23.094l20 11.547v23.094L0 57.735l-6.667-3.849-6.666-3.849L-20 46.188V23.094l6.667-3.849 6.666-3.849zm20 19.325L0 42.339m20-3.849L0 50.037m-13.333-23.094v23.094'  stroke-width='2.5' stroke='hsla(0, 43%, 20%, 0.24)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");

  color: var(--peach-20);

  min-height: 350px;

  @media only screen and (max-width: 600px) {
    padding: 2rem 1.5rem;
  }

  &__title {
    font-family: var(--font-primary);
    font-size: var(--text-2xl);
    text-align: left;
    color: var(--peach-400);
  }

  &__content {
    font-weight: 500;
    font-size: var(--text-lg);
    display: flex;
    flex-direction: column;
    gap: 1rem;

    flex: 1;
    margin-top: 0.75rem;

    @media only screen and (max-width: 600px) {
      font-size: var(--text-md);
    }
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 1rem;
    text-align: left;

    @media only screen and (max-width: 600px) {
      gap: 0.75rem;
    }

    .icon {
      color: var(--peach-500);
    }
  }

  &__socials {
    display: flex;
    gap: 1rem;
    margin-top: auto;

    .icon {
      color: var(--peach-400);
    }
  }

  &__social-link {
    &:hover {
      .icon {
        color: var(--peach-500);
      }
    }
  }
}
</style>
