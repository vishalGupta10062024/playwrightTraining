const {test, expect } = require('@playwright/test');

test('MultipleElement', async ({page}) => {

    await page.goto('https://www.demoblaze.com/')

    // const links = await page.$$('a');

    // for(const link of links){
    //     const linktext = await link.textContent();
    //     console.log("Link text: ", linktext)
    // }

    await page.waitForSelector("//div[@id='tbodyid']//div//h4//a");

    const products1 = await page.$$("//div[@id='tbodyid']//div//h4//a");
    console.log(products1);

    for(const product of products1){
        const productName = await product.textContent();
        console.log("Name",productName);
    }
});
