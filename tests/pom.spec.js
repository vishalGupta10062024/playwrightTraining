const {test, expect } = require('@playwright/test');
const { LoginPage } = require('../Pages/LoginPage');
import { HomePage } from '../Pages/HomePage';
import { CartPage } from '../Pages/CartPage';
 

test("1", async ({page}) =>{

    // Login page
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('pavanol', 'test@123')

    await page.waitForTimeout(5000)

    // Home
    const home = new HomePage(page)
    await home.addProductToCart("Nexus 6")
    await page.waitForTimeout(5000)
    await home.gotoCart();

    //Cart
    const cart = new CartPage()
    await page.waitForTimeout(5000)
    const status = await cart.chechProductInCart1("Nexus 6")

    await expect(status).toBe(true);

})