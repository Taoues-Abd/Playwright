import {test ,expect}from "@playwright/test"
test("assertion de la page d'accueil",async({page})=>{
     await page.goto("https://demoblaze.com/index.html")
     await page.waitForTimeout(5000)
     const pageTitle= await page.title()
     console.log("le titre de la page ",pageTitle)
     expect(pageTitle).toBe("STORE")

})
