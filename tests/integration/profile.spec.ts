import { shopTest } from '../../fixtures';
import type { AddressData } from '../../models/user';

const addressData: AddressData = {
  address: '123 Main St',
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
    // console.dir(newUser);
    await profile.open();
    await profile.expectLoaded();
    await profile.updateAddressInfo(addressData);
    await profile.expectSuccessUdateMessage();
  }
);
