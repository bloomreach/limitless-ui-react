import { test, expect } from '@playwright/test';

test.describe('Tag', () => {
  test.describe('Base', () => {
    const storyId = 'components-tag-qa--basic';

    test('should render successfully', async ({ page }) => {
      await page.goto(`/iframe.html?path=/story/${storyId}`);

      await expect(page.locator('.qa-story')).toHaveScreenshot();
    });
  });
});
