<script setup>
const submitForm = (e) => {
  console.log(formData);
};

const formData = reactive({
  name: '',
  email: '',
  phoneNumber: '',
  message: '',
});
</script>

<template>
  <form class="contact-form" @submit.prevent="submitForm">
    <div class="contact-form__outer">
      <div class="contact-form__groups">
        <div class="contact-form__group">
          <label for="name">
            <box-icon
              class="icon"
              size="xs"
              type="solid"
              name="user"
            ></box-icon>
            <span> Zovem se </span>
          </label>
          <input id="name" v-model="formData.name" type="text" />
        </div>
        <div class="contact-form__group">
          <label for="email">
            <box-icon
              class="icon"
              size="xs"
              name="gmail"
              type="logo"
            ></box-icon>
            <span>Moj mail je</span>
          </label>
          <input id="email" v-model="formData.email" type="email" />
        </div>
        <div class="contact-form__group">
          <label for="phone">
            <box-icon
              class="icon"
              size="xs"
              name="phone"
              type="solid"
            ></box-icon>
            <span>Nazovi me na</span>
          </label>
          <input id="phone" v-model="formData.number" type="text" />
        </div>
      </div>
      <div class="contact-form__groups contact-form__groups--message">
        <div class="contact-form__group--message">
          <label for="message">
            <box-icon
              class="icon"
              size="xs"
              name="message-dots"
              type="solid"
            ></box-icon>
            <span>Zanima me</span>
          </label>
          <textarea id="message" v-model="formData.message"></textarea>
        </div>
      </div>
    </div>
    <button class="btn btn--primary">
      <span>Pošalji poruku</span>
      <box-icon class="icon" size="sm" type="solid" name="send"></box-icon>
    </button>
  </form>
</template>

<style lang="scss" scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;

  &__outer {
    display: flex;
    gap: 1rem;

    @media only screen and (max-width: 600px) {
      flex-direction: column;

      textarea {
        min-height: 200px;
      }
    }
  }

  &__group {
    display: flex;
    flex-direction: column;
    text-align: left;
    flex: 1;

    &--message {
      display: flex;
      flex-direction: column;
      text-align: left;
      height: 100%;

      textarea {
        flex: 1;
      }
    }
  }

  &__groups {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 2;

    &--message {
      flex: 3;
    }
  }

  label {
    font-size: var(--text-base);
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 0.25rem;
    display: flex;
    gap: 0.5rem;

    .icon {
      color: var(--burg-500);
    }
  }

  input,
  textarea {
    font: inherit;
    padding: 0.5rem;

    padding: 0.75rem 1rem;
    width: 500px;
    display: block;

    color: var(--burg-700);
    background: var(--peach-100);

    border: 2px solid var(--burg-500-opaque);
    border-radius: var(--border-radius-lg);

    font-family: inherit;
    font-size: var(--text-lg);
    font-weight: 500;

    transition: all 250ms ease-out;

    width: 100%;

    box-shadow: var(--box-shadow-peach-sm);

    &:focus {
      outline: none;
      background: var(--peach-200);
      border-color: var(--burg-500);
      box-shadow: var(--box-shadow-peach);
    }

    &::placeholder {
      color: var(--burg-700-opaque);
    }
  }

  .btn {
    display: flex;
    align-self: flex-end;

    .icon {
      margin-left: 0.5rem;
    }

    &:hover {
      .icon {
        transform: translateX(0.5rem);
      }
    }
  }
}
</style>
