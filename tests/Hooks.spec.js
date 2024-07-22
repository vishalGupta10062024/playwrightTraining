const {test, expect } = require('@playwright/test');

test("Test 1", async ({page}) => {
    //
    await page.goto("https://www.demoblaze.com/")
    // log in

    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("pavanol");
    await page.locator("#loginpassword").fill("test@123");
    await page.locator("//*[@onclick='logIn()']").click(); 


    //test- check all displayed pruduct name and number
    await page.waitForSelector(".hrefch")
    const productElements = await page.$$(".hrefch")

    await expect(productElements).toHaveLength(9)

    for( const element of productElements){
        let text = element.textContent()
        console.log(text);
    }

    //logout
    await page.locator("#logout2").click();

})

test("Test 2", async ({page}) => {
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
    

})