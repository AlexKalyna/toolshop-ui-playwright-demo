import { skipIfWebkit } from '../../utils/testSkipper';
import { shopTest } from '../../fixtures';

shopTest.describe('Order products', () => {
  skipIfWebkit();

  shopTest(
    'Registered customer can order products',
    {
      tag: ['@smoke']
    },
    async ({ app: { home, product, header, checkout }, newUser }) => {
      await home.searchProduct('Tape');
      await home.selectProduct('Tape Measure 5m');
      await product.setQuantity(3);
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
      await checkout.expectSuccessPaymentMessage();
      //TBD: Update test lines below
      const invoiceId = await checkout.expectOrderPlaced();
      console.log('Your invoice ID is: ', invoiceId);
    }
  );
});
