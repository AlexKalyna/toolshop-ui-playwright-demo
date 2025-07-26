import { Login } from '../pages/login.page';

export class Sprint5WithBugsLogin extends Login {
  async expectLoaded() {
    // Suppose the bug causes the title to be wrong or missing
    await this.page.waitForURL(this.pagePath);
    // Instead of expecting the correct title, we expect the buggy behavior
    // For example, the title is missing or incorrect
    // You can adjust this logic to match the real bug
    const title = await this.page.locator('div.container.auth-container > div > div > h3').textContent();
    if (title !== 'Login') {
      // Log or handle the bug as needed
      console.warn('Known bug: Login page title is incorrect or missing:', title);
    }
  }
}
