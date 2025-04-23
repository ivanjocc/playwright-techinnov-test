import { test, expect } from '@playwright/test';
import { login } from '../../../helpers/login';
import { learnerUser } from '../../../fixtures/users';

test('Learner can navigate to What’s New section through the sidebar', async ({ page }) => {
  await login(page, learnerUser.email, learnerUser.password);

  await expect(page).toHaveURL(/.*dashboard/);

  await page.getByRole('link', { name: 'Learning Materials' }).click();

  await page.getByText('Module 1000 (WCAG 2.1)', { exact: true }).click();

  await page.getByRole('heading', { name: 'Categories' }).click();

  await page.getByRole('link', { name: "What's New" }).click();

  await expect(page).toHaveURL('https://wcag-portal-wcagmod.azurewebsites.net/categories/whats-new');

  await expect(page.getByRole('heading', { name: "What's New" })).toBeVisible();

  // request load page
  await page.waitForLoadState('load');

  await page.waitForTimeout(2000);

  // await page.screenshot({ path: 'whats-new-screenshot.png' });
});