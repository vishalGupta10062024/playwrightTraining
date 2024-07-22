const {test, expect } = require('@playwright/test');

test("Handle CheckBoxes", async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator("//*[@type='checkbox' and @id='monday']").check();

    //verification
    await expect(await page.locator("//*[@type='checkbox' and @id='monday']")).toBeChecked();
    await expect(await page.locator("//*[@type='checkbox' and @id='monday']").isChecked()).toBeTruthy()
    await expect(await page.locator("//*[@type='checkbox' and @id='sunday']").isChecked()).toBeFalsy()



    // Select Multiple checkBoxes
    const checkBoxLocators = [
        "//*[@type='checkbox' and @id='monday']",
        "//*[@type='checkbox' and @id='sunday']",
        "//*[@type='checkbox' and @id='saturday']"

    ];

    for (const locator of checkBoxLocators){  // select multple check boxes
        await page.locator(locator).check();
    }

    for (const locator of checkBoxLocators){  // unselect multple check boxes which are already selcted
        if(await page.locator(locator).isChecked()){
            await page.locator(locator).uncheck();
        }
        
    }


    await page.waitForTimeout(7000);

})