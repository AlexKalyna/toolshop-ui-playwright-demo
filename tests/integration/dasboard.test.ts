import { shopTest } from '../../fixtures';

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
