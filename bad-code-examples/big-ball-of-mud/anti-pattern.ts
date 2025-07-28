// Fixed in: app/pages/product.page.ts, app/pages/home.page.ts, app/pages/login.page.ts, app/pages/contact.page.ts, app/pages/category.page.ts
// 🚨 ANTI-PATTERN: Big Ball of Mud
// Everything is mixed together: UI, business logic, data, test orchestration, and helpers
// No clear structure, no separation of concerns, everything is global

import { test, expect } from '@playwright/test';

// Global variables everywhere
let userEmail = 'customer@practicesoftwaretesting.com';
let userPassword = 'welcome01';
let productName = 'Safety Goggles';
let orderTotal = 0;
let orderStatus = '';
let discount = 0;
let stock = 0;
let error = '';

// Helper functions mixed with test logic
async function login(page) {
  await page.goto('https://practicesoftwaretesting.com/auth/login');
  await page.locator('input[placeholder="Your email"]').fill(userEmail);
  await page.locator('input[placeholder="Your password"]').fill(userPassword);
  await page.locator('button:has-text("Login")').click();
}

async function searchAndAddToCart(page) {
  await page.locator('input[placeholder="Search"]').fill(productName);
  await page.locator('button:has-text("Search")').click();
  await page.locator(`.product-item:has-text("${productName}")`).click();
  await page.locator('button:has-text("Add to Cart")').click();
}

async function checkout(page) {
  await page.locator('[data-test="nav-cart"]').click();
  await page.locator('button:has-text("Proceed to Checkout")').click();
  await page.locator('input[name="name"]').fill('John Doe');
  await page.locator('input[name="email"]').fill(userEmail);
  await page.locator('textarea[name="address"]').fill('123 Main St');
  await page.locator('input[value="credit_card"]').check();
  await page.locator('input[name="card_number"]').fill('4111111111111111');
  await page.locator('input[name="expiry"]').fill('12/25');
  await page.locator('input[name="cvv"]').fill('123');
  await page.locator('button:has-text("Submit Order")').click();
}

async function updateOrderStatus(page) {
  const status = await page.locator('.order-status').textContent();
  orderStatus = status || '';
}

async function applyDiscount(page) {
  const subtotal = await page.locator('.subtotal').textContent();
  discount = subtotal ? parseFloat(subtotal) * 0.1 : 0;
}

async function checkStock(page) {
  const stockText = await page.locator('.stock-count').textContent();
  stock = stockText ? parseInt(stockText) : 0;
}

async function handleError(page) {
  const errorMsg = await page.locator('.error-message').textContent();
  error = errorMsg || '';
}

// Test mixes everything together
// No clear boundaries, everything is global, helpers are not organized

/*
test('Big Ball of Mud: Complete order flow', async ({ page }) => {
  await login(page);
  await searchAndAddToCart(page);
  await checkStock(page);
  await applyDiscount(page);
  await checkout(page);
  await updateOrderStatus(page);
  await handleError(page);

  // Assertions are scattered
  expect(orderStatus).not.toBe('');
  expect(stock).toBeGreaterThan(0);
  expect(discount).toBeGreaterThanOrEqual(0);
  if (error) {
    expect(error).not.toContain('critical');
  }
});

// This code is a big ball of mud: no structure, no separation, everything is global and tangled.
*/
