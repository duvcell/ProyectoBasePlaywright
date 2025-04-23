import { test, expect } from '@playwright/test';

test('Login success', async ({ page }) => {
  await page.goto('/');

  await page.getByPlaceholder('username').fill('Admin');

  await page.getByPlaceholder('password').fill('admin123');

  await page.locator("//button[text()=' Login ']").click();

  // Expect a title "to contain" a substring.
  expect(page.getByText('manda user')).toBeVisible;

  //page.close();
});