import { faker } from '@faker-js/faker';
import { TestDataFactory } from '../interfaces/TestDataFactory';
import { UserTestData } from '../types/TestData';

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
      username: faker.internet.userName(),
      phone: faker.phone.number()
    };
  }

  // Additional method specific to user data
  createAdminUser(): UserTestData {
    const userData = this.createTestData();
    return {
      ...userData,
      email: 'admin@practicesoftwaretesting.com',
      password: 'welcome01',
      username: 'admin'
    };
  }

  createCustomerUser(): UserTestData {
    const userData = this.createTestData();
    return {
      ...userData,
      email: 'customer@practicesoftwaretesting.com',
      password: 'welcome01',
      username: 'customer'
    };
  }
}
