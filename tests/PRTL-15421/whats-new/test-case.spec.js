import { test, expect } from '@playwright/test';
import { login } from '../../../helpers/login';
import { learnerUser } from '../../../fixtures/users';

// Login function before each test
test.beforeEach(async ({ page }) => {
  await login(page, learnerUser.email, learnerUser.password);
  await expect(page).toHaveURL(/.*dashboard/);
});

test('Learner can navigate to What’s New section through the sidebar', async ({ page }) => {
  await page.getByRole('link', { name: 'Learning Materials' }).click();
  await page.getByText('Module 1000 (WCAG 2.1)', { exact: true }).click();
  await page.getByRole('heading', { name: 'Categories' }).click();
  await page.getByRole('link', { name: "What's New" }).click();

  await expect(page).toHaveURL('https://wcag-portal-wcagmod.azurewebsites.net/categories/whats-new');
  await expect(page.getByRole('heading', { name: "What's New" })).toBeVisible();

  await page.waitForLoadState('load');

  await page.waitForTimeout(2000);

});

test('Learner can export PDF after starting learning object', async ({ page }) => {
  await page.getByRole('link', { name: 'Learning Materials' }).click();
  await page.getByText('Module 1000 (WCAG 2.1)', { exact: true }).click();
  await page.getByRole('heading', { name: 'Categories' }).click();

  // Go to "What’s New" page
  await page.getByRole('link', { name: "What's New" }).click();
  await expect(page).toHaveURL('https://wcag-portal-wcagmod.azurewebsites.net/categories/whats-new');
  await expect(page.getByRole('heading', { name: "What's New" })).toBeVisible();

  await page.waitForLoadState('load');

  // Click on the first "Start" button
  const firstStartButton = page.locator('a[aria-label="Start Learning Object 1"]');
  await firstStartButton.click();
  await page.waitForLoadState('load');

  // Download 1 - only wait, no save
  const download1 = await Promise.all([
    page.waitForEvent('download'),
    page.locator('button:has-text("Download PDF")').click()
  ]);
  console.log('PDF 1 download triggered.');

  // Go back
  await page.goBack();

  // Click on the second "Start" button
  const secondStartButton = page.locator('a[aria-label="Start Learning Object 2"]');
  await secondStartButton.click();
  await page.waitForLoadState('load');

  // Download 2 - only wait, no save
  const download2 = await Promise.all([
    page.waitForEvent('download'),
    page.locator('button:has-text("Download PDF")').click()
  ]);
  console.log('PDF 2 download triggered.');
});
