import test from '@playwright/test';
import { Application } from '../app';
import { UserContext, AuthResponse } from '../models/api-models/models';
import { faker } from '@faker-js/faker';
import { env } from '../env';

export const shopTest = test.extend<{
  app: Application;
  newUser: UserContext;
  adminUser: AuthResponse;
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

  adminUser: async ({ app }, use) => {
    const loggedInAdminUser = await app.headlessLogin({ email: env.ADMIN_EMAIL, password: env.ADMIN_PASSWORD });
    await app.home.open();

    await use(loggedInAdminUser as unknown as AuthResponse);
  },

  itemAddedToCart: async ({ app, page }, use) => {
    //TBD: refactor fixture
    const productsResponse = await (await page.request.get(`${env.API_URL}products?between=price,1,100&page=1`)).json();
    const productSlug = productsResponse.data[0].id;
    await page.goto(`product/${productSlug}`);
    await app.product.addToCart();

    await use({ productSlug });
  },

  itemAddedToFavorites: async ({ app, page }, use) => {
    //TBD: refactor fixture
    const productsResponse = await (await page.request.get(`${env.API_URL}products?between=price,1,100&page=1`)).json();
    const productSlug = productsResponse.data[2].id;
    await page.goto(`product/${productSlug}`);
    await app.product.addToFavorites();
    await app.product.expectProductIsAddedToFavorites();

    await use({ productSlug });
  }
});
