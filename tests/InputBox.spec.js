const {test, expect } = require('@playwright/test');

test("Handle InputBox", async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Input Box

    const nameField = await page.locator("#name");

    await expect(nameField).toBeVisible();
    await expect(nameField).toBeEditable();
    await expect(nameField).toBeEnabled();
    await expect(nameField).toBeEmpty();

    await nameField.fill("Vishal");

    await page.waitForTimeout(5000) // pausing code


    


})