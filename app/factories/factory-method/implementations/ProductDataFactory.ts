import { faker } from '@faker-js/faker';
import { TestDataFactory } from '../interfaces/TestDataFactory';
import { ProductTestData } from '../types/TestData';

// Concrete factory for creating product test data
export class ProductDataFactory implements TestDataFactory {
  createTestData(): ProductTestData {
    return {
      id: faker.string.uuid(),
      createdAt: new Date(),
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: parseFloat(faker.commerce.price()),
      category: faker.commerce.department(),
      inStock: faker.datatype.boolean(),
      imageUrl: faker.image.url()
    };
  }

  // Additional method specific to product data
  createHandTool(): ProductTestData {
    const productData = this.createTestData();
    return {
      ...productData,
      name: 'Professional Hammer',
      description: 'High-quality hammer for professional use',
      price: 29.99,
      category: 'Hand Tools',
      inStock: true
    };
  }

  createPowerTool(): ProductTestData {
    const productData = this.createTestData();
    return {
      ...productData,
      name: 'Cordless Drill',
      description: '20V cordless drill with battery included',
      price: 89.99,
      category: 'Power Tools',
      inStock: true
    };
  }
}
