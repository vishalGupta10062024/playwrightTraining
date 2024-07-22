/**
 * 
 *
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

 * 
 */

const {test, expect } = require('@playwright/test');

test('Build_In_Locators', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    const logo = await page.getByAltText('company-branding');
    await expect(logo).toBeVisible()

    //page.getByPlaceholder()
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('password').fill('admin123')

    //page.getByRole()
    await page.getByRole('button', {type:'submit'}).click();


    // page.getByText()

    const name = await page.locator('.oxd-userdropdown-name').textContent();

    await expect(await page.getByText(name)).toBeVisible()
})