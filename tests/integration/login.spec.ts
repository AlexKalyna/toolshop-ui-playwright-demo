import { env } from '../../env';
import { shopTest } from '../../fixtures';
import { faker } from '@faker-js/faker';

shopTest.describe('Registered customer can login', async () => {
  shopTest(
    'Customer can successfully login',
    {
      tag: ['@smoke', '@e2e', '@C261414']
    },
    async ({ app: { login, header } }) => {
      const customerEmail = env.CUSTOMER_EMAIL;
      const customerPassword = env.CUSTOMER_PASSWORD;

      await login.open();
      await login.fillEmail(customerEmail);
      await login.fillPassword(customerPassword);
      await login.clickLogin();
      await header.expectToBeLoggedIn();
    }
  );

  shopTest(
    'User cannot login with not registered credentials',
    {
      tag: ['@C261415']
    },
    async ({ app: { login } }) => {
      const fakeEmail = faker.internet.email();
      const fakePassword = faker.internet.password();

      await login.open();
      await login.fillEmail(fakeEmail);
      await login.fillPassword(fakePassword);
      await login.clickLogin();
      await login.expectInvalidCredentialsError();
    }
  );

  //TBD: other tests
});
