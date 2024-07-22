import { test, expect } from '@playwright/test';

// command - npx playwright codegen

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.getByPlaceholder('Search Amazon').click();
  await page.getByPlaceholder('Search Amazon').fill('Iphone');
  await page.getByLabel('iphone 13', { exact: true }).click();
  await page.getByRole('heading', { name: 'Apple iPhone 13, 512GB, Green' }).getByRole('link').click();
  await page.goto('https://www.amazon.com/Apple-iPhone-13-512GB-Green/dp/B0B5FDB92L/ref=sr_1_1?crid=1UBFU0V9YYB2X&dib=eyJ2IjoiMSJ9.TC2tikLk3ldZbAksryoXAl5Ao7H0LLIOciVzxi5l3m5PJ4xX6OjCHmmA3K3z6LE_kfu6n1u2fI9VCnTOOBVfSeOwzvLA10hOjA_pMQbNMJqG8q5E4KsSiklJDWCZZPmJ7qc1MlMjQQazCdSCdfouA1QLQxmSBSEgwlTiUtzn9bqGtrxYjd3Ys4PHwwqWW1hbO9Kvjs4ITr10U0DOC-xKIt4u6bmATZTPoJvcaWuWpLI.Uk9Hu1ie9fZm0jKpuFfAZt159-3zw_zlVYRXXv5KadQ&dib_tag=se&keywords=iphone%2B13&qid=1720760611&sprefix=Iphone%2Caps%2C809&sr=8-1&th=1');
});