import { test, expect } from '@playwright/test';
//import data from "../package-lock.json"
test("Login with valid credentials" , async ({ page }) => {
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.locator("input[name='username']").fill("Admin")
await page.locator("input[type='password']").fill("admin123")
await page.locator("button[type='submit']").click("login")
await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
await page.locator("(//span[contains(@class,'oxd-text oxd-text--span')])[1]").click("Admin")
await page.locator("(//span[@class='oxd-topbar-body-nav-tab-item'])[2]").click("job")
await page.locator("//a[normalize-space(text())='Job Titles']").click("job title")
await page.locator("//i[contains(@class,'oxd-icon bi-plus')]").click("Add")
await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("add job title")
await page.locator("(//button[contains(@class,'oxd-button oxd-button--medium')])[2]").click("save")

})


