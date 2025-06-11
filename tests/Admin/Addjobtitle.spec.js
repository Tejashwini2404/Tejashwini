import { test, expect } from '@playwright/test';

test("Add job title" , async ({ page }) => {

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.locator("input[name='username']").fill("Admin")
await page.locator("input[type='password']").fill("admin123")
await page.locator("button[type='submit']").click()
await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
await page.locator("(//span[contains(@class,'oxd-text oxd-text--span')])[1]").click()
await page.locator("(//span[@class='oxd-topbar-body-nav-tab-item'])[2]").click()
await page.locator("(//a[@class='oxd-topbar-body-nav-tab-link'])[1]").click()
await page.locator("//i[contains(@class,'oxd-icon bi-plus')]").click()
await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("Automation")
await page.locator("(//button[contains(@class,'oxd-button oxd-button--medium')])[2]").click()
//await page.locator("//div[normalize-space(text())='Automation']").click()
})