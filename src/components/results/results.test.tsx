import { test, expect } from '@playwright/test';

test.describe('Results', () => {
  test.describe('Base', () => {
    const storyId = 'components-results-qa--basic';

    test('should render successfully', async ({ page }) => {
      await page.goto(`/iframe.html?path=/story/${storyId}`);

      await expect(page.locator('.qa-story')).toHaveScreenshot();
    });
  });
});
