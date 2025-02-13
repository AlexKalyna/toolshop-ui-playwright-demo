import { shopTest } from '../../fixtures';

shopTest(
  'Customer can add product to favorites list',
  {
    tag: ['@smoke', '@C261425']
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async ({ app, newUser }) => {
    await app.home.searchProduct('Cordless Drill');
    await app.home.selectProduct('Cordless Drill 12V');
    await app.product.addToFavorites();
    await app.product.expectProductIsAddedToFavorites();
  }
);

shopTest(
  'Customer can remove product from favorites list',
  {
    tag: ['@smoke', '@e2e', '@C261428']
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async ({ app: { favorites }, newUser }) => {
    await favorites.open();
    // await favorites.clickDeleteItem();
    //TBD: complete this test
    await favorites.expectEmptyFavoritesList();
  }
);
