const {test, expect } = require('@playwright/test');

test("Page Screenshot", async ({page}) => {
    //
    await page.goto("https://www.demoblaze.com/")
    await page.screenshot({path:"tests\\Screenshots\\"+Date.now()+"HomePage.png" })
   


})

test("Full Page Screenshot", async ({page}) => {
    //
    await page.goto("https://www.demoblaze.com/")
    await page.screenshot({path:"tests\\Screenshots\\"+Date.now()+"FullPage.png" , fullPage:true})
   })
test.only("Element Screenshot", async ({page}) => {
    await page.goto("https://www.demoblaze.com/")
    //page.waitForTimeout(5000)
    await page.locator('//*[@class="col-lg-4 col-md-6 mb-4"][2]/div').screenshot({path:"tests\\Screenshots\\"+Date.now()+"Nokia.png" })
  
})

