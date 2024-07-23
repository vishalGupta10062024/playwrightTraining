import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('about:blank');
  await page.goto('chrome-error://chromewebdata/');
  await page.goto('https://www.amazon.com/');
  await page.getByPlaceholder('Search Amazon').click();
  await page.getByPlaceholder('Search Amazon').fill('ipad');
  await page.getByLabel('ipad 10th generation', { exact: true }).click();
  await page.getByRole('heading', { name: 'iPad (10th Generation): with' }).click();
  await page.getByRole('button', { name: 'Submit' }).first().click();
  await page.getByRole('link', { name: 'iPad (10th Generation): with A14 Bionic chip, 10.9-inch Liquid Retina Display, 256GB, Wi-Fi 6, 12MP front/12MP Back Camera, Touch ID, All-Day Battery Life – Silver', exact: true }).click();
  await page.getByRole('button', { name: 'WiFi + Cellular' }).click();
  await page.getByRole('button', { name: 'WiFi', exact: true }).click();
});