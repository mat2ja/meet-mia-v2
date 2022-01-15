import { defineStore } from 'pinia';

export const useBlog = defineStore('blog', {
  state() {
    return {
      posts: [
        {
          title: 'Zeleni kroasan vraćen vlasniku',
          text: 'Cake tiramisu cotton candy I love bear claw pie I love I love muffin. I love lollipop cookie gummi bears gummies carrot cake tiramisu I love biscuit. Cheesecake cookie gummi bears soufflé pudding oat cake I love shortbread. ',
          imageUrl: 'zeleni-kroasan.jpg',
          id: 'fpTdab',
          ts: new Date('2021-12-25'),
        },
        {
          title: 'Ljetna torta za svaku zimu',
          text: 'Marzipan icing tootsie roll donut caramels bonbon chocolate cake pudding. Marshmallow cotton candy cotton candy wafer candy tiramisu jelly cheesecake. Cotton candy candy canes marzipan cupcake',
          imageUrl: 'torta-02.jpg',
          id: 'nsrwAv',
          ts: new Date('2021-11-26'),
        },
        {
          title: 'Halloween eclair weekend',
          text: 'Boo pumpkin jack-o-lantern boo scare jack-o-lantern monster. Monster nightmare spooky abomination chainsaw pumpkin scare. Jack-o-lantern spooky monster boo scare scare afraid. Trick-or-treat',
          imageUrl: 'halloween.jpg',
          id: 'O7cDyv',
          ts: new Date('2021-10-08'),
        },
        {
          title: 'Nestalo praška za pecivo',
          text: 'Cupcake ipsum dolor sit amet sweet roll croissant oat cake croissant. Candy canes lemon drops jelly beans sesame snaps cotton candy icing. Liquorice lollipop halvah sweet roll jelly-o candy bear claw candy. Pastry caramels halvah topping icing. Marshmallow caramels pie gummi bears.',
          imageUrl: 'cura.jpg',
          id: 'MMn6nc',
          ts: new Date('2021-09-19'),
        },
        {
          title: '10 najboljih kolača za svaki četvrtak',
          text: 'Donut gingerbread sweet roll marzipan ice cream dessert chupa chups macaroon. Chocolate bar bear claw pie caramels halvah sesame snaps halvah. Chupa chups danish gummi bears ice cream muffin bear claw dessert sweet roll.',
          imageUrl: 'kolaci-03.jpg',
          id: 'xpNPKd',
          ts: new Date('2021-06-30'),
        },

        {
          title: 'Torta s ljamom',
          text: 'Marzipan icing tootsie roll donut caramels bonbon chocolate cake pudding. Marshmallow cotton candy cotton candy wafer candy tiramisu jelly cheesecake. Cotton candy candy canes marzipan cupcake',
          imageUrl: 'torta-01.jpg',
          id: 'fw_VJ6',
          ts: new Date('2021-04-15'),
        },
        {
          title: 'Jedu se krofne',
          text: 'Cupcake macaroon dragée cake toffee chocolate cake sesame snaps shortbread. Lemon drops cake cotton candy sweet brownie cotton candy ice cream candy bonbon.',
          imageUrl: 'krofne.jpg',
          id: 'pVjtam',
          ts: new Date('2021-02-03'),
        },
        {
          title: 'Slatka punjena paprika',
          text: 'Powder dragée fruitcake biscuit cotton candy chocolate bar chocolate fruitcake topping. Tootsie roll icing powder carrot cake liquorice caramels cotton candy soufflé cookie. Caramels pie croissant apple pie',
          imageUrl: 'kolaci-02.jpg',
          id: 'u-y_pI',
          ts: new Date('2021-01-18'),
        },
        {
          title: 'Pomelo ili paradajz',
          text: 'Soufflé candy tootsie roll brownie bear claw tiramisu tiramisu wafer chocolate bar. Cheesecake bonbon oat cake cotton candy toffee - Tart marshmallow sesame snaps',
          imageUrl: 'sendvici.jpg',
          id: '9nlStU',
          ts: new Date('2020-12-29'),
        },
      ],
    };
  },
});
