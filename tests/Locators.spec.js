//const {test, expect } = require('@playwright/test');

import {test, expect } from '@playwright/test';

test('Locators',async ({page}) =>{
    await page.goto('https://www.demoblaze.com/')

    // click on user log in
   // await page.locator('id=login2').click();
    await page.click('id=login2')

    // enter username and password
   // await page.locator('#loginusername').fill('pavanol')
    await page.fill('#loginusername', 'pavanol')
   // await page.type('#loginusername', 'pavanol')

   //provide password
   await page.fill('#loginpassword', 'test@123')

   //click on log in button
  await page.click("//button[@onclick='logIn()']")


   // verify login link present
   const logInLink = await page.locator("#login2")

   expect(logInLink).toBeVisible();

   await page.close();
})