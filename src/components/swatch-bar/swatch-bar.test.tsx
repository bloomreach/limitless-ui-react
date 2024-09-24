import { test, expect } from '@playwright/test';

test.describe('SwatchBar', () => {
  test.describe('Base', () => {
    const storyId = 'components-swatchbar-qa--basic';

    test('should render successfully', async ({ page }) => {
      await page.goto(`/iframe.html?path=/story/${storyId}`);

      await expect(page.locator('.qa-story')).toHaveScreenshot();
    });
  });

  test.describe('Images', () => {
    const storyId = 'components-swatchbar-qa--images';

    test('should render successfully', async ({ page }) => {
      await page.goto(`/iframe.html?path=/story/${storyId}`);

      await expect(page.locator('.qa-story')).toHaveScreenshot();
    });
  });
  test.describe('Text', () => {
    const storyId = 'components-swatchbar-qa--text';

    test('should render successfully', async ({ page }) => {
      await page.goto(`/iframe.html?path=/story/${storyId}`);

      await expect(page.locator('.qa-story')).toHaveScreenshot();
    });
  });
});
