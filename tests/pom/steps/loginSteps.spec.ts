import { test, expect } from '@playwright/test';
const LoginPage = require('../pages/LoginPage')
const loginPage = new LoginPage();

const DashboardPage = require('../pages/DashboardPage')
const dashboardPage = new DashboardPage();

const userName = "Admin";
const password = "admin123";

test('Login POM success', async ({ page}) => {

  //Open de main page
  await page.goto('/');

  //fill the form login
  await loginPage.fillLoginCredentials(page, userName, password);
  
  // Expect a title "to contain" a substring.
  await dashboardPage.checkTitleDashboard(page);

  // page.close();
});