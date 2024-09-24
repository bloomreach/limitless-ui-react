import { test, expect } from '@playwright/test';

test.describe('ProductCard', () => {
  test.describe('Base', () => {
    const storyId = 'components-productcard-qa--basic';

    test('should render successfully', async ({ page }) => {
      await page.goto(`/iframe.html?path=/story/${storyId}`);

      await expect(page.locator('.qa-story')).toHaveScreenshot();
    });
  });
});
