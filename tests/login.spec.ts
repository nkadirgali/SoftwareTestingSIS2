import { test, expect } from '../fixtures/pages.fixtures.ts';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';

test('valid credentials open the account page', async ({ page, user }) => {
  const registerPage = new RegisterPage(page);

  await registerPage.open();

  await registerPage.register({
    firstName: 'Alex',
    lastName: 'Tester',
    dateOfBirth: '1995-05-15',
    postalCode: '10001',
    street: '10 Test Street',
    city: 'Test City',
    state: 'Test State',
    phone: '2025550123',
    email: "x"+user.email,
    password: user.password,
  });

  await expect(page).toHaveURL('/auth/login');

  const loginPage = new LoginPage(page);

//  await loginPage.open();
  await loginPage.login("x"+user.email, user.password);

  await expect(page).toHaveURL('/account');
});

test('invalid credentials show an error', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.login('customer@practicesoftwaretesting.com', 'welcome02');

  await expect(
    page.getByTestId('login-error')
  ).toBeVisible();

  await expect(page).not.toHaveURL('/account');
});
