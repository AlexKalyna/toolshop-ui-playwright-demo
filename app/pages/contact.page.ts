import { expect } from '@playwright/test';
import { step } from '../../misc/reporters/step';
import { AppPage } from '../abstractClasses';
import { ContactData } from '../../models/user';

export class Contact extends AppPage {
  public pagePath = '/contact';
  private _filePath = 'data/attachments/allowed-tes-file-0-Kb.txt';

  private readonly submitButton = this.page.getByTestId('contact-submit');
  private readonly contactPageTitle = this.page.locator('div.container.auth-container > div > div > h3');
  private readonly firstNameInput = this.page.getByTestId('first-name');
  private readonly lastNameInput = this.page.getByPlaceholder('Your last name *');
  private readonly emailInput = this.page.getByPlaceholder('Your email *');
  private readonly subjectDropdown = this.page.locator('[data-test="subject"]');
  private readonly messageInput = this.page.getByTestId('message');
  private readonly sendButton = this.page.getByRole('button', { name: 'Send' });
  private readonly fileInputSelector = '[data-test="attachment"]';
  private readonly thanksMessage = this.page.locator('div.alert.alert-success');

  @step()
  async expectLoaded() {
    await expect(this.page).toHaveURL(this.pagePath);
    await expect(this.contactPageTitle).toHaveText('Contact');
    await expect(this.submitButton).toBeVisible();
  }

  @step()
  async fillFirstName(firstName: string) {
    await this.firstNameInput.fill(firstName);
  }

  @step()
  async fillLastName(lastName: string) {
    await this.lastNameInput.fill(lastName);
  }

  @step()
  async fillEmail(email: string) {
    await this.emailInput.fill(email);
  }

  @step()
  async selectSubject(subject: string = 'Return') {
    if (subject) await this.subjectDropdown.selectOption(subject);
  }

  @step()
  async typeMessageText(message: string) {
    await this.messageInput.pressSequentially(message);
  }

  @step()
  async uploadAttachment() {
    await this.page.setInputFiles(this.fileInputSelector, this._filePath);
  }

  @step()
  async clickSendButton() {
    await this.sendButton.click();
  }

  @step()
  async expectThanksMessageIsDisplayed() {
    await expect(this.thanksMessage).toHaveText('Thanks for your message! We will contact you shortly.');
  }

  @step()
  async fillRequiredFields(contactData: ContactData, isLoggedIn: boolean = true) {
    if (!isLoggedIn) {
      await this.fillFirstName(contactData.firstName ?? '');
      await this.fillLastName(contactData.lastName ?? '');
      await this.fillEmail(contactData.email ?? '');
    }
    await this.selectSubject(contactData.subject);
    await this.typeMessageText(contactData.message);
  }
}
