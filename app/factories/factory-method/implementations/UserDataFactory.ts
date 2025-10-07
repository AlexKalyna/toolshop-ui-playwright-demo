import { faker } from '@faker-js/faker';
import { TestDataFactory } from '../interfaces/TestDataFactory';
import { UserTestData } from '../types/TestData';
import { env } from '../../../../env';

// Concrete factory for creating user test data
export class UserDataFactory implements TestDataFactory {
  createTestData(): UserTestData {
    return {
      id: faker.string.uuid(),
      createdAt: new Date(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      username: faker.internet.username(),
      phone: faker.phone.number()
    };
  }

  // Additional method specific to user data
  createAdminUser(): UserTestData {
    const userData = this.createTestData();
    return {
      ...userData,
      email: env.ADMIN_EMAIL,
      password: env.ADMIN_PASSWORD,
      username: env.ADMIN_USERNAME
    };
  }

  createCustomerUser(): UserTestData {
    const userData = this.createTestData();
    return {
      ...userData,
      email: env.CUSTOMER_EMAIL,
      password: env.CUSTOMER_PASSWORD,
      username: env.CUSTOMER_USERNAME
    };
  }
}
