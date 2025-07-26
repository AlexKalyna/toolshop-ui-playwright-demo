import type { BaseTestData } from '../types/TestData';

// Factory Method interface - defines the contract for creating test data
export interface TestDataFactory {
  createTestData(): BaseTestData;
}
