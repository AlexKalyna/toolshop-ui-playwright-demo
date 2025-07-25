import 'dotenv/config';
import { env } from './env';
import { defineConfig, devices } from '@playwright/test';
import process from 'node:process';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  workers: '90%',

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 1 : 0,
  reporter: [['html', { open: 'never' }], ['list', { printSteps: true }], [process.env.CI ? 'blob' : 'html']],

  use: {
    baseURL: env.BASE_URL,
    testIdAttribute: 'data-test',
    trace: 'on-first-retry',
    actionTimeout: 0,
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    headless: process.env.CI ? true : true
  },

  projects: [
    {
      name: 'chromium',
      // dependencies: ['setup'],
      use: { ...devices['Desktop Chrome'], permissions: ['clipboard-read'] }
    },

    {
      name: 'webkit',
      // dependencies: ['setup'],
      use: { ...devices['Desktop Safari'], permissions: ['clipboard-read'] }
    },

    {
      name: 'screenshot-tests',
      testMatch: /.*\.screenshot\.ts/,
      testDir: './tests/screenshot',
      use: { ...devices['Desktop Chrome'], permissions: ['clipboard-read'] }
    }

    //   {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ]

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
