const {test, expect } = require('@playwright/test');
const path = require('path');

test("Table", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/")

    const table = await page.locator('#productTable')

    // total number of rows &col

    const columns = await table.locator('thead tr th')
    console.log("Number of columns:", await columns.count());

    const row = await table.locator('tbody tr')
    console.log("Number of Rows:", await row.count());

    expect(await columns.count()).toBe(4)
    expect(await row.count()).toBe(5)


    // select chcek box of product 4

   /*const machedRow =  row.filter({
        has: page.locator('td'),
        hasText: 'Product 4'
    })

    await machedRow.locator('input').check()

    */

    //3. select multiple product by using re-useble mathod

    await selectProduct(row, page, "Product 1")
    await selectProduct(row, page, "Product 3")
    await selectProduct(row, page, "Product 5")
    await page.waitForTimeout(5000)


    /*
    // print all product details using loop
    for(let i = 0; i<await row.count(); i++){
        const Row = row.nth(i)
        const tds = Row.locator('td')
        for(let j=0; j<await tds.count()-1; j++){
            console.log(await tds.nth(j).textContent());
        }
    }

    */

    // print all data in table handle pagination

    const pages = await page.locator('.pagination li a')
    for(let p = 0; p<await pages.count(); p++){

        //handling pagination
        if(p>0){
           await pages.nth(p).click();
        }

        //reading all the data
        for(let i = 0; i<await row.count(); i++){
            const Row = row.nth(i)
            const tds = Row.locator('td')
            for(let j=0; j<await tds.count()-1; j++){
                console.log(await tds.nth(j).textContent());
            }
        }
        await page.waitForTimeout(3000)
    }
    

    await page.waitForTimeout(3000)

})

async function selectProduct(rows, page, name){
    const machedRow =  rows.filter({
        has: page.locator('td'),
        hasText: name
    })
    await machedRow.locator('input').check()

}