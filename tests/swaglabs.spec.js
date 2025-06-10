import { test, expect } from '@playwright/test';
test("Login with valid credentials" , async ({ page }) => {
await page.goto("https://www.saucedemo.com/v1/")
await page.locator("input[name='user-name']").fill("standard_user")
await page.locator("input[name='password']").fill("secret_sauce")
await page.locator("input[value='LOGIN']").click("login")
await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html')
})

test("Login with valid username invalid password" , async ({ page }) => {
await page.goto("https://www.saucedemo.com/v1/")
await page.locator("input[name='user-name']").fill("standard_user")
await page.locator("input[name='password']").fill("fdhgefaislh")
await page.locator("input[value='LOGIN']").click("login")
await expect(page.locator("h3[data-test='error']")).toBeVisible()
})


test("Login with invalid username valid password" , async ({ page }) => {
await page.goto("https://www.saucedemo.com/v1/")
await page.locator("input[name='user-name']").fill("jhbjlih")
await page.locator("input[name='password']").fill("secret_sauce")
await page.locator("input[value='LOGIN']").click("login")
await expect(page.locator("h3[data-test='error']")).toBeVisible()
})

test("Login with invalid username invalid password" , async ({ page }) => {
await page.goto("https://www.saucedemo.com/v1/")
await page.locator("input[name='user-name']").fill("jhbjlih")
await page.locator("input[name='password']").fill("fgfhj.k.g")
await page.locator("input[value='LOGIN']").click("login")
await expect(page.locator("h3[data-test='error']")).toBeVisible()
})