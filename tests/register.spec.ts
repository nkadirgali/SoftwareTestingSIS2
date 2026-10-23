import { test, expect } from '../fixtures/pages.fixtures.ts';
import { RegisterPage } from '../pages/RegisterPage';

test('register a new customer', async ({ page, user }) => {
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
    email: user.email,
    password: user.password,
  });

  await expect(page).toHaveURL('/auth/login');
});
