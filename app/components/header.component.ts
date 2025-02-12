import { expect } from '@playwright/test';
import { step } from '../../misc/reporters/step';
import { Component } from '../abstractClasses';

export class Header extends Component {
  private readonly siteLogo = this.page.locator('.container > .navbar-brand');
  private readonly navItems = this.page.locator('.navbar-nav');
  private readonly languageDropDown = this.page.getByTestId('language');
  private readonly shoppingCartIcon = this.page.getByTestId('nav-cart');
  private readonly contactButton = this.page.getByRole('menubar').getByText('Contact');
  private readonly homeButton = this.page.getByRole('menubar').getByText('Home');
  private readonly signInButton = this.page.locator('.nav-link');
  private readonly errorBlock = this.page.locator('.help-block');

  @step()
  async expectLoaded() {
    await expect(this.siteLogo).toBeVisible();
    await expect(this.navItems).toBeVisible();
    await expect(this.languageDropDown).toBeVisible();
  }

  @step()
  async selectLanguage(language: string) {
    const languageToSelect = language.toUpperCase();
    await this.languageDropDown.click();
    await this.page.getByText(languageToSelect, { exact: true }).click();
    await expect(this.languageDropDown).toHaveText(languageToSelect);
  }

  @step()
  async selectCategory(category: string) {
    //TBD: Update this method
    await this.navItems.getByText(category).click();
  }

  @step()
  async clickCart() {
    await this.shoppingCartIcon.click();
  }

  @step()
  async clickContactPage() {
    await this.contactButton.click();
  }

  @step()
  async clickHomePage() {
    await this.homeButton.click();
  }

  @step()
  async clickLogo() {
    await this.siteLogo.click();
  }

  @step()
  async clickLoginPage() {
    await this.signInButton.click();
  }
  @step()
  async expectToBeLoggedIn(username: string = 'Jane Doe') {
    await expect(await this.page.getByRole('button', { name: username })).toBeVisible();
  }

  @step()
  async expectInvalidCredentialsError() {
    await expect(await this.errorBlock).toHaveText('Invalid email or password');
  }
}
