import { test, expect } from '@playwright/test';
import { login } from '../../../helpers/login';
import { learnerUser } from '../../../fixtures/users';

// Login function before each test
test.beforeEach(async ({ page }) => {
  await login(page, learnerUser.email, learnerUser.password);
  await expect(page).toHaveURL(/.*dashboard/);
});

// test('WCAG DragDrop (Single Choice) - Verify multi-drop zone answers', async ({ page }) => {
//   await page.getByRole('link', { name: 'Learning Materials' }).click();
//   await page.getByText('Module 1000 (WCAG 2.1)', { exact: true }).click();
//   await page.getByRole('heading', { name: 'Categories' }).click();
//   await page.getByRole('link', { name: "Activities" }).click();

//   await expect(page).toHaveURL('https://wcag-portal-wcagmod.azurewebsites.net/categories/activity');

//   const dragDropCard = page.locator('h2:has-text("DragDrop (Single Answer) (Text + Audio)")').locator('..').locator('a[aria-label^="Start"]');
//   await dragDropCard.click();

//   // Start Activity (2nd time)
//   await page.locator('button:has-text("Start from the Beginning")').click();
//   await page.locator('button:has-text("Continue")').click();

//   // Start Activity
//   // await page.locator('button:has-text("Start")').click();
//   // await page.locator('button:has-text("Continue")').click();

//   // Question 1 - Q1:A
//   await page.locator('div.item-wrapper', { hasText: 'Q1:A' }).click();
//   await page.locator('#dropTargetList .drop-zone__item').first().click();
//   await page.locator('button:has-text("Check")').click();
//   await page.locator('button:has-text("Next")').click();

//   // Question 2 - Q2:A y Q2:B
//   await page.locator('div.item-wrapper', { hasText: 'Q2:A' }).click();
//   await page.locator('#dropTargetList .drop-zone__item').nth(0).click();
//   await page.locator('div.item-wrapper', { hasText: 'Q2:B' }).click();
//   await page.locator('#dropTargetList .drop-zone__item').nth(1).click();
//   await page.locator('button:has-text("Check")').click();
//   await page.locator('button:has-text("Next")').click();

//   // Question 3 - Q3:A, Q3:B, Q3:C
//   await page.locator('div.item-wrapper', { hasText: 'Q3:A' }).click();
//   await page.locator('#dropTargetList .drop-zone__item').nth(0).click();
//   await page.locator('div.item-wrapper', { hasText: 'Q3:B' }).click();
//   await page.locator('#dropTargetList .drop-zone__item').nth(1).click();
//   await page.locator('div.item-wrapper', { hasText: 'Q3:C' }).click();
//   await page.locator('#dropTargetList .drop-zone__item').nth(2).click();
//   await page.locator('button:has-text("Check")').click();
//   await page.locator('button:has-text("Next")').click();

//   // Question 4 - Q4:A, Q4:B, Q4:C, Q4:D
//   await page.locator('div.item-wrapper', { hasText: 'Q4:A' }).click();
//   await page.locator('#dropTargetList .drop-zone__item').nth(0).click();
//   await page.locator('div.item-wrapper', { hasText: 'Q4:B' }).click();
//   await page.locator('#dropTargetList .drop-zone__item').nth(1).click();
//   await page.locator('div.item-wrapper', { hasText: 'Q4:C' }).click();
//   await page.locator('#dropTargetList .drop-zone__item').nth(2).click();
//   await page.locator('div.item-wrapper', { hasText: 'Q4:D' }).click();
//   await page.locator('#dropTargetList .drop-zone__item').nth(3).click();
//   await page.locator('button:has-text("Check")').click();
//   await page.locator('button:has-text("Next")').click();

//   // Question 5 - Q5:A, B, C, D, E
//   await page.locator('div.item-wrapper', { hasText: 'Q5:A' }).click();
//   await page.locator('#dropTargetList .drop-zone__item').nth(0).click();
//   await page.locator('div.item-wrapper', { hasText: 'Q5:B' }).click();
//   await page.locator('#dropTargetList .drop-zone__item').nth(1).click();
//   await page.locator('div.item-wrapper', { hasText: 'Q5:C' }).click();
//   await page.locator('#dropTargetList .drop-zone__item').nth(2).click();
//   await page.locator('div.item-wrapper', { hasText: 'Q5:D' }).click();
//   await page.locator('#dropTargetList .drop-zone__item').nth(3).click();
//   await page.locator('div.item-wrapper', { hasText: 'Q5:E' }).click();
//   await page.locator('#dropTargetList .drop-zone__item').nth(4).click();
//   await page.locator('button:has-text("Check")').click();
//   await page.locator('button:has-text("Next")').click();

//   // Question 6 - Q6:A
//   await page.locator('div.item-wrapper', { hasText: 'Q6:A' }).click();
//   await page.locator('#dropTargetList .drop-zone__item').nth(0).click();
//   await page.locator('button:has-text("Check")').click();
//   await page.locator('button:has-text("Next")').click();

//   // Question 7 - Q7:A, Q7:B
//   await page.locator('div.item-wrapper', { hasText: 'Q7:A' }).click();
//   await page.locator('#dropTargetList .drop-zone__item').nth(0).click();
//   await page.locator('div.item-wrapper', { hasText: 'Q7:B' }).click();
//   await page.locator('#dropTargetList .drop-zone__item').nth(1).click();
//   await page.locator('button:has-text("Check")').click();
//   await page.locator('button:has-text("Next")').click();

//   // Question 8 - Q8:A, B, C
//   await page.locator('div.item-wrapper', { hasText: 'Q8:A' }).click();
//   await page.locator('#dropTargetList .drop-zone__item').nth(0).click();
//   await page.locator('div.item-wrapper', { hasText: 'Q8:B' }).click();
//   await page.locator('#dropTargetList .drop-zone__item').nth(1).click();
//   await page.locator('div.item-wrapper', { hasText: 'Q8:C' }).click();
//   await page.locator('#dropTargetList .drop-zone__item').nth(2).click();
//   await page.locator('button:has-text("Check")').click();
//   await page.locator('button:has-text("Next")').click();

//   // Question 9 - Q9:A, B, C, D
//   await page.locator('div.item-wrapper', { hasText: 'Q9:A' }).click();
//   await page.locator('#dropTargetList .drop-zone__item').nth(0).click();
//   await page.locator('div.item-wrapper', { hasText: 'Q9:B' }).click();
//   await page.locator('#dropTargetList .drop-zone__item').nth(1).click();
//   await page.locator('div.item-wrapper', { hasText: 'Q9:C' }).click();
//   await page.locator('#dropTargetList .drop-zone__item').nth(2).click();
//   await page.locator('div.item-wrapper', { hasText: 'Q9:D' }).click();
//   await page.locator('#dropTargetList .drop-zone__item').nth(3).click();
//   await page.locator('button:has-text("Check")').click();
//   await page.locator('button:has-text("Next")').click();

//   // Question 10 - Q10:A, B, C, D, E
//   await page.locator('div.item-wrapper', { hasText: 'Q10:A' }).click();
//   await page.locator('#dropTargetList .drop-zone__item').nth(0).click();
//   await page.locator('div.item-wrapper', { hasText: 'Q10:B' }).click();
//   await page.locator('#dropTargetList .drop-zone__item').nth(1).click();
//   await page.locator('div.item-wrapper', { hasText: 'Q10:C' }).click();
//   await page.locator('#dropTargetList .drop-zone__item').nth(2).click();
//   await page.locator('div.item-wrapper', { hasText: 'Q10:D' }).click();
//   await page.locator('#dropTargetList .drop-zone__item').nth(3).click();
//   await page.locator('div.item-wrapper', { hasText: 'Q10:E' }).click();
//   await page.locator('#dropTargetList .drop-zone__item').nth(4).click();
//   await page.locator('button:has-text("Check")').click();
//   await page.locator('a:has-text("My Score")').click();

//   await expect(page).toHaveURL('https://wcag-portal-wcagmod.azurewebsites.net/categories/activity/2000050010015/score');

//   await page.waitForLoadState('load');

//   await page.waitForTimeout(2000);
// });

// Description Page
test('@text It displays button Start on the description page.', async ({ page }) => {
  await page.getByRole('link', { name: 'Learning Materials' }).click();
  await page.getByText('Module 1000 (WCAG 2.1)', { exact: true }).click();
  await page.getByRole('heading', { name: 'Categories' }).click();
  await page.getByRole('link', { name: "Activities" }).click();

  await expect(page).toHaveURL('https://wcag-portal-wcagmod.azurewebsites.net/categories/activity');

  const dragDropCard = page.locator('h2:has-text("DragDrop (Single Answer) (Text Only)")').locator('..').locator('a[aria-label^="Start"]');
  await dragDropCard.click();

  await expect(page.locator('button:has-text("Start")')).toBeVisible();
});

// test('@audio Verify that an audio caption is viewable when an audio is present', async ({ page }) => {

// });

// test('@video Verify that you can watch video on Questions Page', async ({ page }) => {

// });

// test('@video Verify that a video captions are viewable when a video is present', async ({ page }) => {

// });

// test('@image Verify that you can view an image on Questions Page', async ({ page }) => {

// });

// test('@image Verify that an image caption is viewable when an image is present', async ({ page }) => {

// });

// test('@translate Verify that clicking “Translate” on Description Page toggles language between language of instruction (English for ESL / French for FSL) and selected “I Speak” language', async ({ page }) => {

// });

// test('@navigation Verify that you can open the Settings Menu from this page', async ({ page }) => {

// });

// test('@navigation Verify that the breadcrumb appears correctly', async ({ page }) => {

// });

// test('@scoring If this is the user’s first attempt and no questions have been answered: It displays button Start on the description page.', async ({ page }) => {

// });

// test('@scoring If at least one question has been answered in a previous attempt but the activity is incomplete: It displays button Start from the Beginning on the description page. It displays button Resume on the description page.', async ({ page }) => {

// });

// test('@scoring Verify that If all questions have been submitted in the previous attempt: Display button Start from the Beginning on the description page. Display button Review (replaces Resume) on the description page allowing you to view previous answers input in the activity.', async ({ page }) => {

// });

// Instructions Page