import { test } from '../../fixtures/abstractFactory.fixtures';
import { env } from '../../env';

test.fail(
  'Login with Sprint5WithBugs Abstract Factory',
  {
    tag: ['@buggy', '@C261498'],
    annotation: {
      type: 'issue',
      description: 'https://jira.com/issues/ARC-23180'
    }
  },
  async ({ buggyApp }) => {
    await buggyApp.home.open();
    await buggyApp.home.expectLoaded();
    await buggyApp.header.clickLoginPage();
    await buggyApp.login.open();
    await buggyApp.login.fillEmail(env.CUSTOMER_EMAIL);
    await buggyApp.login.fillPassword(env.CUSTOMER_PASSWORD);
    await buggyApp.login.clickLogin();
    await buggyApp.header.expectToBeLoggedIn();
  }
);

test.fail(
  'Customer returns to the Home page after clicking the "Home" button',
  {
    tag: ['@buggy', '@C261499'],
    annotation: {
      type: 'issue',
      description: 'https://jira.com/issues/ARC23181'
    }
  },
  async ({ buggyApp }) => {
    await buggyApp.contact.open();
    await buggyApp.contact.expectLoaded();
    await buggyApp.header.clickHomePage();
    await buggyApp.home.expectLoaded();
  }
);
