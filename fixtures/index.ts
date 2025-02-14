import test from '@playwright/test';
import { Application } from '../app';
import { UserContext } from '../models/api-models/models';
import { faker } from '@faker-js/faker';

export const shopTest = test.extend<{
  app: Application;
  newUser: UserContext;
  itemAddedToCart: {
    productSlug: string;
  };
  itemAddedToFavorites: {
    productSlug: string;
  };
}>({
  app: async ({ page }, use) => {
    const app = new Application(page);
    await use(app);
  },

  newUser: async ({ app }, use) => {
    const userModel = {
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      address: {
        street: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        country: faker.location.country(),
        postal_code: faker.location.zipCode()
      },
      phone: faker.phone.number(),
      password: faker.internet.password({ prefix: 'A1!a' }),
      email: `test+${faker.string.uuid()}@test.com`
    };

    const createdUser = await app.api.auth.register(userModel);
    await app.headlessLogin(userModel);
    await app.home.open();

    await use({ userModel, createdUser });
  },
  //TBD: in order to make testing preconditions execution time faster the following fixtures should use api requsts for adding product to cart/favorites
  itemAddedToCart: async ({ app }, use) => {
    //TBD: update fixture to use varios product slugs from the list of products
    const productSlug = '01JM0KKEEEPT15EZVQF6EC3QQ6';
    await app.product.open(`product/${productSlug}`);
    await app.product.addToCart();

    await use({ productSlug });
  },

  itemAddedToFavorites: async ({ app }, use) => {
    //TBD: update fixture to use varios product slugs from the list of products
    const productSlug = '01JM0KKEEEPT15EZVQF6EC3QQ6';
    await app.product.open(`product/${productSlug}`);
    await app.product.addToFavorites();

    await use({ productSlug });
  }
});
