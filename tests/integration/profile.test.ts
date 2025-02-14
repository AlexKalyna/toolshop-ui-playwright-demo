import { shopTest } from '../../fixtures';
import type { AddressData } from '../../models/user';

const addressData: AddressData = {
  street: '123 Main St',
  postcode: '12345',
  city: 'New York',
  state: 'NY',
  country: 'USA'
};

shopTest(
  'Customer can update adress information in profile',
  {
    tag: ['@smoke', '@e2e', '@C261428']
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async ({ app: { profile }, newUser }) => {
    await profile.open();
    await profile.fillStreet(addressData.street);
    await profile.fillPostcode(addressData.postcode);
    await profile.fillCity(addressData.city);
    await profile.fillState(addressData.state);
    await profile.fillCountry(addressData.country);
    await profile.clickUpdateProfileButton();
    // await profile.updateAddressInfo(addressData);
    await profile.expectSuccessUdateMessage();
  }
);
