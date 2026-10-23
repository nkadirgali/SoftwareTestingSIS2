
import { test, expect } from '@playwright/test';
import { ForgotPasswordPage } from '../pages/ForgotPasswordPage';

test('submit a password reset request for a known email', async ({ page }) => {
  const forgotPasswordPage = new ForgotPasswordPage(page);
  const email = "customer@practicesoftwaretesting.com";

  await forgotPasswordPage.open();
  await forgotPasswordPage.submitEmail(email!);

  await expect(forgotPasswordPage.getAlertText()).toBe('page.forgot-password.confirm');
});

test('submit a password reset request for a unknown email', async ({ page }) => {
  const forgotPasswordPage = new ForgotPasswordPage(page);
  const email = "nkadirgali2004@gmail.com";

  await forgotPasswordPage.open();
  await forgotPasswordPage.submitEmail(email!);

  await expect(forgotPasswordPage.getAlertText()).toBe('The selected email is invalid.');
});

/*test('reject an invalid email format', async ({ page }) => {
  const forgotPasswordPage = new ForgotPasswordPage(page);

  await forgotPasswordPage.open();
  await forgotPasswordPage.emailInput.fill('not-an-email');
  await forgotPasswordPage.submitButton.click();

  const browserRejected = await forgotPasswordPage.emailInput.evaluate(
    (element: HTMLInputElement) => !element.validity.valid
  );

  const appRejected = await page.getByText(
    /invalid email|enter a valid email/i
  ).first().isVisible().catch(() => false);

  expect(browserRejected || appRejected).toBeTruthy();
});
*/