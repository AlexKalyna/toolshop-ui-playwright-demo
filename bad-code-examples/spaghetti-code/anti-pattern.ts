// Fixed in: app/pages/product.page.ts, app/pages/home.page.ts, app/pages/login.page.ts, app/pages/contact.page.ts, app/pages/category.page.ts
import { test, expect } from '@playwright/test';

// 🚨 ANTI-PATTERN: Spaghetti Code
// This test contains everything mixed together - UI interaction, validation, business logic, and assertions
// all in one massive function with deep nesting and unclear flow.

/*
test('Customer can complete entire shopping process', async ({ page }) => {
  // Navigate to home page
  await page.goto('https://practicesoftwaretesting.com/');

  // Check if we're on the right page
  const title = await page.title();
  if (title !== 'Toolshop') {
    throw new Error('Wrong page loaded');
  }

  // Look for search input and fill it
  const searchInput = page.locator('input[placeholder="Search"]');
  if (await searchInput.isVisible()) {
    await searchInput.fill('Safety Goggles');

    // Find and click search button
    const searchButton = page.locator('button:has-text("Search")');
    if (await searchButton.isVisible()) {
      await searchButton.click();

      // Wait for results and check if products are loaded
      await page.waitForTimeout(2000);
      const products = page.locator('.product-item');
      const productCount = await products.count();

      if (productCount > 0) {
        // Find the first product and click it
        const firstProduct = products.first();
        await firstProduct.click();

        // Now we're on product page, check if we can add to cart
        const addToCartButton = page.locator('button:has-text("Add to Cart")');
        if (await addToCartButton.isVisible()) {
          await addToCartButton.click();

          // Check if cart icon shows updated count
          const cartIcon = page.locator('[data-test="nav-cart"]');
          await cartIcon.waitFor({ state: 'visible' });

          // Click on cart to go to checkout
          await cartIcon.click();

          // On checkout page, check if we can proceed
          const checkoutPage = page.locator('.checkout-page');
          if (await checkoutPage.isVisible()) {
            const proceedButton = page.locator('button:has-text("Proceed")');
            if (await proceedButton.isVisible()) {
              await proceedButton.click();

              // Fill address form if it appears
              const addressForm = page.locator('.address-form');
              if (await addressForm.isVisible()) {
                const nameInput = page.locator('input[name="name"]');
                const emailInput = page.locator('input[name="email"]');
                const addressInput = page.locator('textarea[name="address"]');

                if (
                  (await nameInput.isVisible()) &&
                  (await emailInput.isVisible()) &&
                  (await addressInput.isVisible())
                ) {
                  await nameInput.fill('John Doe');
                  await emailInput.fill('john@example.com');
                  await addressInput.fill('123 Main St, City, Country');

                  // Submit address form
                  const submitAddressButton = page.locator('button:has-text("Submit Address")');
                  if (await submitAddressButton.isVisible()) {
                    await submitAddressButton.click();

                    // Check payment section
                    const paymentSection = page.locator('.payment-section');
                    if (await paymentSection.isVisible()) {
                      const paymentMethod = page.locator('input[name="payment_method"][value="credit_card"]');
                      if (await paymentMethod.isVisible()) {
                        await paymentMethod.check();

                        // Fill payment details
                        const cardNumberInput = page.locator('input[name="card_number"]');
                        const expiryInput = page.locator('input[name="expiry"]');
                        const cvvInput = page.locator('input[name="cvv"]');

                        if (
                          (await cardNumberInput.isVisible()) &&
                          (await expiryInput.isVisible()) &&
                          (await cvvInput.isVisible())
                        ) {
                          await cardNumberInput.fill('4111111111111111');
                          await expiryInput.fill('12/25');
                          await cvvInput.fill('123');

                          // Submit payment
                          const submitPaymentButton = page.locator('button:has-text("Submit Payment")');
                          if (await submitPaymentButton.isVisible()) {
                            await submitPaymentButton.click();

                            // Check for success message
                            const successMessage = page.locator('.success-message');
                            if (await successMessage.isVisible()) {
                              const messageText = await successMessage.textContent();
                              if (messageText && messageText.includes('Order placed successfully')) {
                                console.log('✅ Shopping process completed successfully');
                              } else {
                                throw new Error('Success message not found or incorrect');
                              }
                            } else {
                              throw new Error('Success message not visible');
                            }
                          } else {
                            throw new Error('Submit payment button not found');
                          }
                        } else {
                          throw new Error('Payment form fields not found');
                        }
                      } else {
                        throw new Error('Payment method not found');
                      }
                    } else {
                      throw new Error('Payment section not found');
                    }
                  } else {
                    throw new Error('Submit address button not found');
                  }
                } else {
                  throw new Error('Address form fields not found');
                }
              } else {
                throw new Error('Address form not found');
              }
            } else {
              throw new Error('Proceed button not found');
            }
          } else {
            throw new Error('Checkout page not loaded');
          }
        } else {
          throw new Error('Add to cart button not found');
        }
      } else {
        throw new Error('No products found');
      }
    } else {
      throw new Error('Search button not found');
    }
  } else {
    throw new Error('Search input not found');
  }
});
*/
