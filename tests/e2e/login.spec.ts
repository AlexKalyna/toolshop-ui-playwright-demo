import { shopTest } from "../../fixtures";

shopTest.describe('Registered customer can login', async () => {
    shopTest('Customer can successfully login', {
        tag: ['@smoke'],
      }, async ( { app: { login, header } } )=> {
        const customerEmail = process.env.CUSTOMER_EMAIL ?? '';
        const customerPassword = process.env.CUSTOMER_PASSWORD ?? '';

        await login.open();
        await login.fillEmail(customerEmail);
        await login.fillPassword(customerPassword);
        await login.clickLogin();
        await header.expectToBeLoggedIn();
    })
});