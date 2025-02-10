import { step } from '../../misc/reporters/step';
import { expect } from '@playwright/test';
import { AppPage } from '../abstractClasses';

export class Login extends AppPage {
  public pagePath = '/auth/login';
  private readonly loginPageTitle = this.page.locator('div.container.auth-container > div > div > h3');
  private readonly authForm = this.page.locator('.auth-form');
  private readonly emailInput = this.page.getByPlaceholder('Your email');
  private readonly passwordInput = this.page.getByPlaceholder('Your password');
  private readonly loginButton = this.page.getByRole('button', { name: 'Login' });
  @step()
  async expectLoaded() {
    await this.page.waitForURL(this.pagePath);
    await expect(this.loginPageTitle).toHaveText('Login');
    await expect(this.authForm).toBeVisible();
  }

  @step()
  async fillEmail(email: string) {
    await this.emailInput.fill(email);
  }

  @step()
  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  @step()
  async clickLogin() {
    await this.loginButton.click();
  }
}
