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
    };
  },
  getters: {},
  actions: {},
});
