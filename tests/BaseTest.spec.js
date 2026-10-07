import{test} from '@playwright/test';
import BaseTest from "../page/BaseTest";
test.describe("Google", ()=>{
test("NavigatetoBaseURL", async({page})=>{
const BaseURL = new BaseTest(page);
await BaseURL.NavigatetoURL();
await page.waitForTimeout(5000);

});    
}) 