const {test, expect } = require('@playwright/test');

//documentation
//https://playwright.dev/docs/trace-viewer-intro

test("Tracing", async ({page}) => {
    await page.goto("https://www.demoblaze.com/")
    // log in

    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("pavanol");
    await page.locator("#loginpassword").fill("test@123");
    await page.locator("//*[@onclick='logIn()']").click();
    


     // click on product
     await page.waitForTimeout(5000)
     await page.locator('//*[contains(text(),"Samsung galaxy s6")]').click()

    // add to cart
    await page.waitForSelector('[class="btn btn-success btn-lg"]')
    await page.locator('[class="btn btn-success btn-lg"]').click()

    // handle pop alert
    await page.on('dialog', async dialog => {
        await expect(dialog.message('Product added.')).toContain("Product added.")
        await dialog.accept();

    

    })
   // await new Promise(() => {});

    

})