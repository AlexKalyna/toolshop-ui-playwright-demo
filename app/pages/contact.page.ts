import { expect } from "@playwright/test";
import { step } from "../../misc/reporters/step";
import { AppPage } from "../abstractClasses";

export class Contact extends AppPage {
    public pagePath = '/contact';

    private readonly submitButton = this.page.getByTestId('contact-submit');
    private readonly contactPageTitle = this.page.locator('div.container.auth-container > div > div > h3');

    @step()
    async expectLoaded() {
        await expect(this.page).toHaveURL(this.pagePath);
        await expect(this.contactPageTitle).toHaveText('Contact');
        await expect(this.submitButton).toBeVisible();
    }


}