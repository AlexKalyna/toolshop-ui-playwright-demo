import { test, expect } from '@playwright/test';
import { UserDataFactory } from '../../app/factories/factory-method/implementations/UserDataFactory';
import { ProductDataFactory } from '../../app/factories/factory-method/implementations/ProductDataFactory';
import { ContactDataFactory } from '../../app/factories/factory-method/implementations/ContactDataFactory';

test.describe('Factory Method Pattern Demo', () => {
  test('should create different types of test data using Factory Method pattern', () => {
    // Create factories
    const userFactory = new UserDataFactory();
    const productFactory = new ProductDataFactory();
    const contactFactory = new ContactDataFactory();

    // Create test data using the common interface
    const userData = userFactory.createTestData();
    const productData = productFactory.createTestData();
    const contactData = contactFactory.createTestData();

    // Verify the data has the correct structure
    expect(userData).toHaveProperty('id');
    expect(userData).toHaveProperty('firstName');
    expect(userData).toHaveProperty('email');
    expect(userData).toHaveProperty('createdAt');

    expect(productData).toHaveProperty('id');
    expect(productData).toHaveProperty('name');
    expect(productData).toHaveProperty('price');
    expect(productData).toHaveProperty('createdAt');

    expect(contactData).toHaveProperty('id');
    expect(contactData).toHaveProperty('firstName');
    expect(contactData).toHaveProperty('subject');
    expect(contactData).toHaveProperty('createdAt');

    // Data available for assertions if needed
  });

  test('should create specific types of test data', () => {
    const userFactory = new UserDataFactory();
    const productFactory = new ProductDataFactory();
    const contactFactory = new ContactDataFactory();

    // Create specific types of data
    const adminUser = userFactory.createAdminUser();
    const handTool = productFactory.createHandTool();
    const supportRequest = contactFactory.createSupportRequest();

    // Verify specific data
    expect(adminUser.email).toBe('admin@practicesoftwaretesting.com');
    expect(handTool.name).toBe('Professional Hammer');
    expect(supportRequest.subject).toBe('Support');

    // Data available for assertions if needed
  });

  test('should demonstrate polymorphic behavior', () => {
    // Array of factories - demonstrates polymorphic behavior
    const factories = [new UserDataFactory(), new ProductDataFactory(), new ContactDataFactory()];

    // Create data using the same interface but different implementations
    const testDataArray = factories.map(factory => factory.createTestData());

    // All objects should have the base properties
    testDataArray.forEach(data => {
      expect(data).toHaveProperty('id');
      expect(data).toHaveProperty('createdAt');
    });

    // Data available for assertions if needed
  });
});
