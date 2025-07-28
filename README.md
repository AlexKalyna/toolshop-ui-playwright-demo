# Toolshop UI E2E Playwright Demo

A comprehensive E2E testing project demonstrating Playwright with advanced CI/CD practices, design patterns, and code quality tools.

## 🚀 Features

- **Playwright E2E Testing** with TypeScript
- **Design Patterns**: Abstract Factory and Factory Method implementations
- **CI/CD Pipeline** with GitHub Actions
- **Code Quality Tools**: ESLint, Prettier, TypeScript, SonarQube
- **Security Scanning** and vulnerability detection
- **Pre-commit Hooks** for code quality enforcement
- **Code Review Tools** with analytics and guidelines

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

## 🔍 Code Review Tools

This project includes comprehensive code review tools and guidelines for maintaining high code quality.

### Review Guidelines

- **Comprehensive Guidelines**: See [Code Review Guidelines](/.github/CODE_REVIEW_GUIDELINES.md)
- **Review Templates**: Enhanced PR templates with analytics
- **Review Process**: Structured 3-phase review process

### Local Review Tools

```bash
# Check for TODO comments
npm run review:todo

# Analyze code complexity
npm run review:complexity

# Scan for potential secrets
npm run review:secrets

# Generate review analytics
npm run review:analytics
```

### Automated Review Features

- **Review Analytics**: Automatic PR analysis and metrics
- **Complexity Assessment**: Code complexity and review time estimation
- **Security Scanning**: Automated sensitive data detection
- **Quality Gates**: Automated quality enforcement

### Review Process

1. **Self-Review**: Use local tools before submitting PR
2. **Automated Checks**: CI/CD runs comprehensive analysis
3. **Peer Review**: Follow structured review guidelines
4. **Quality Gates**: All checks must pass before merge

## 🎯 Design Patterns

- **Abstract Factory**: `app/factories/abstract/` - Normal vs. buggy page objects
- **Factory Method**: `app/factories/factory-method/` - Test data factories

## 🚨 Anti-Pattern Examples

Educational examples of common anti-patterns in test automation and their fixes:

- **Spaghetti Code**: `bad-code-examples/spaghetti-code/` - Unstructured, hard-to-follow code
- **God Object**: `bad-code-examples/god-object/` - Classes with too many responsibilities
- **Big Ball of Mud**: `bad-code-examples/big-ball-of-mud/` - System with no clear structure
- **Magic Strings**: `bad-code-examples/magic-strings/` - Hardcoded strings without constants
- **Magic Numbers**: `bad-code-examples/magic-numbers/` - Hardcoded numbers without explanation
- **Copy-Paste Programming**: `bad-code-examples/copy-paste-programming/` - Duplicated code

Each anti-pattern includes references to where it's properly implemented in the main project.

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
├── bad-code-examples/     # Anti-pattern examples (educational)
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
3. Use local review tools: `npm run review:*`
4. Ensure all tests pass
5. Submit a pull request following the review guidelines

## 📝 License

ISC License

## 👨‍💻 Author

Oleksandr Kalyna - oleksandr.kalyna.qa@gmail.com
