import { ref } from 'vue';
import { sampleSize } from 'lodash';
import { nanoid } from 'nanoid';

const products = ref([
  {
    id: 'eblOAP',
    name: 'Salty & Nutty',
    description:
      'Biskviti s lješnjacima, slani karamel, krema od mascarponea i karamela',
    price: '22.00',
    imageUrl: 'salty-nutty.avif',
  },
  {
    id: '1WaA7r',
    name: 'Blu',
    description:
      'Hrskava podloga s lješnjacima, cheesecake s lješnjacima, borovnice, cheesecake mousse s vanilijom',
    price: '26.00',
    imageUrl: 'blu.avif',
  },
  {
    id: 'Z-fuXW',
    name: 'Queen Niki',
    description:
      'Čokoladni biskvit, hrkavi sloj čokolade s lješnjacima, žele od karamele, čokoladna krema, mousse od tonke',
    price: '24.00',
    imageUrl: 'queen-niki.avif',
  },
  {
    id: '51ydTd',
    name: 'iPie',
    description: 'Tart od jabuka s crumbleom od lješnjaka i karamelom',
    price: '18.00',
    imageUrl: 'ipie.avif',
  },
  {
    id: 'HpkdFX',
    name: 'Veggie Bagel',
    description:
      'Domaće bagel pecivo s hummusom, avokadom, salatom, klice, chilli flakes',
    price: '25.00',
    imageUrl: 'veggie-bagel.avif',
  },
  {
    id: 'G_I7x7',
    name: 'Spring Cake',
    description:
      'Cheesecake podloga, biskvit od limuna, marelice, cheesecake mousse s bazgom',
    price: '28.00',
    imageUrl: 'spring-cake.avif',
  },
  {
    id: 'SH7sje',
    name: 'Meet Mia',
    description:
      'Biskvit od pistacija, mousse od pistacija, hrskave pistacije, krema od čokolade i naranče',
    price: '24.00',
    imageUrl: 'meet-mia.avif',
  },
]);

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
      id: 'cijela-ponuda',
    },
  ],
};

export default () => {
  const getRandomProducts = (size) => {
    return sampleSize(products.value, size);
  };

  const getProduct = (id) => {
    return products.value.find((product) => product.id === id) ?? null;
  };
  return {
    products,
    categories,
    getRandomProducts,
    getProduct,
  };
};
