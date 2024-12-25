import {test,expect} from "@playwright/test"
test("test",async({page})=>{
    await page.goto("https://www.facebook.com")
    await page.waitForTimeout(2000)    
})
test("test 2",async({page})=>{
    await page.goto("https://www.google.fr")
    await page.waitForTimeout(2000)    
})