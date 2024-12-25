import {test,expect} from "@playwright/test"
test("les locators",async({page})=>{
    await page.goto("https://www.facebook.com")
    await page.waitForTimeout(2000)    
})