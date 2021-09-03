'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('images', [
      {
        id: 2,
        url: "img/products/image1627167791538.jpg"
      },
      {
        id: 3,
        url: "img/products/image1627167791540.jpg"
      },
      {
        id: 4,
        url: "img/products/image1627168199248.jpg"
      },
      {
        id: 5,
        url: "img/products/image1627168330861.jpg"
      },
      {
        id: 6,
        url: "img/products/image1627168408060.jpg"
      },
      {
        id: 7,
        url: "img/products/image1627168568145.jpg"
      },
      {
        id: 8,
        url: "img/products/image1627168568147.jpg"
      },
      {
        id: 9,
        url: "img/products/image1627168637249.jpg"
      },
      {
        id: 10,
        url: "img/products/image1627168700661.jpg"
      },
      {
        id: 11,
        url: "img/products/image1627168700662.jpg"
      },
      {
        id: 12,
        url: "img/products/image1627173214024.jpg"
      },
      {
        id: 13,
        url: "img/products/image1627173214026.jpg"
      },
      {
        id: 14,
        url: "img/products/image1627173301181.jpg"
      },
      {
        id: 15,
        url: "img/products/image1627249259969.jpg"
      },
      {
        id: 16,
        url: "img/products/image1627249350519.jpg"
      },
      {
        id: 17,
        url: "img/products/image1627249350522.jpg"
      },
      {
        id: 18,
        url: "img/products/image1627257361752.jpg"
      },
      {
        id: 19,
        url: "img/products/image1627257361756.jpg"
      }
      
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('images', null, {});
  }
};
