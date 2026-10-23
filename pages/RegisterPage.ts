
import { type Page } from '@playwright/test';

export class RegisterPage {
  constructor(private readonly page: Page) {}

  async open() {
    await this.page.goto('/auth/register');
  }

  async register(data: {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    postalCode: string;
    street: string;
    city: string;
    state: string;
    phone: string;
    email: string;
    password: string;
  }) {
    await this.page.getByTestId('first-name').fill(data.firstName);
    await this.page.getByTestId('last-name').fill(data.lastName);
    await this.page.getByTestId('dob').fill(data.dateOfBirth);

    await this.page.getByTestId('country').selectOption('KZ');

    await this.page.getByTestId('postal_code').fill(data.postalCode);
    await this.page.getByTestId('house_number').fill("27");
    await this.page.getByTestId('street').fill(data.street);
    await this.page.getByTestId('city').fill(data.city);
    await this.page.getByTestId('state').fill(data.state);
    await this.page.getByTestId('phone').fill(data.phone);
    await this.page.getByTestId('email').fill(data.email);
    await this.page.getByTestId('password').fill(data.password);

    await this.page.getByTestId('register-submit').click();
  }
}
