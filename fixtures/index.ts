import test from '@playwright/test';
import { Application } from '../app';
import { UserContext } from '../api/models';
import faker from 'faker';
import { randomUUID } from 'crypto';

export const shopTest = test.extend<{
  app: Application;
  newUser: UserContext;
}>({
  app: async ({ page }, use) => {
    const app = new Application(page);
    await use(app);
  },

  newUser: async ({ app }, use) => {
    const userModel = {
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      country: faker.address.country(),
      postcode: '19700',
      phone: faker.phone.phoneNumber(),
      password: 'StrongP@ssword2025',
      email: `test+${randomUUID()}@test.com`
    };

    const createdUser = await app.api.auth.register(userModel);
    await app.headlessLogin(userModel);
    await app.home.open();

    await use({ userModel, createdUser });
  }
});
