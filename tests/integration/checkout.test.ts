import { skipIfWebkit } from '../../utils/testSkipper';
import { shopTest } from '../../fixtures';

shopTest.describe('Order products', () => {
  skipIfWebkit();

  shopTest(
    'Registered customer can order product',
    {
      tag: ['@smoke', '@e2e', '@C289876']
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async ({ app: { home, product, header, checkout }, newUser }) => {
      await home.searchProduct('Safety Goggles');
      await home.selectProduct('Safety Goggles');
      await product.setQuantity(2);
      await product.addToCart();
      await product.expectProductIsAddedToCart();
      await header.clickCart();
      await checkout.expectLoaded();
      await checkout.proceedToSignInStep();
      await checkout.proceedToAddressStep();
      await checkout.proceedToPaymentStep();
      await checkout.setPaymentMethod();
      await checkout.clickConfirmButton();
      await checkout.expectSuccessPaymentMessage();
      await checkout.clickConfirmButton();
      //TBD: Update test lines below
      const invoiceId = await checkout.expectOrderPlaced();
      console.log('Your invoice ID is: ', invoiceId);
    }
  );

  shopTest(
    'Customer can change product quantity during checkout',
    {
      tag: ['@C289877']
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async ({ app: { checkout, header, base }, newUser, itemAddedToCart }) => {
      await header.clickCart();
      await checkout.setProductQuantity(4);
      await base.expectToastMessageToBe('Product quantity updated.');
    }
  );
});
