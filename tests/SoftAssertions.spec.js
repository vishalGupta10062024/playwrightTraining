const {test, expect } = require('@playwright/test');

test("Assertions", async ({page}) => {

    await page.goto("https://demo.nopcommerce.com/register")

    //hard Assertions
//     await expect(page).toHaveURL("https://demo.nopcommerce.com/register46"); 
//     await expect(page).toHaveTitle('nopCommerce demo store. Register') 
//    const logo =  await page.locator('[alt="nopCommerce demo store"]')
//     await expect(logo).toBeVisible()


// Soft Assertions
await expect.soft(page).toHaveURL("https://demo.nopcommerce.com/register46"); 
await expect.soft(page).toHaveTitle('nopCommerce demo store. Register') 
const logo =  await page.locator('[alt="nopCommerce demo store"]')
await expect.soft(logo).toBeVisible()


})