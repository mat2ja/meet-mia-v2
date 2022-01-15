<script setup>
const emit = defineEmits(['close']);
</script>

<template>
  <div class="category-bar desktop">
    <div class="row">
      <nav class="category-bar__nav">
        <ul class="category-bar__list">
          <li class="category-bar__item">
            <RouterLink
              :to="`/kategorija/kolaci`"
              class="category-bar__link"
              @click="emit('close')"
            >
              Kolači
            </RouterLink>
          </li>
          <li class="category-bar__item">
            <RouterLink
              :to="`/kategorija/torte`"
              class="category-bar__link"
              @click="emit('close')"
            >
              Torte
            </RouterLink>
          </li>
          <li class="category-bar__item">
            <RouterLink
              :to="`/kategorija/kroasani`"
              class="category-bar__link"
              @click="emit('close')"
            >
              Krosasani
            </RouterLink>
          </li>
          <li class="category-bar__item">
            <!-- TODO: not clickable becasue of image -->
            <RouterLink
              :to="`/kategorija/sendvici`"
              class="category-bar__link"
              @click="emit('close')"
            >
              Sendviči
            </RouterLink>
          </li>
          <li class="category-bar__item">
            <RouterLink
              :to="`/kategorija/cijela-ponuda`"
              class="category-bar__link"
              @click="emit('close')"
            >
              Sve
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.category-bar {
  background: var(--brown-900);
  &__nav {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--peach-300);
    height: 100%;
  }

  .row {
    height: 100%;
  }

  &__list {
    display: flex;
  }

  &__item {
    margin: 0 0.5rem;
    text-transform: uppercase;
    font-weight: 600;
  }

  &__link {
    padding: 0.4rem 1rem;
    border-radius: var(--border-radius);
    &:hover {
      background: var(--brown-800);
    }
  }
}
</style>
