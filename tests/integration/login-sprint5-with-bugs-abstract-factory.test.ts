import { test as base, expect } from '@playwright/test';
import { Sprint5WithBugsPageFactory } from '../../app/factories/sprint5WithBugs/Sprint5WithBugsPageFactory';
import { AbstractFactoryApplication } from '../../app/factories/AbstractFactoryApplication';
import { env } from '../../env';

base('Login with Sprint5WithBugs Abstract Factory', async ({ page }) => {
  const factory = new Sprint5WithBugsPageFactory(page);
  const app = new AbstractFactoryApplication(factory);

  await app.login.open();
  await app.login.expectLoaded(); // This will use the buggy logic
  await app.login.fillEmail(env.CUSTOMER_EMAIL);
  await app.login.fillPassword(env.CUSTOMER_PASSWORD);
  await app.login.clickLogin();
  await app.header.expectToBeLoggedIn();
});
