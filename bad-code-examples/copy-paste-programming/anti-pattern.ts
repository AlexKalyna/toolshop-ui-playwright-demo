// Fixed in: tests/integration/login.test.ts, tests/integration/contact.test.ts, tests/integration/checkout.test.ts, tests/integration/favorites.test.ts, tests/integration/profile.test.ts
import { test, expect } from '@playwright/test';

// 🚨 ANTI-PATTERN: Copy-Paste Programming
// The same logic is duplicated for different products and users

/*
test('User can add Safety Goggles to cart', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('input[placeholder="Search"]').fill('Safety Goggles');
  await page.locator('button:has-text("Search")').click();
  await page.locator('.product-item:has-text("Safety Goggles")').click();
  await page.locator('button:has-text("Add to Cart")').click();
  await page.locator('[data-test="nav-cart"]').click();
  await expect(page.locator('.cart-item:has-text("Safety Goggles")')).toBeVisible();
});

test('User can add Hammer to cart', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('input[placeholder="Search"]').fill('Hammer');
  await page.locator('button:has-text("Search")').click();
  await page.locator('.product-item:has-text("Hammer")').click();
  await page.locator('button:has-text("Add to Cart")').click();
  await page.locator('[data-test="nav-cart"]').click();
  await expect(page.locator('.cart-item:has-text("Hammer")')).toBeVisible();
});

test('Admin can add Screwdriver to cart', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/auth/login');
  await page.locator('input[placeholder="Your email"]').fill('admin@practicesoftwaretesting.com');
  await page.locator('input[placeholder="Your password"]').fill('welcome01');
  await page.locator('button:has-text("Login")').click();
  await page.locator('input[placeholder="Search"]').fill('Screwdriver');
  await page.locator('button:has-text("Search")').click();
  await page.locator('.product-item:has-text("Screwdriver")').click();
  await page.locator('button:has-text("Add to Cart")').click();
  await page.locator('[data-test="nav-cart"]').click();
  await expect(page.locator('.cart-item:has-text("Screwdriver")')).toBeVisible();
});

// This code is full of copy-paste logic for each product and user scenario.
// Any change (e.g., selector, flow) must be made in every test, leading to maintenance issues.
*/
