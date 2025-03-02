import { expect } from '@playwright/test';
import { Component } from '../abstractClasses';
import { step } from '../../misc/reporters/step';

export class Base extends Component {
  private readonly messageToast = this.page.locator('#toast-container.toast-top-right.toast-container');
  expectLoaded(): Promise<void> {
    return Promise.resolve();
  }

  @step()
  async expectToastMessageToBe(message: string): Promise<void> {
    await expect(this.messageToast).toHaveText(message);
    await this.messageToast.click();
  }
}
