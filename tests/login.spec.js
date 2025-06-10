import { test, expect } from '@playwright/test';
test("Login with valid credentials" , async ({ page }) => {
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.locator("input[name='username']").fill("Admin")
await page.locator("input[type='password']").fill("admin123")
await page.locator("button[type='submit']").click("login")
await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
})

test("Login with valid userid invalid password" , async ({ page }) => {


await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.locator("input[name='username']").fill("Admin")
await page.locator("input[type='password']").fill("ghkjeut")
await page.locator("button[type='submit']").click("login")
await expect(page.locator("p[text=\'Invalid credentials\']")).toBeVisible()
})
