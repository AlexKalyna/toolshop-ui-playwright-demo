import { test as base, expect } from '@playwright/test';
import { DefaultPageFactory } from '../../app/factories/default/DefaultPageFactory';
import { AbstractFactoryApplication } from '../../app/factories/AbstractFactoryApplication';
import { env } from '../../env';

base('Login with Abstract Factory Application', async ({ page }) => {
  const factory = new DefaultPageFactory(page);
  const app = new AbstractFactoryApplication(factory);

  await app.login.open();
  await app.login.fillEmail(env.CUSTOMER_EMAIL);
  await app.login.fillPassword(env.CUSTOMER_PASSWORD);
  await app.login.clickLogin();
  await app.header.expectToBeLoggedIn();
});
