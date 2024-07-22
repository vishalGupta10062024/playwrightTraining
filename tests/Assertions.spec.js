const {test, expect } = require('@playwright/test');

test("Assertions", async ({page}) => {
    //open url
    await page.goto("https://demo.nopcommerce.com/register")

    // expect(page).toHaveURL()

    await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

    //verify title of the page
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    //check element is visible or not

   const logo =  await page.locator('[alt="nopCommerce demo store"]')
    await expect(logo).toBeVisible()

    // check enabled or not
    // expect(locator).toBeEnambeld()
    const serchBox =  await page.locator('[id="small-searchterms"]')
    await expect(serchBox).toBeEnabled()

    // Radio/Checkbox is selected or not
    // expect(locator).tobechecked()

    const maleRadioButton = await page.locator('#gender-male')
    await maleRadioButton.click() //select Rdion button
    await expect(maleRadioButton).toBeChecked()

    //check box
    const newslatterCheckBox = await page.locator("#Newsletter")
    await expect(newslatterCheckBox).toBeChecked()


    // element attribute verify
    const registerButton =   await page.locator('#register-button')
    expect(registerButton).toHaveAttribute('type', 'submit')

    // expect(locator).toHaveText() - Element matches test
    await expect(await page.locator('.page-title h1')).toHaveText('Register')

     // expect(locator).toContainText() - Element matches test
     await expect(await page.locator('.page-title h1')).toContainText('Reg') //partial check

     // expect(locator).toHaveValue() - input has a value
     const mailfield = await page.locator('[name="Email"]')
     await mailfield.fill('test@demo.com')

     await expect(mailfield).toHaveValue('test@demo.com');


     // expect(locator).toHaveCount()  -- List of elements has given length
     const options = await page.locator('[name="DateOfBirthDay"] option')
     await expect(options).toHaveCount(32)







})