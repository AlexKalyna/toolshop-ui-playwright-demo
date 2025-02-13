import { expect } from '@playwright/test';
import { step } from '../../../misc/reporters/step';
import { AppPage } from '../../abstractClasses';
import { AddressData } from '../../../models/user';

export class Profile extends AppPage {
  public pagePath = '/account/profile';
  private readonly pageTitle = this.page.getByRole('heading', { name: 'Profile' });
  private readonly firstNameInput = this.page.getByRole('textbox', { name: 'First Name' });
  private readonly lastNameInput = this.page.getByRole('textbox', { name: 'Last Name' });
  private readonly emailInput = this.page.getByRole('textbox', { name: 'Email address' });
  private readonly phoneInput = this.page.getByRole('textbox', { name: 'Phone' });
  private readonly addressInput = this.page.getByRole('textbox', { name: 'Address', exact: true });
  private readonly postcodeInput = this.page.getByRole('textbox', { name: 'Postcode' });
  private readonly cityInput = this.page.getByRole('textbox', { name: 'City' });
  private readonly stateInput = this.page.getByRole('textbox', { name: 'State' });
  private readonly countryInput = this.page.getByRole('textbox', { name: 'Country' });
  private readonly updateProfileButton = this.page.getByRole('button', { name: 'Update Profile' });
  private readonly successAlert = this.page.locator('div.alert.alert-success');

  @step()
  async expectLoaded() {
    await this.page.waitForURL(this.pagePath);
    await expect(this.pageTitle).toBeVisible();
  }

  @step()
  async fillAddress(address: string) {
    await this.addressInput.fill(address);
  }

  @step()
  async fillPostcode(postcode: string) {
    await this.postcodeInput.fill(postcode);
  }

  @step()
  async fillCity(city: string) {
    await this.cityInput.fill(city);
  }

  @step()
  async fillState(state: string) {
    await this.stateInput.fill(state);
  }

  @step()
  async fillCountry(country: string) {
    await this.countryInput.fill(country);
  }

  @step()
  async clickUpdateProfileButton() {
    await this.updateProfileButton.click();
  }

  @step()
  async updateAddressInfo(addressData: AddressData) {
    await this.fillAddress(addressData.address);
    await this.fillPostcode(addressData.postcode);
    await this.fillCity(addressData.city);
    await this.fillState(addressData.state);
    await this.fillCountry(addressData.country);
    await this.clickUpdateProfileButton();
  }

  @step()
  async expectSuccessUdateMessage() {
    await expect(this.successAlert).toHaveText('Your profile is successfully updated!');
  }
}
