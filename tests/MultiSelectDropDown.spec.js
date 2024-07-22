const {test, expect } = require('@playwright/test');

test("Handle CheckBoxes", async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Select multi value from dropdown
    await page.selectOption('#colors',["Red", "Blue", "Green"])


    //  Assertion

    //1. check number of option in dropdown
    const colors = await page.locator('#colors option')
    await expect(colors).toHaveCount(5)

    //2. check number of options in dropdown using JS Array
    const colorsList = await page.$$('#colors option')
    console.log("Number of colors present:", colorsList.length);
    await expect(colorsList.length).toBe(5)


    // check presence of value in dropdown
    const content = await page.locator('#colors').textContent()
    await expect(content.includes("Red")).toBeTruthy();
    await expect(content.includes("Black")).toBeFalsy()

    await page.waitForTimeout(5000)

})