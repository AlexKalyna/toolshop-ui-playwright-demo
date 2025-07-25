import { shopTest } from '../../fixtures';
import type { AddressData } from '../../models/user';
import { UserBuilder } from '../../app/builders/UserBuilder';

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
    await profile.updateAddressInfo(addressData);
    await profile.expectSuccessUdateMessage();
  }
);

shopTest(
  'Customer can update profile with builder data (Builder Pattern)',
  {
    tag: ['@builder', '@profile', '@e2e']
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async ({ app, newUser }) => {
    const updatedUserData = new UserBuilder().build();
    await app.profile.open();
    await app.profile.expectLoaded();
    await app.profile.fillFirstName(updatedUserData.first_name);
    await app.profile.fillLastName(updatedUserData.last_name);
    await app.profile.fillPhone(updatedUserData.phone);
    await app.profile.updateAddressInfo({
      street: updatedUserData.address.street,
      postcode: updatedUserData.address.postal_code,
      city: updatedUserData.address.city,
      state: updatedUserData.address.state,
      country: updatedUserData.address.country
    });
    await app.profile.expectSuccessUdateMessage();
  }
);
