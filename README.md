# Playwright Test Automation Project

This project is a test automation suite using Playwright for a web application testing.

## Introduction

This repository is a demo project showcasing UI testing using [Playwright](https://playwright.dev/). It includes a collection of automated tests designed to interact with [Practice Software Testing - Toolshop](https://practicesoftwaretesting.com/) demo site.

## Getting Started

1. Clone this repository:

```shell
    git clone https://github.com/AlexKalyna/toolshop-ui-e2e-playwright-demo.git
```

2. Install the dependencies:

```shell
    npm install
```

3. Install Playwright:

```shell
    npm install playwright
```

4. Create a `.env.<environment name>` files in `envs` folder of the project ( ideally by copying `.env.localhost.example` ).

### Default accounts

| First name | Last name | Role  | E-mail                                | Password  |
| ---------- | --------- | ----- | ------------------------------------- | --------- |
| John       | Doe       | admin | admin@practicesoftwaretesting.com     | welcome01 |
| Jane       | Doe       | user  | customer@practicesoftwaretesting.com  | welcome01 |
| Jack       | Howe      | user  | customer2@practicesoftwaretesting.com | welcome01 |

5. Run all UI tests in production environment:

```shell
    npm run test
```
6. Run all screenshot tests in production environment:

To run all screenshot tests in the production environment, use:

```sh
npm run test:screenshot
```

### ⚠️ Important: Updating Snapshots

If this is your first time running screenshot tests or if any visual changes have been made, it is **highly recommended** to update the snapshots before executing the tests:

```sh
npm run update:snapshots
```

This ensures that the tests compare against the latest approved visuals, preventing false failures.

7. Show report:

```shell
   npm run report
```

## License

This project is licensed under the [MIT License](/LICENCE).
