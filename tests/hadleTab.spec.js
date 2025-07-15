import{test,expect}from'@playwright/test'
test('page_navigation',async({page})=>{
    await page.goto('https://www.cricbuzz.com/')
    console.log(await page.title());
    await page.waitForTimeout(3000)

    await page.goto('https://practicetestautomation.com/')
    console.log(await page.title());
    await page.waitForTimeout(3000)
    
    await page.goBack();
    await page.waitForTimeout(3000)

    await page.goForward();
    await page.waitForTimeout(3000)

        
})