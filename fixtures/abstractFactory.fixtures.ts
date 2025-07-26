import { test as base } from '@playwright/test';
import { DefaultPageFactory } from '../app/factories/abstract/implementations/DefaultPageFactory';
import { Sprint5WithBugsPageFactory } from '../app/factories/abstract/implementations/Sprint5WithBugsPageFactory';
import { AbstractFactoryApplication } from '../app/factories/abstract/Application';

export type FactoryFixtures = {
  normalFactory: DefaultPageFactory;
  buggyFactory: Sprint5WithBugsPageFactory;
  normalApp: AbstractFactoryApplication;
  buggyApp: AbstractFactoryApplication;
};

export const test = base.extend<FactoryFixtures>({
  normalFactory: async ({ page }, use) => {
    const factory = new DefaultPageFactory(page);
    await use(factory);
  },
  buggyFactory: async ({ page }, use) => {
    const factory = new Sprint5WithBugsPageFactory(page);
    await use(factory);
  },
  normalApp: async ({ normalFactory }, use) => {
    const app = new AbstractFactoryApplication(normalFactory);
    await use(app);
  },
  buggyApp: async ({ buggyFactory }, use) => {
    const app = new AbstractFactoryApplication(buggyFactory);
    await use(app);
  }
});
