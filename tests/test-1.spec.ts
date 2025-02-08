import { test, expect } from '@playwright/test';
import { skipIfWebkit } from '../utils/testSkipper';
import { shopTest } from '../fixtures';


test.describe('test suite', () => {

// skipIfWebkit();

  // test.use({ storageState: '.auth/customer.json' });
  shopTest('Registered customer can buy a product',{
    tag: ['@smoke'],
  }, async ({ app, page }) => {
   await app.home.open();
   await app.home.searchProduct('Tape');
   await app.home.selectProduct('Tape Measure 5m');
   await app.product.setQuantity(3);
   await app.product.addToCart();
   await app.product.expectProductIsAddedToCart();


    await page.locator('[data-test="nav-cart"]').click();

    await expect(page).toHaveURL('/checkout');
    await page.locator('[data-test="proceed-1"]').click();

    await expect( await page.getByText(/, you are already logged in\. You can proceed to checkout\./)).toBeVisible();
    await page.locator('[data-test="proceed-2"]').click();
    await page.waitForLoadState('networkidle');
    // const response = await page.waitForResponse(response =>
    //   response.url() === 'https://api.practicesoftwaretesting.com/users/me' && response.status() === 200);

    await expect(page.getByRole('heading', { name: 'Billing Address' })).toBeVisible();
    await page.waitForTimeout(3000);
    await page.getByPlaceholder('State *').fill('Nebraska State');
    await page.getByPlaceholder('Your Postcode *').fill('18765');
    await page.locator('[data-test="proceed-3"]').click();
    await expect(page.getByRole('heading', { name: 'Payment' })).toBeVisible();

    await page.locator('[data-test="payment-method"]').selectOption('cash-on-delivery');
    await page.locator('[data-test="finish"]').click();
    await expect (page.locator('.help-block')).toHaveText('Payment was successful');
    await page.locator('[data-test="finish"]').click();
    const orderSuccessText: string = await page.locator('#order-confirmation').innerText();
    const orederId = orderSuccessText.split('is ')[1];
    console.log("Your order is: ",orederId);

  });
});