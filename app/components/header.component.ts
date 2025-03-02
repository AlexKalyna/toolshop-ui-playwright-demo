import { expect } from '@playwright/test';
import { step } from '../../misc/reporters/step';
import { Component } from '../abstractClasses';
import { Role } from '../../data/roles';

export class Header extends Component {
  private readonly siteLogo = this.page.locator('.container > .navbar-brand');
  private readonly navItems = this.page.locator('.navbar-nav');
  private readonly languageDropDown = this.page.getByTestId('language');
  private readonly shoppingCartIcon = this.page.getByTestId('nav-cart');
  private readonly contactButton = this.page.getByRole('menubar').getByText('Contact');
  private readonly homeButton = this.page.getByRole('menubar').getByText('Home');
  private readonly signInButton = this.page.locator('.nav-link');
  private readonly userDropDown = this.page.locator('[data-test="nav-menu"]');

  private readonly adminDropDownItems: string[] = [
    'Dashboard',
    'Brands',
    'Categories',
    'Products',
    'Orders',
    'Users',
    'Messages',
    'Settings'
  ];

  private readonly userDropDownItems: string[] = [
    'My account',
    'My favorites',
    'My profile',
    'My invoises',
    'My messages'
  ];

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
  async expectDropDownContainsTargetItems(role: string) {
    await this.userDropDown.click();
    let dropDownItems: string[] = [];
    switch (role) {
      case Role.Admin:
        dropDownItems = this.adminDropDownItems;
        break;
      case Role.Customer:
        dropDownItems = this.userDropDownItems;
        break;
      default:
        throw new Error(`Unsupported role: ${role}`);
    }

    for (const item of dropDownItems) {
      await expect(this.page.getByRole('link', { name: item })).toBeVisible();
    }
  }
}
