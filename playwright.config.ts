import { defineConfig, devices } from '@playwright/test';

const PORT = process.env.PORT ? +process.env.PORT : 5678;

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './src',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? '50%' : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html', { open: 'never' }]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: `http://127.0.0.1:${PORT}`,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
     /* Take a screenshot when a test fails. */
     screenshot: 'only-on-failure',
  },

  expect: {
    toHaveScreenshot: {
      /* Allow 0.05% difference in pixels for a screenshot to be valid */
      maxDiffPixelRatio: 0.05,
      /* Allow only 10% of color difference for visual tests because
      the component border colors have a really small difference */
      threshold: 0.1,
    },
  },

  testMatch: '**/?(*.)+(test).ts?(x)',

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'edge',
      use: { ...devices['Desktop Edge'] },
    },
  ],

  /* Run your local server before starting the tests */
  webServer: {
    command: `pnpm dlx servor storybook-static index.html ${PORT}`,
    port: PORT,
    reuseExistingServer: !process.env.CI,
  },
});

