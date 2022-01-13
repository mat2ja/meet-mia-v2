<script setup></script>

<template>
  <TheHeader />

  <main class="container main">
    <RouterView />
  </main>

  <TheFooter />
</template>

<style lang="scss">
@import '@/assets/styles/variables';
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
  scrollbar-color: var(--peach-600) var(--peach-100);
}

body {
  background: var(--peach-50);
  color: var(--brown-900);
  font-family: var(--font-primary);
  line-height: 1.5;
  font-weight: 400;
  overflow-x: hidden;

  position: relative;
}

::selection {
  color: var(--brown-900);
  background: var(--peach-300);
}

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  border-radius: 10px;
  background: var(--peach-100);
  padding: 5px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: var(--peach-600);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 250ms ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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

  transition: all 200ms ease-out;
}

.row {
  max-width: var(--row-width);
  margin: 0 auto;
  padding: 0 1.5rem;
}

.container {
  width: 100%;
}

.icon {
  color: currentColor;
  fill: currentColor;
  transition: all 250ms ease-out;
}

.btn {
  padding: 1em 2.2em;
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
  // padding-top: 2rem;
  // padding-bottom: 6rem;
  // margin-bottom: 4rem;

  @media only screen and(min-width: 800px) {
    // padding-top: 4rem;
  }
}
</style>
