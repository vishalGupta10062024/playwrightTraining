const {test, expect, chromium } = require('@playwright/test');

test("Handle Pages/Windows", async () => {
     const browser = await chromium.launch()
     const context = await browser.newContext()

     const page1 = await context.newPage()
     const page2 = await context.newPage()

     const allPages = await context.pages()

     console.log("Number of Pages Created: ", allPages.length);

     await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
     await expect(page1).toHaveTitle("OrangeHRM")

     await page2.goto("https://www.orangehrm.com/");
     await expect(page2).toHaveTitle("Human Resources Management Software | OrangeHRM")

})


test.only("Handle Multiple Pages/Windows", async () => {
    const browser = await chromium.launch()
    const context = await browser.newContext()

    const page1 = await context.newPage()
   // const page2 = await context.newPage()

    const allPages = await context.pages()

    console.log("Number of Pages Created: ", allPages.length);

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    await page1.waitForTimeout(5000)
    await expect(page1).toHaveTitle("OrangeHRM")

    const pagePromise = context.waitForEvent('page');
    await page1.locator('//*[@xpath="1"]/parent::div//a').click();
    const newPage = await pagePromise;
    await expect(newPage).toHaveTitle("Human Resources Management Software | OrangeHRM")

    await page1.waitForTimeout(5000)
    await newPage.waitForTimeout(5000)

    // page --> popup

})