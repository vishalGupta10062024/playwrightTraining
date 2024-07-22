const {test, expect } = require('@playwright/test');

test("Upload Single files", async ({page}) => {
    //
    await page.goto("https://demo.automationtesting.in/FileUpload.html")
   // await page.waitForTimeout(8000)


    await page.locator('[id="input-4"]').setInputFiles("tests\\UploadFile\\dummy.pdf")
    await page.waitForTimeout(8000)


})

test.only("Upload multiple files", async ({page}) => {
    //
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
   // await page.waitForTimeout(8000)


    await page.locator('#filesToUpload').setInputFiles(["tests\\UploadFile\\dummy.pdf", "tests\\UploadFile\\demmy.jpg"])
    await page.waitForTimeout(5000)

    // assertions
    await expect(await page.locator("//*[@id='fileList']//li[1]")).toHaveText("dummy.pdf")
    await expect(await page.locator("//*[@id='fileList']//li[2]")).toHaveText("demmy.jpg")

    //remove uploaded files
    await page.locator('#filesToUpload').setInputFiles([])
    await page.waitForTimeout(5000)
    await expect(await page.locator("//*[@id='fileList']//li")).toHaveText("No Files Selected")

    await page.waitForTimeout(5000)
    

})