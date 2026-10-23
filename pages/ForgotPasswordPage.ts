
import { type Page, type Locator } from '@playwright/test';

export class ForgotPasswordPage {
  readonly emailInput: Locator;
  readonly submitButton: Locator;
  private alertText: string;

  constructor(private readonly page: Page) {
    this.emailInput = page.getByTestId('email');
    this.submitButton = page.getByTestId('forgot-password-submit');
    this.alertText = "";
  }

  async open() {
    await this.page.goto('/auth/forgot-password');
  }

  async submitEmail(email: string) {
    await this.emailInput.fill(email);
    await this.submitButton.click();
    this.alertText = (await this.page.getByRole('alert').innerText()).trim();
  }

  getAlertText(): string {
    return this.alertText;
  }
}
