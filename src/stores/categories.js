import { defineStore } from 'pinia';

export const useCategories = defineStore('categories', {
  state() {
    return {
      categories: {
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
      },
      categoryTags: [
        { label: 'slatko', id: 1 },
        { label: 'slano', id: 2 },
        { label: 'napitci', id: 3 },
        { label: 'ostalo', id: 4 },
        { label: 'kolači', id: 5 },
        { label: 'kroasani', id: 6 },
        { label: 'sendviči', id: 7 },
        { label: 'popularno', id: 8 },
        { label: 'akcija', id: 9 },
        { label: 'zdravo', id: 10 },
        { label: 'vegan', id: 11 },
      ],
    };
  },
  getters: {},
  actions: {
    getCategoryTag(id) {
      return this.categoryTags.find((tag) => tag.id === id) ?? null;
    },
    getCategoryTags(ids) {
      return ids.map((id) => this.getCategoryTag(id)) ?? [];
    },
  },
});
