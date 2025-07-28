// Fixed in: app/factories/factory-method/implementations/ContactDataFactory.ts, app/factories/factory-method/implementations/ProductDataFactory.ts, app/pages/product.page.ts
import { test, expect } from '@playwright/test';

// 🚨 ANTI-PATTERN: Magic Numbers
// Hardcoded numeric values without explanation or constants

/*
test('User can complete checkout process', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');

  // Magic numbers for timeouts
  await page.waitForTimeout(2000);

  // Magic numbers for quantities
  const quantityInput = page.locator('input[name="quantity"]');
  await quantityInput.fill('3');

  // Magic numbers for prices
  const priceElement = page.locator('.product-price');
  const price = await priceElement.textContent();
  const totalPrice = parseFloat(price!) * 3;

  // Magic numbers for validation
  expect(totalPrice).toBeGreaterThan(0);
  expect(totalPrice).toBeLessThan(1000);

  // Magic numbers for form validation
  const emailInput = page.locator('input[name="email"]');
  await emailInput.fill('test@example.com');

  // Magic number for minimum password length
  const passwordInput = page.locator('input[name="password"]');
  await passwordInput.fill('password123');

  // Magic numbers for pagination
  const pageSize = 10;
  const currentPage = 1;
  const totalPages = Math.ceil(100 / pageSize);

  // Magic numbers for retry attempts
  let retryCount = 0;
  const maxRetries = 3;

  while (retryCount < maxRetries) {
    try {
      await page.click('button:has-text("Submit")');
      break;
    } catch (error) {
      retryCount++;
      if (retryCount >= maxRetries) {
        throw error;
      }
      await page.waitForTimeout(1000);
    }
  }

  // Magic numbers for performance thresholds
  const startTime = Date.now();
  await page.waitForLoadState('networkidle');
  const loadTime = Date.now() - startTime;

  // Magic number for acceptable load time (3 seconds)
  expect(loadTime).toBeLessThan(3000);

  // Magic numbers for form field limits
  const nameInput = page.locator('input[name="name"]');
  const longName = 'A'.repeat(50);
  await nameInput.fill(longName);

  // Magic number for maximum name length
  if (longName.length > 30) {
    throw new Error('Name too long');
  }

  // Magic numbers for order status codes
  const orderStatus = await page.locator('.order-status').textContent();
  if (orderStatus === '1') {
    console.log('Order is pending');
  } else if (orderStatus === '2') {
    console.log('Order is processing');
  } else if (orderStatus === '3') {
    console.log('Order is shipped');
  } else if (orderStatus === '4') {
    console.log('Order is delivered');
  }

  // Magic numbers for discount calculations
  const subtotal = 150.0;
  const discountPercentage = 15;
  const discountAmount = subtotal * (discountPercentage / 100);
  const finalTotal = subtotal - discountAmount;

  // Magic number for minimum order amount
  if (finalTotal < 50) {
    throw new Error('Order amount too low');
  }

  // Magic numbers for inventory checks
  const availableStock = await page.locator('.stock-count').textContent();
  const requestedQuantity = 5;

  if (parseInt(availableStock!) < requestedQuantity) {
    throw new Error('Insufficient stock');
  }

  // Magic numbers for user roles
  const userRole = await page.locator('.user-role').textContent();
  if (userRole === '1') {
    console.log('Admin user');
  } else if (userRole === '2') {
    console.log('Customer user');
  } else if (userRole === '3') {
    console.log('Guest user');
  }

  // Magic numbers for error codes
  const errorCode = await page.locator('.error-code').textContent();
  if (errorCode === '404') {
    console.log('Page not found');
  } else if (errorCode === '500') {
    console.log('Server error');
  } else if (errorCode === '403') {
    console.log('Access forbidden');
  }

  // Magic numbers for screen sizes
  await page.setViewportSize({ width: 1920, height: 1080 });

  // Magic numbers for scroll positions
  await page.evaluate(() => window.scrollTo(0, 500));

  // Magic numbers for element positions
  const element = page.locator('.some-element');
  const boundingBox = await element.boundingBox();
  if (boundingBox && boundingBox.x > 100 && boundingBox.y > 200) {
    console.log('Element is in expected position');
  }

  // Magic numbers for file sizes
  const fileInput = page.locator('input[type="file"]');
  await fileInput.setInputFiles({
    name: 'test.txt',
    mimeType: 'text/plain',
    buffer: Buffer.from('A'.repeat(1024 * 1024)) // 1MB file
  });

  // Magic number for maximum file size (5MB)
  const maxFileSize = 5 * 1024 * 1024;
  const fileSize = 1024 * 1024;

  if (fileSize > maxFileSize) {
    throw new Error('File too large');
  }

  // Magic numbers for API response codes
  const response = await page.request.get('/api/products');
  if (response.status() === 200) {
    console.log('Success');
  } else if (response.status() === 404) {
    console.log('Not found');
  } else if (response.status() === 500) {
    console.log('Server error');
  }

  // Magic numbers for database limits
  const maxProducts = 1000;
  const currentProducts = 500;

  if (currentProducts >= maxProducts) {
    console.log('Product limit reached');
  }

  // Magic numbers for session timeout
  const sessionTimeout = 30 * 60 * 1000; // 30 minutes in milliseconds
  const currentTime = Date.now();
  const sessionStartTime = currentTime - 15 * 60 * 1000; // 15 minutes ago

  if (currentTime - sessionStartTime > sessionTimeout) {
    console.log('Session expired');
  }
});

// This code is full of magic numbers that are:
// - Hard to understand without context
// - Difficult to maintain and update
// - No explanation of what they represent
// - Inconsistent across the codebase
// - Hard to test and validate
*/
