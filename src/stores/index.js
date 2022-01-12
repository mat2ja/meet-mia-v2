import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state() {
    return {
      footerItems: {
        navigacija: [
          { label: 'Naslovnica' },
          { label: 'Ponuda' },
          { label: 'O nama' },
          { label: 'Blog' },
          { label: 'Kontakt' },
          { label: 'Košarica' },
          { label: 'Korisnički profil' },
        ],
        lokacija: [
          { label: 'Vlaška ul. 43, 10000 Zagreb' },
          { label: 'Pondjeljak - Petak' },
          { label: '8:00 - 21:00' },
        ],
        kontakt: [{ label: 'info@meetmia.hr' }, { label: '+385 91 445 5122' }],
        info: [
          { label: 'FAQ' },
          { label: 'Plaćanje' },
          { label: 'Dostava' },
          { label: 'Povrati' },
          { label: 'Uvjeti korištenja' },
        ],
      },
    };
  },
  getters: {},
  actions: {},
});
