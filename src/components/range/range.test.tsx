import { test, expect } from '@playwright/test';

test.describe('Range', () => {
  test.describe('Base', () => {
    const storyId = 'components-range-qa--basic';

    test('should render successfully', async ({ page }) => {
      await page.goto(`/iframe.html?path=/story/${storyId}`);

      await expect(page.locator('.qa-story')).toHaveScreenshot();
    });
  });
});
