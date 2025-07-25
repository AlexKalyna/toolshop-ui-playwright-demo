import { faker } from '@faker-js/faker';
import { shopTest } from '../../fixtures';
import { ContactData } from '../../models/user';
import { ContactDataBuilder } from '../../app/builders/ContactDataBuilder';

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

const attachmentFilePath = 'data/attachments/allowed-tes-file-0-Kb.txt';

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
  'Guest can send contact request',
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

shopTest(
  'Guest can send contact request (Builder Pattern)',
  {
    tag: ['@builder', '@contact', '@e2e']
  },
  async ({ app: { header, contact, home } }) => {
    await home.open();
    await header.clickContactPage();
    await contact.expectLoaded();

    const contactData = new ContactDataBuilder().withAttachment(attachmentFilePath).build();

    await contact.fillRequiredFields(contactData, false);
    if (contactData.attachmentPath) {
      await contact.uploadAttachment(contactData.attachmentPath);
    }
    await contact.clickSendButton();
    await contact.expectThanksMessageIsDisplayed();
  }
);
