const {test, expect } = require('@playwright/test');

test("Bootstrap Dropdown", async ({page}) => {

    await page.goto("https://jquery-az.com/boots/demo.php?ex=63.0_2");

    await page.waitForTimeout(1000)
    // click on drop down
    await page.locator('[data-toggle="dropdown"]').click();

    //1. verify number of option present
    const option = await page.locator('.multiselect-container.dropdown-menu li input')
    await expect(option).toHaveCount(11)

    //2. verify number of options
    const optionList =await page.$$('.multiselect-container.dropdown-menu li input')
    await expect(optionList.length).toBe(11)

    // 3. select multiple options
    const options = await page.$$('.multiselect-container.dropdown-menu li')
    for(let opt of options){
        console.log("Value", opt);
        let text = await opt.textContent()
        //let text = await opt.innerText()
        if(text.includes('Angular') || text.includes('Java')){
            opt.click()
        }
    }

    //4. de-select for this click again if HTML and CSS already selected
    const optionsList = await page.$$('.multiselect-container.dropdown-menu li')
    for(let opt of optionsList){
        console.log("Value", opt);
        let text = await opt.textContent()
        //let text = await opt.innerText()
        if(text.includes('HTML') || text.includes('CSS')){
            opt.click()
        }
    }


    await page.waitForTimeout(5000)

  //  await expect(page.locator('your css selector")).tobeVisible({timeout: 30000})

 

   


})   // page, browser, context