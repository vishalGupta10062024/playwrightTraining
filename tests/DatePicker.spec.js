const {test, expect } = require('@playwright/test');

test("Date Picker", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    //await page.fill('#datepicker',"07/27/2024");

    const year = "2024"
    const month = "September"
    const date = "29"
    await page.locator('#datepicker').click()

    while(true){
        const currentYear = await page.locator(".ui-datepicker-year").textContent()
        const currentMonth = await page.locator(".ui-datepicker-month").textContent()

        if(currentMonth == month && currentYear == year){
            break;
        }
        await page.locator('[title="Next"]').click()
    }

    // date selection with loop
    /*
    const datesList = await page.$$('[class="ui-state-default"]')
    for(const dat of datesList){
        if(await dat.textContent() == date){
            dat.click()
            break;
        }
    }
    */
   
    // date selection without loop

    await page.locator(`//a[@class="ui-state-default"][text()='${date}']`).click()
    


    await page.waitForTimeout(3000)

})