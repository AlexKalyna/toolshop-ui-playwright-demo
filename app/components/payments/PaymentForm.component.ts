import { Component } from '../../abstractClasses';
import type { Page, Locator } from '@playwright/test';
import { PaymentMethods } from '../../../utils/paymentMethods';

/**
 * Minimal UI-centric payment form component.
 * YAGNI: selectors and logic are intentionally lean; concrete fields will be added per method as needed.
 */
export class PaymentForm extends Component {
  private readonly methodDropdown: Locator;
  private readonly confirmButton: Locator;
  private readonly successAlert: Locator;

  constructor(page: Page) {
    super(page);
    this.methodDropdown = this.page.locator('[data-test="payment-method"]');
    this.confirmButton = this.page.getByRole('button', { name: 'Confirm' });
    this.successAlert = this.page.locator('div.alert.alert-success');
  }

  async expectLoaded() {
    await this.methodDropdown.waitFor({ state: 'visible' });
  }

  /** Selects a payment method from the dropdown using project-defined values */
  async selectMethod(method: PaymentMethods) {
    await this.methodDropdown.selectOption(String(method));
  }

  /**
   * Fills method-specific fields when present.
   * For methods without fields (COD/BNPL/Bank Transfer), this is a no-op.
   */
  async fillFor(method: PaymentMethods, data?: Record<string, string | number>) {
    switch (method) {
      case PaymentMethods.creditCard: {
        // Placeholders – will be wired when selectors are confirmed on the UI
        const cardNumber = this.page.locator('[data-test="cc-number"]');
        const expiry = this.page.locator('[data-test="cc-expiry"]');
        const cvv = this.page.locator('[data-test="cc-cvv"]');
        if (data) {
          if (data.cardNumber) await cardNumber.fill(String(data.cardNumber));
          if (data.expiry) await expiry.fill(String(data.expiry));
          if (data.cvv) await cvv.fill(String(data.cvv));
        }
        break;
      }
      case PaymentMethods.giftCard: {
        const code = this.page.locator('[data-test="gift-code"]');
        if (data?.code) await code.fill(String(data.code));
        break;
      }
      case PaymentMethods.payLater:
      case PaymentMethods.bankTransfer:
      case PaymentMethods.cash:
      default:
        // No fields required
        break;
    }
  }

  /** Submits the payment and expects a success message. */
  async submit() {
    await this.confirmButton.click();
  }

  /** Optional assertion helper for success message */
  async expectSuccessMessageVisible() {
    await this.successAlert.waitFor({ state: 'visible' });
  }
}
