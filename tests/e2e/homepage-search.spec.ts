import { test, expect } from '@playwright/test';

test.describe('Homepage Search', () => {
  test('it should navigate to search page when searching', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('hero-section-search-input').fill('playwright');
    await page.getByTestId('hero-section-submit-button').click();

    await expect(page).toHaveTitle('Search');
    await expect(page).toHaveURL('/search?q=playwright');
  });

  test('it should show empty search page if query does not match anything', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('hero-section-search-input').fill('no group matches this sad search query');
    await page.getByTestId('hero-section-submit-button').click();

    await expect(page.getByTestId('no-results-text')).toHaveText('No events found. Please, try another keywords.');
  });
});
