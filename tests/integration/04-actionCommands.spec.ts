import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.techglobal-training.com/frontend');
  await page.getByRole('link', { name: 'HTML Elements' }).click();
  await page.locator('#company_dropdown2').selectOption('Microsoft');
});