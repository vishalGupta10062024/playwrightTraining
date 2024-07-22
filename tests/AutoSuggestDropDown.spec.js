const {test, expect } = require('@playwright/test');

test("Auto Suggest Drop down", async ({page}) => {
   // await page.setViewportSize()

    await page.goto("https://redbus.in/");

    await page.locator("").fill("Delhi");

    //await page.waitForSelector("")

    const suggestionListElement = await page.$$("")
    for(let element of suggestionListElement){
        let value = await element.textContent();
        console.log(value);
        if(value.includes('Anand Vihar')){
            await element.click();
            break;
        }
    }

})