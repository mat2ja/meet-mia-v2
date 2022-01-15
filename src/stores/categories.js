import { defineStore } from 'pinia';

export const useCategories = defineStore('categories', {
  state() {
    return {
      categories: {
        slatko: [
          {
            label: 'Kolači',
            id: 'kolaci',
            tagId: 5,
          },
          {
            label: 'Torte',
            id: 'torte',
            tagId: 12,
          },
          {
            label: 'Kroasani',
            id: 'kroasani',
            tagId: 6,
          },
        ],
        slano: [
          {
            label: 'Sendviči',
            id: 'sendvici',
            tagId: 7,
          },
          {
            label: 'Napitci',
            id: 'napitci',
            tagId: 3,
          },
          {
            label: 'Cijela ponuda',
            id: 'cijela-ponuda',
            tagId: 0,
          },
        ],
      },
      categoryTags: [
        { label: 'sve', id: 0 },
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
        { label: 'torte', id: 12 },
      ],
    };
  },
  getters: {
    allCategories() {
      const allCategories = [];
      Object.entries(this.categories).forEach(([_catName, categories]) => {
        allCategories.push(...categories);
      });
      return allCategories;
    },
  },
  actions: {
    getCategoryById(id) {
      return this.allCategories.find((category) => category.id === id) ?? null;
    },
    getCategoryTag(id) {
      return this.categoryTags.find((tag) => tag.id === id) ?? null;
    },
    getCategoryTags(ids) {
      return ids.map((id) => this.getCategoryTag(id)) ?? [];
    },
  },
});
