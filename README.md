# Toolshop UI E2E Playwright Demo

A comprehensive E2E testing project demonstrating Playwright with advanced CI/CD practices, design patterns, and code quality tools.

## 🚀 Features

- **Playwright E2E Testing** with TypeScript
- **Design Patterns**: Abstract Factory and Factory Method implementations
- **CI/CD Pipeline** with GitHub Actions
- **Code Quality Tools**: ESLint, Prettier, TypeScript, SonarQube
- **Security Scanning** and vulnerability detection
- **Pre-commit Hooks** for code quality enforcement

## 📋 Prerequisites

- Node.js 18+
- npm or yarn
- Git

## 🛠️ Installation

```bash
# Clone the repository
git clone <repository-url>
cd toolshop-ui-e2e-playwright-demo

# Install dependencies
npm install

# Setup pre-commit hooks
npm run postinstall
```

## 🔧 Environment Setup

Copy `.env.example` to `.env` and update the values:

```bash
cp .env.example .env
```

### Default Accounts (Open Source)

| First name | Last name | Role  | E-mail                                | Password  |
| ---------- | --------- | ----- | ------------------------------------- | --------- |
| John       | Doe       | admin | admin@practicesoftwaretesting.com     | welcome01 |
| Jane       | Doe       | user  | customer@practicesoftwaretesting.com  | welcome01 |
| Jack       | Howe      | user  | customer2@practicesoftwaretesting.com | welcome01 |

## 🧪 Running Tests

```bash
# Run all tests (excluding buggy tests)
npm run test

# Run buggy tests only
npm run test:buggy

# Run tests with coverage for SonarQube
npm run test:coverage

# Run screenshot tests
npm run test:screenshot

# Update snapshots (IMPORTANT: Run before screenshot tests)
npm run update:snapshots

# Show test report
npm run report
```

## 🔍 Code Quality

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Check code formatting
npm run format:check

# Format code
npm run format

# Type checking
npm run type-check

# Security audit
npm run audit
```

## 📊 SonarQube Analysis

This project integrates with SonarCloud for code quality analysis (free for public repositories).

### Setup SonarCloud

1. Create account at [sonarcloud.io](https://sonarcloud.io)
2. Add GitHub secrets: `SONAR_TOKEN` and `SONAR_ORGANIZATION`
3. See `SONARQUBE_SETUP.md` for detailed instructions

### Run Analysis

```bash
# For SonarCloud
npm run sonar:cloud

# For local SonarQube server
npm run sonar:local
```

## 🎯 Design Patterns

- **Abstract Factory**: `app/factories/abstract/` - Normal vs. buggy page objects
- **Factory Method**: `app/factories/factory-method/` - Test data factories

## 📁 Project Structure

```
├── app/
│   ├── components/          # Page components
│   ├── factories/          # Design pattern implementations
│   └── pages/              # Page objects
├── tests/
│   ├── integration/        # Integration tests
│   ├── unit/              # Unit tests
│   └── screenshot/        # Visual regression tests
├── .github/
│   ├── actions/           # Composite actions
│   └── workflows/         # CI/CD workflows
├── env/                   # Environment configuration
├── utils/                 # Utility functions
└── fixtures/              # Playwright fixtures
```

## 🤝 Contributing

1. Create a feature branch: `feature/ARC-XXXX--description`
2. Follow the coding standards enforced by ESLint and Prettier
3. Ensure all tests pass
4. Submit a pull request

## 📝 License

ISC License

## 👨‍💻 Author

Oleksandr Kalyna - oleksandr.kalyna.qa@gmail.com
