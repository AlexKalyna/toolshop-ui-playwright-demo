import { test as setup, expect } from "@playwright/test";
import { Path as path } from "../utils/path";

async function createAuth(page, context, email, password, authFile, expectedNavText) {
  if (!email || !password) {
    throw new Error("Email or password is not set in environment variables.");
  }

  const loginUrl = "auth/login";
  const emailSelector = "email";
  const passwordSelector = "password";
  const loginButtonSelector = "login-submit";
  const navMenuSelector = "nav-menu";

  await page.goto(loginUrl);
  await page.getByTestId(emailSelector).click();
  await page.getByTestId(emailSelector).fill(email);
  await page.getByTestId(passwordSelector).fill(password);
  await page.getByTestId(loginButtonSelector).click();

  await expect(page.getByTestId(navMenuSelector)).toContainText(expectedNavText);
  await context.storageState({ path: authFile });
}

setup("Create admin auth", async ({ page, context }) => {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;
  const adminAuthFile = path.PathToAdminAuth;
  const expectedNavText = process.env.ADMIN_USERNAME;

  await createAuth(page, context, adminEmail, adminPassword, adminAuthFile, expectedNavText);
});

setup("Create customer auth", async ({ page, context }) => {
  const customerEmail = process.env.CUSTOMER_EMAIL;
  const customerPassword = process.env.CUSTOMER_PASSWORD;
  const customerAuthFile = path.PathToCustomerAuth;
  const expectedNavText = process.env.CUSTOMER_USERNAME;

  await createAuth(page, context, customerEmail, customerPassword, customerAuthFile, expectedNavText);
});