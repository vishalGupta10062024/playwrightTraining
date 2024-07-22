const {test, expect } = require('@playwright/test');

let page;
test.beforeEach(async ({browser})=>{
    page = await browser.newPage();
    await page.goto("https://www.demoblaze.com/")
    // log in

    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("pavanol");
    await page.locator("#loginpassword").fill("test@123");
    await page.locator("//*[@onclick='logIn()']").click();

})

test.afterEach(async()=>{
    //logout
    await page.locator("#logout2").click();

})
test("Test 1", async () => {
    //test- check all displayed pruduct name and number
    await page.waitForSelector(".hrefch")
    const productElements = await page.$$(".hrefch")
    await expect(productElements).toHaveLength(9)
    for( const element of productElements){
         let text = element.textContent()        
        
    }    

})

test("Test 2", async () => {

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
    

})