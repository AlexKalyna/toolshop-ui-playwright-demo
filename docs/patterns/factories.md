# Factory Patterns

This folder contains implementations of Factory design patterns for demo purposes.

## Structure

```
app/factories/
├── abstract/                    # Abstract Factory Pattern
│   ├── interfaces/
│   │   └── PageFactory.ts      # Main interface for creating page objects
│   ├── implementations/
│   │   ├── DefaultPageFactory.ts      # Normal application factory
│   │   └── Sprint5WithBugsPageFactory.ts  # Buggy application factory
│   ├── pages/                  # Demo-specific page objects
│   │   └── sprint5WithBugs/
│   │       ├── Sprint5WithBugsLogin.page.ts
│   │       ├── Sprint5WithBugsHome.page.ts
│   │       ├── Sprint5WithBugsContact.page.ts
│   │       └── Sprint5WithBugsHeader.page.ts
│   └── Application.ts          # Application class that uses factories
├── factory-method/             # Factory Method Pattern
│   ├── interfaces/
│   │   └── TestDataFactory.ts  # Interface for creating test data
│   ├── implementations/
│   │   ├── UserDataFactory.ts      # Creates user test data
│   │   ├── ProductDataFactory.ts   # Creates product test data
│   │   └── ContactDataFactory.ts   # Creates contact test data
│   ├── types/
│   │   └── TestData.ts            # Type definitions for test data
│   └── README.md                  # Factory Method documentation
└── README.md                   # This file
```

## Abstract Factory Pattern

The Abstract Factory pattern creates families of related objects without specifying their concrete classes.

### Key Components:

1. **PageFactory Interface** (`abstract/interfaces/PageFactory.ts`)
   - Defines the contract for creating page objects
   - Ensures all factories create compatible page families

2. **Concrete Factories** (`abstract/implementations/`)
   - `DefaultPageFactory`: Creates normal application pages
   - `Sprint5WithBugsPageFactory`: Creates buggy application pages

3. **Application Class** (`abstract/Application.ts`)
   - Consumes a factory to provide access to page objects
   - Demonstrates dependency inversion

4. **Demo Pages** (`abstract/pages/sprint5WithBugs/`)
   - Specialized page objects for buggy environment
   - Use `BUG_BASE_URL` instead of `BASE_URL`

### Usage Example:

```typescript
// Normal application
const normalFactory = new DefaultPageFactory(page);
const normalApp = new AbstractFactoryApplication(normalFactory);
await normalApp.login.open();

// Buggy application
const buggyFactory = new Sprint5WithBugsPageFactory(page);
const buggyApp = new AbstractFactoryApplication(buggyFactory);
await buggyApp.login.open(); // Uses BUG_BASE_URL
```

## Benefits

- **Separation of Concerns**: Factory logic is isolated from page objects
- **Easy Testing**: Can switch between normal and buggy environments
- **Extensibility**: Easy to add new factory implementations
- **Type Safety**: TypeScript ensures factory compatibility
- **Demo Ready**: Clear examples for learning design patterns

## Factory Method Pattern

The Factory Method pattern creates individual objects with a common interface, letting subclasses decide which class to instantiate.

### Key Components:

1. **TestDataFactory Interface** (`factory-method/interfaces/TestDataFactory.ts`)
   - Defines the contract for creating test data objects
   - Ensures all factories create compatible data structures

2. **Concrete Factories** (`factory-method/implementations/`)
   - `UserDataFactory`: Creates user test data
   - `ProductDataFactory`: Creates product test data
   - `ContactDataFactory`: Creates contact form test data

3. **Type Definitions** (`factory-method/types/TestData.ts`)
   - Defines the structure of different test data types
   - Ensures type safety across all factories

### Usage Example:

```typescript
// Create different types of test data
const userFactory = new UserDataFactory();
const userData = userFactory.createTestData();

const productFactory = new ProductDataFactory();
const productData = productFactory.createTestData();
```

## Future Enhancements

- More factory implementations (mobile, desktop, etc.)
- Configuration-driven factory selection
- Integration with test data management tools
