import { test, expect } from '@playwright/test';

test.describe('BrSearch', () => {
  test.describe('Base', () => {
    const storyId = 'br-search-qa--basic';

    test('should render successfully', async ({ page }) => {
      await page.goto(`/iframe.html?id=${storyId}`);

      await expect(page.locator('.qa-story')).toHaveScreenshot();
    });
  });
});
