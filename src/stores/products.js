import { defineStore } from 'pinia';

import { sampleSize } from 'lodash';

import { nanoid } from 'nanoid';

export const useProducts = defineStore('products', {
  state() {
    return {
      products: [
        {
          id: 'eblOAP',
          name: 'Salty & Nutty',
          description:
            'Biskviti s lješnjacima, slani karamel, krema od mascarponea i karamela',
          price: '22.00',
          imageUrl: 'salty-nutty.avif',
          tags: [1, 5, 8, 9],
        },
        {
          id: '1WaA7r',
          name: 'Blu',
          description:
            'Hrskava podloga s lješnjacima, cheesecake s lješnjacima, borovnice, cheesecake mousse s vanilijom',
          price: '26.00',
          imageUrl: 'blu.avif',
          tags: [1, 5, 8],
        },
        {
          id: 'Z-fuXW',
          name: 'Queen Niki',
          description:
            'Čokoladni biskvit, hrkavi sloj čokolade s lješnjacima, žele od karamele, čokoladna krema, mousse od tonke',
          price: '24.00',
          imageUrl: 'queen-niki.avif',
          tags: [1, 5, 8],
        },
        {
          id: '51ydTd',
          name: 'iPie',
          description: 'Tart od jabuka s crumbleom od lješnjaka i karamelom',
          price: '18.00',
          imageUrl: 'ipie.avif',
          tags: [1, 5, 8, 9],
        },
        {
          id: 'HpkdFX',
          name: 'Veggie Bagel',
          description:
            'Domaće bagel pecivo s hummusom, avokadom, salatom, klice, chilli flakes',
          price: '25.00',
          imageUrl: 'veggie-bagel.avif',
          tags: [2, 7, 8, 11],
        },
        {
          id: 'G_I7x7',
          name: 'Spring Cake',
          description:
            'Cheesecake podloga, biskvit od limuna, marelice, cheesecake mousse s bazgom',
          price: '28.00',
          imageUrl: 'spring-cake.avif',
          tags: [1, 5, 9, 11],
        },
        {
          id: 'SH7sje',
          name: 'Meet Mia',
          description:
            'Biskvit od pistacija, mousse od pistacija, hrskave pistacije, krema od čokolade i naranče',
          price: '24.00',
          imageUrl: 'meet-mia.avif',
          tags: [5, 8, 9],
        },
        {
          id: 'HJjTNJ',
          name: 'Avokado na piru',
          description:
            'Tostirana focaccia od pirovog brašna, avokado, cherry rajčice',
          price: '35.00',
          imageUrl: 'avokado-pir.avif',
          tags: [2, 7, 10],
        },
        {
          id: '83TYeY',
          name: 'Vege Wrap',
          description:
            'Tortilja od slanutka, tapioke i špinata punjena humusom, dimljenim tofuom, salatom, rajčicom i tikvicama',
          price: '35.00',
          imageUrl: 'vege-wrap.avif',
          tags: [2, 7, 8, 11],
        },
        {
          id: 'xVo-ez',
          name: 'Porky',
          description:
            'Sendvič s mariniranom svinjetinom, sirom, kiselim krastavcima i umakom od senfa, meda i naranče u domaćem pecivu',
          price: '28.00',
          imageUrl: 'porky.avif',
          tags: [2, 7],
        },
        {
          id: 'XR4Aif',
          name: 'Brioche špinat',
          description: 'Brioche sa špinatom i sirom',
          price: '15.00',
          imageUrl: 'brioche-spinat.avif',
          tags: [2, 7],
        },
        {
          id: '76J1qL',
          name: 'Croissant marmelada',
          description:
            'Ručno rađeni croissant punjen domaćom marmeladom od marelica',
          price: '12.00',
          imageUrl: 'croissant-marmelada.avif',
          tags: [1, 6],
        },
        {
          id: 'XTX2hx',
          name: 'Regular croissant',
          description: 'Domaći ručno rađeni croissant s maslacem',
          price: '8.00',
          imageUrl: 'regular-croissant.avif',
          tags: [1, 6],
        },
        {
          id: 'NrhFku',
          name: 'Croissant pršut',
          description: 'Croissant s pršutom i sirom',
          price: '18.00',
          imageUrl: 'croissant-prsut.avif',
          tags: [2, 6],
        },
        {
          id: 'k5cCsV',
          name: 'Brioche humus',
          description:
            'Fino brioche pecivo s humusom, mariniranim tikvicama i sirom',
          price: '15.00',
          imageUrl: 'brioche-hummus.avif',
          tags: [2, 7, 10],
        },
        {
          id: 'EAnGIk',
          name: 'Bagel Pesto',
          description:
            'Domaće bagel pecivo s pestom, mozzarellom i cherry rajčicom',
          price: '15.00',
          imageUrl: 'bagel-pesto.avif',
          tags: [2, 7, 10],
        },
        {
          id: 'kFrbhs',
          name: 'More than eclair',
          description: 'Eclair s kremom od badema, karamelom i slanim bademima',
          price: '30.00',
          imageUrl: 'more-eclair.avif',
          tags: [1, 5, 8],
        },
        {
          id: 'EIRFLj',
          name: 'Carrot cake',
          description:
            'Biskvit od mrkve, maline, krema od mrkve i bijele čokolade, krema od naranče i sira',
          price: '26.00',
          imageUrl: 'carrot-cake.avif',
          tags: [1, 5],
        },
        {
          id: 'mbrpKW',
          name: 'Lemon tart',
          description: 'Tart s kremom od limuna i meringueom',
          price: '18.00',
          imageUrl: 'lemon-tart.avif',
          tags: [1, 5, 9],
        },
        {
          id: 'qiMAHp',
          name: 'Cocoberry',
          description:
            'Podloga od badema, krema od kokosa, mascarponea i Malibua, maline, biskvit od badema',
          price: '25.00',
          imageUrl: 'cocoberry.avif',
          tags: [1, 5, 8],
        },
      ],
      productsSections: [
        {
          title: 'Popularno ovaj tjedan',
          icon: { name: 'trending-up' },
          itemCount: 10,
          id: 'ponuda-popularno',
        },
        {
          title: 'Posebna ponuda',
          icon: { name: 'discount', type: 'solid' },
          itemCount: 8,
          id: 'ponuda-posebno',
        },
      ],
    };
  },
  getters: {},
  actions: {
    getProductById(id) {
      return this.products.find((product) => product.id === id) ?? null;
    },
    getRandomProducts(size) {
      return sampleSize(this.products, size);
    },
    generateIds(count) {
      return [...Array(count)].map(() => nanoid(6));
    },
    getProductsByCategory(categoryId) {
      if (categoryId === 0) {
        return this.products;
      }
      return this.products.filter((product) =>
        product.tags.includes(categoryId)
      );
    },
  },
});
