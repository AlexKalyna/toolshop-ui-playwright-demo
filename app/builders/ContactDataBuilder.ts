import { faker } from '@faker-js/faker';

export interface ContactData {
  firstName?: string;
  lastName?: string;
  email?: string;
  subject: string;
  message: string;
  attachmentPath?: string;
}

export class ContactDataBuilder {
  private data: ContactData = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: `test+${faker.string.uuid()}@test.com`,
    subject: 'Customer service',
    message: faker.lorem.words(25),
    attachmentPath: undefined
  };

  withFirstName(firstName: string) {
    this.data.firstName = firstName;
    return this;
  }
  withLastName(lastName: string) {
    this.data.lastName = lastName;
    return this;
  }
  withEmail(email: string) {
    this.data.email = email;
    return this;
  }
  withSubject(subject: string) {
    this.data.subject = subject;
    return this;
  }
  withMessage(message: string) {
    this.data.message = message;
    return this;
  }
  withAttachment(path: string) {
    this.data.attachmentPath = path;
    return this;
  }
  build() {
    return { ...this.data };
  }
}
