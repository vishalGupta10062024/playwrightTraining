
const {test, expect } = require('@playwright/test');

test("Hidden Dropdown", async ({page}) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    await page.locator("[name='username']").fill('Admin')
    await page.locator("[name='password']").fill('admin123')
    await page.locator("[type='submit']").click();

    await page.locator("//span[normalize-space()='PIM']").click();

    //clickn on drop down
    await page.locator("//label[text()='Job Title']/parent::div/parent::div//div[@class='oxd-select-text--after']").click();

    // waiting for options
    await page.waitForTimeout(5000);

    const hiddenelement = await page.$$("//div[@role='listbox']//span")

    for(const options of hiddenelement){
        let value = await options.textContent();
        console.log(value);
        if(value.includes("IT Manager")){
            options.click();
            break;
        }
         

         
    }




})