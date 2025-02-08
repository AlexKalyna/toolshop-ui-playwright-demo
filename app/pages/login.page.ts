import { step } from "../../misc/reporters/step";
import { expect } from "@playwright/test";
import { AppPage } from "../abstractClasses";

export class Login extends AppPage {
    public pagePath = '/auth/login';
    private readonly loginPageTitle = this.page.locator('div.container.auth-container > div > div > h3');
    private readonly authForm = this.page.locator('.auth-form');

    @step()
    async expectLoaded() {
        await this.page.waitForURL(this.pagePath);
        await expect(this.loginPageTitle).toHaveText('Login');
        await expect(this.authForm).toBeVisible();
    }

}