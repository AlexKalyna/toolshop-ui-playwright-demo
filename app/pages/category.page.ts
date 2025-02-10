import { expect } from "@playwright/test";
import { step } from "../../misc/reporters/step";
import { AppPage } from "../abstractClasses";

export class Category extends AppPage {

    pagePath = '/category/hand-tools';
    private readonly categoryPageTitle = this.page.getByTestId('page-title');


    @step()
    async expectLoaded() {
        await expect(this.page).toHaveURL(this.pagePath);
        await expect(this.categoryPageTitle).toHaveText(/Category: /);
    }

    @step()
    async selectItem(itemName: string) {
        await this.page.getByText(itemName).click();
    }


}