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
      id: 'sve',
    },
  ],
};
</script>

<template>
  <section class="section-categories row">
    <div
      class="categories__grid"
      :class="{ reverse: categoryName === 'slano' }"
      v-for="(categoryGroup, categoryName) of categories"
      :key="categoryName"
    >
      <div class="categories__product-grid">
        <div
          class="categories__card category-card"
          v-for="cat in categoryGroup"
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
        :style="{ order: categoryName === 'slano' ? '-1' : '1' }"
      >
        {{ categoryName }}
      </h3>
    </div>
  </section>
</template>

<style lang="scss"></style>
