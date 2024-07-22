import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.getByPlaceholder('Search Amazon').click();
  await page.getByPlaceholder('Search Amazon').fill('Apple');
  await page.getByLabel('apple airpods').click();
  await page.locator('.a-size-medium').first().click();
  await page.getByRole('link', { name: 'AirPods (3rd Generation) Wireless Ear Buds, Bluetooth Headphones, Personalized Spatial Audio, Sweat and Water Resistant, Lightning Charging Case Included, Up to 30 Hours of Battery Life', exact: true }).click();
});

