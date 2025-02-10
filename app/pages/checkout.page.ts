import { expect } from "@playwright/test";
import { AppPage } from "../abstractClasses";


export class Checkout extends AppPage {

    public pagePath = 'checkout';

    private readonly stepsIndicator = this.page.locator('.steps-indicator');
    private readonly addedItem = this.page.locator('div .ng-star-inserted > table > tbody');
    private readonly quantityInput =  this.page.getByTestId('product-quantity');
    private readonly removeItemIcon = this.page.locator('.btn-danger');
    private readonly  proceedToSignInButton = this.page.locator('[data-test="proceed-1"]');
    private readonly  proceedToAddressButton = this.page.locator('[data-test="proceed-2"]');
    private readonly  proceedToPaymentButton = this.page.locator('[data-test="proceed-3"]');
    private readonly confirmButton = this.page.getByRole('button', {name: 'Confirm'});
    private readonly orderSuccessText = this.page.locator('#order-confirmation');

    async expectLoaded(message?: string) {
        await expect(this.page).toHaveURL(this.pagePath);
        await expect(this.stepsIndicator).toBeVisible();
        await expect(this.addedItem).toBeVisible();
    }

    async setProductQuantity(quantity: number) {
        await this.quantityInput.fill(quantity.toString());
    }

    async proceedToSignInStep() {
        await this.proceedToSignInButton.click();
    }

    async proceedToAddressStep() {
        await this.proceedToAddressButton.click();
    }

    async proceedToPaymentStep() {
        await this.proceedToPaymentButton.click();
    }

    async clickConfirmButton() {
        await this.confirmButton.click();
    }

    async removeItem() {
        await this.removeItemIcon.click();
    }

    async setPaymentMethod(paymentMethod: string = 'Cash on Delivery') {
        await this.page.locator('payment-method').selectOption(paymentMethod);
        await expect(this.page.locator('payment-method')).toHaveText(paymentMethod);
    }

    async expectSuccessPaymentMessage() {
        await expect(this.page.locator('.alert-success > div')).toHaveText('Payment was successful')
    }

    async  expectOrderPlaced(): Promise<string> {
        const order = await this.orderSuccessText.innerText();
        await expect(order).toContain('Thanks for your order!');
        return order.split('is ')[1];
    }




}
