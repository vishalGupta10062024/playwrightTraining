const {test, expect } = require('@playwright/test');

test("Handle dropdown", async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    // select single drop down in multiple way
    // multiple way to select drop down 

    //await page.locator('#country').selectOption({label: 'India'});   // label / visible text
     await page.locator('#country').selectOption('India') ;  // by visible text
    // await page.locator('#country').selectOption({value:"uk"}); // by usin value
    // await page.locator('#country').selectOption({index:1}); // by usin index
    // await page.selectOption("#country", 'India');


    // Assertinons
    //1. check number of option present inside the drop down - approach 1
    // const options = await page.locator('#country option')
    // await expect(options).toHaveCount(10);


    //2. check number of option present inside the drop down - approach 2
    const Options = await page.$$('#country option');
    console.log("Number of options: ", Options.length);
    await expect(Options.length).toBe(10);


    //3. Check the presence of value in drop down - Approach 1
    // const countryDropDown = await page.locator('#country').textContent(); // return the text
    // await expect(countryDropDown.includes('India')).toBeTruthy()


    /*
     //4. Check the presence of value in drop down - Approach 2
     const options1 = await page.$$('#country option')
     let status = false;
     for(const opt of options1){
        console.log("Test", await opt.textContent());
        let optn = await opt.textContent()
        if(opt.includes('India')){
            status = true;
            break;
        }
     }
     await expect(status).toBeTruthy()

     */

     // 5. Selecting options from drop down using loop
     const optionList = await page.$$('#country option');
     for(const opt of optionList){
        let optn = await opt.textContent()
        if(optn.includes('France')){
            await page.selectOption("#country", optn);
            break;
        }
     }



    await page.waitForTimeout(5000)

})