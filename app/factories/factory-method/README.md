# Factory Method Pattern

This folder contains implementations of the Factory Method design pattern for demo purposes.

## What is Factory Method?

The Factory Method pattern defines an interface for creating objects but lets subclasses decide which class to instantiate. It's different from Abstract Factory because:

- **Abstract Factory**: Creates families of related objects
- **Factory Method**: Creates individual objects with a common interface

## Structure

```
app/factories/factory-method/
├── interfaces/
│   └── TestDataFactory.ts      # Interface for creating test data
├── implementations/
│   ├── UserDataFactory.ts      # Creates user test data
│   ├── ProductDataFactory.ts   # Creates product test data
│   └── ContactDataFactory.ts   # Creates contact test data
├── types/
│   └── TestData.ts            # Type definitions for test data
└── README.md                  # This file
```

## Usage Example

```typescript
// Create different types of test data
const userFactory = new UserDataFactory();
const userData = userFactory.createTestData();

const productFactory = new ProductDataFactory();
const productData = productFactory.createTestData();
```

## Benefits

- **Flexibility**: Easy to add new test data types
- **Reusability**: Test data creation logic is centralized
- **Type Safety**: TypeScript ensures correct data structure
- **Demo Ready**: Clear examples for learning design patterns
