import { test, expect } from '@playwright/test';

test.describe('SearchBox', () => {
  test.describe('Base', () => {
    const storyId = 'search-search-box-qa--basic';

    test('should render successfully', async ({ page }) => {
      await page.goto(`/iframe.html?id=${storyId}`);

      await expect(page.locator('.qa-story')).toHaveScreenshot();
    });
  });
});
