import { Role } from '../../data/roles';
import { shopTest } from '../../fixtures';

shopTest.describe('Positive scenarios in the Dashboard page for the user with Admin role', () => {
  shopTest(
    'Admin user can navigate to the Dashboard page',
    {
      tag: ['@smoke', '@e2e', '@C261498']
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async ({ app, adminUser }) => {
      await app.dashboard.open();
      await app.dashboard.expectLoaded();
    }
  );

  shopTest(
    'Admin user can see respective Admin options in the dropdown menu',
    {
      tag: ['@smoke', '@e2e', '@C2615018']
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async ({ app, adminUser }) => {
      await app.header.expectDropDownContainsTargetItems(Role.Admin);
    }
  );
});
