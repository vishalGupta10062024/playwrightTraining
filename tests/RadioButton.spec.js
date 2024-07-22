const {test, expect } = require('@playwright/test');

test("Handle InputBox", async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Radio Button
    const male = await page.locator('#male');
    const female = await page.locator('#female');
    await male.check()
    // await page.check("#male");

    // verification
    await expect(male).toBeChecked();
   await expect(male.isChecked()).toBeTruthy(); //male

    await expect(await page.locator("#female").isChecked()).toBeFalsy();  // female isnot selected


})