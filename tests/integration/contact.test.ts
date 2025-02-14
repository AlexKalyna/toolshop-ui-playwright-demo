import { faker } from '@faker-js/faker';
import { shopTest } from '../../fixtures';
import { ContactData } from '../../models/user';

const guestContactData: ContactData = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: `test+${faker.string.uuid()}@test.com`,
  subject: 'Customer service',
  message: faker.lorem.words(25)
};

const loggedInContactData: ContactData = {
  subject: 'Return',
  message: faker.lorem.words(25)
};

shopTest(
  'Logged in customer can send contact request',
  {
    tag: ['@smoke', '@e2e', '@C261417']
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async ({ app: { header, contact }, newUser }) => {
    await header.clickContactPage();
    await contact.expectLoaded();
    await contact.fillRequiredFields(loggedInContactData);
    await contact.uploadAttachment();
    await contact.clickSendButton();
    await contact.expectThanksMessageIsDisplayed();
  }
);

shopTest(
  'Logged out customer can send contact request',
  {
    tag: ['@smoke', '@e2e', '@C261418']
  },
  async ({ app: { header, contact, home } }) => {
    await home.open();
    await header.clickContactPage();
    await contact.expectLoaded();
    await contact.fillRequiredFields(guestContactData, false);
    await contact.uploadAttachment();
    await contact.clickSendButton();
    await contact.expectThanksMessageIsDisplayed();
  }
);
