//TBD: Create readme file

# Playwright Test Automation Project

This project is a test automation suite using Playwright for a web application testing.


## Introduction

This repository is a demo project showcasing UI testing using [Playwright](https://playwright.dev/). It includes a collection of automated tests designed to interact with  [Practice Software Testing - Toolshop](https://practicesoftwaretesting.com/) demo site.

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

| First name | Last name | Role   | E-mail                                | Password   |
|------------|-----------|--------|---------------------------------------|------------|
| John       | Doe       | admin  | admin@practicesoftwaretesting.com     | welcome01  |
| Jane       | Doe       | user   | customer@practicesoftwaretesting.com  | welcome01  |
| Jack       | Howe      | user   | customer2@practicesoftwaretesting.com | welcome01  |


5. Run all tests in production environment:

```shell
    npm run test
```
For other environments see `scripts` in the package.json file

6. Show report:

 ```shell
    npm run report
```

## License

This project is licensed under the [MIT License](./LICENSE).