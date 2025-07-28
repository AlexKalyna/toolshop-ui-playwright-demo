// Fixed in: app/pages/contact.page.ts, app/pages/product.page.ts, app/components/header.component.ts, app/factories/factory-method/implementations/ContactDataFactory.ts, app/factories/factory-method/implementations/ProductDataFactory.ts
import { test, expect } from '@playwright/test';

// 🚨 ANTI-PATTERN: Magic Strings
// Hardcoded strings scattered throughout the code without constants or enums

/*
test('User can login and navigate through the application', async ({ page }) => {
  // Magic strings everywhere - hard to maintain and prone to typos
  await page.goto('https://practicesoftwaretesting.com/');

  // Login form selectors as magic strings
  const emailInput = page.locator('input[placeholder="Your email"]');
  const passwordInput = page.locator('input[placeholder="Your password"]');
  const loginButton = page.locator('button:has-text("Login")');

  // Hardcoded test data as magic strings
  await emailInput.fill('customer@practicesoftwaretesting.com');
  await passwordInput.fill('welcome01');
  await loginButton.click();

  // Navigation selectors as magic strings
  const homeLink = page.locator('a:has-text("Home")');
  const contactLink = page.locator('a:has-text("Contact")');
  const productsLink = page.locator('a:has-text("Products")');

  // Hardcoded expected text as magic strings
  await expect(page.locator('h1')).toHaveText('Welcome to Toolshop');

  // Search functionality with magic strings
  const searchInput = page.locator('input[placeholder="Search"]');
  const searchButton = page.locator('button:has-text("Search")');

  await searchInput.fill('Safety Goggles');
  await searchButton.click();

  // Product selection with magic strings
  const productItem = page.locator('.product-item:has-text("Safety Goggles")');
  await productItem.click();

  // Add to cart with magic strings
  const addToCartButton = page.locator('button:has-text("Add to Cart")');
  await addToCartButton.click();

  // Cart navigation with magic strings
  const cartIcon = page.locator('[data-test="nav-cart"]');
  await cartIcon.click();

  // Checkout process with magic strings
  const checkoutButton = page.locator('button:has-text("Proceed to Checkout")');
  await checkoutButton.click();

  // Form filling with magic strings
  const nameInput = page.locator('input[name="name"]');
  const emailInput2 = page.locator('input[name="email"]');
  const addressInput = page.locator('textarea[name="address"]');

  await nameInput.fill('John Doe');
  await emailInput2.fill('john@example.com');
  await addressInput.fill('123 Main Street, City, Country');

  // Payment method selection with magic strings
  const creditCardOption = page.locator('input[value="credit_card"]');
  await creditCardOption.check();

  // Payment details with magic strings
  const cardNumberInput = page.locator('input[name="card_number"]');
  const expiryInput = page.locator('input[name="expiry"]');
  const cvvInput = page.locator('input[name="cvv"]');

  await cardNumberInput.fill('4111111111111111');
  await expiryInput.fill('12/25');
  await cvvInput.fill('123');

  // Submit order with magic strings
  const submitOrderButton = page.locator('button:has-text("Submit Order")');
  await submitOrderButton.click();

  // Success message verification with magic strings
  const successMessage = page.locator('.success-message');
  await expect(successMessage).toHaveText('Order placed successfully');

  // Error handling with magic strings
  const errorMessage = page.locator('.error-message');
  if (await errorMessage.isVisible()) {
    await expect(errorMessage).toHaveText('Invalid email or password');
  }

  // Status checks with magic strings
  const orderStatus = page.locator('.order-status');
  await expect(orderStatus).toHaveText('Processing');

  // User profile navigation with magic strings
  const userMenu = page.locator('[data-test="user-menu"]');
  await userMenu.click();

  const profileLink = page.locator('a:has-text("My Profile")');
  await profileLink.click();

  // Profile page verification with magic strings
  await expect(page.locator('h2')).toHaveText('User Profile');

  // Logout with magic strings
  const logoutButton = page.locator('button:has-text("Logout")');
  await logoutButton.click();

  // Post-logout verification with magic strings
  await expect(page.locator('h1')).toHaveText('Welcome to Toolshop');
});

test('Admin can manage products', async ({ page }) => {
  // More magic strings for admin functionality
  await page.goto('https://practicesoftwaretesting.com/auth/login');

  // Admin login with magic strings
  await page.locator('input[placeholder="Your email"]').fill('admin@practicesoftwaretesting.com');
  await page.locator('input[placeholder="Your password"]').fill('welcome01');
  await page.locator('button:has-text("Login")').click();

  // Admin dashboard navigation with magic strings
  const dashboardLink = page.locator('a:has-text("Dashboard")');
  await dashboardLink.click();

  // Product management with magic strings
  const productsLink = page.locator('a:has-text("Products")');
  await productsLink.click();

  // Add new product with magic strings
  const addProductButton = page.locator('button:has-text("Add New Product")');
  await addProductButton.click();

  // Product form with magic strings
  await page.locator('input[name="product_name"]').fill('New Test Product');
  await page.locator('input[name="product_price"]').fill('99.99');
  await page.locator('textarea[name="product_description"]').fill('A new test product for automation');

  // Save product with magic strings
  const saveButton = page.locator('button:has-text("Save Product")');
  await saveButton.click();

  // Success verification with magic strings
  const successAlert = page.locator('.alert-success');
  await expect(successAlert).toHaveText('Product saved successfully');
});

// This code is full of magic strings that are:
// - Hard to maintain
// - Prone to typos
// - Difficult to refactor
// - No IDE support for autocomplete
// - Inconsistent across the codebase
*/
