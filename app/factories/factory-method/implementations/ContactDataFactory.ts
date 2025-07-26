import { faker } from '@faker-js/faker';
import { TestDataFactory } from '../interfaces/TestDataFactory';
import { ContactTestData } from '../types/TestData';

// Concrete factory for creating contact form test data
export class ContactDataFactory implements TestDataFactory {
  createTestData(): ContactTestData {
    return {
      id: faker.string.uuid(),
      createdAt: new Date(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      subject: faker.helpers.arrayElement(['Return', 'Support', 'General', 'Feedback']),
      message: faker.lorem.paragraph(),
      attachmentPath: 'data/attachments/allowed-tes-file-0-Kb.txt'
    };
  }

  // Additional method specific to contact data
  createSupportRequest(): ContactTestData {
    const contactData = this.createTestData();
    return {
      ...contactData,
      subject: 'Support',
      message: 'I need help with my recent order. The product arrived damaged.',
      attachmentPath: 'data/attachments/damage-report.txt'
    };
  }

  createReturnRequest(): ContactTestData {
    const contactData = this.createTestData();
    return {
      ...contactData,
      subject: 'Return',
      message: 'I would like to return the product I received last week.',
      attachmentPath: 'data/attachments/return-form.txt'
    };
  }

  createFeedback(): ContactTestData {
    const contactData = this.createTestData();
    return {
      ...contactData,
      subject: 'Feedback',
      message: 'Great service! The delivery was fast and the product quality is excellent.',
      attachmentPath: undefined // No attachment for feedback
    };
  }
}
