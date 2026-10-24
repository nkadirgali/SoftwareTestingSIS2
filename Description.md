# Toolshop UI Test Automation — Project Description

## Project goal

The goal of this project is to practice UI test automation using Playwright with TypeScript and the Page Object Model (POM). The tests target the public demo e-commerce website [Practice Software Testing](https://practicesoftwaretesting.com/), also known as Toolshop.

The suite automates selected customer journeys and checks visible application behavior. The tests are intended for learning and demonstration; they are not a guarantee that every business rule or payment flow is covered.

## Technology stack

- **Language:** TypeScript
- **Automation framework:** Playwright Test
- **Design pattern:** Page Object Model
- **Browser:** Chromium (as configured in the project)
- **Debugging evidence:** Playwright HTML report, screenshots, and traces

## Test cases selected for automation

| ID | Test case | Main steps | Expected result |
|---|---|---|---|
| TC-01 | Register a new customer | Open registration, fill the required customer fields, submit the form | Registration completes successfully and the application displays the expected next page or confirmation |
| TC-02 | Login with valid credentials | Open login, enter valid credentials, submit | Login is successfully and the application displays the expected next page |
| TC-03 | Login with invalid credentials | Open login, enter invalid credentials, submit | Login is rejected and an appropriate error message is displayed |
| TC-04 | Add a product to the cart and reach checkout | Open a product, record its name, add it to the cart, open the cart, verify the product | The selected product appears in the cart; this test does not claim that an order is placed |
| TC-05 | Compare two products | Open two catalogue products and read their names and prices | The test obtains comparable product details and checks the intended comparison conditions; it does not necessarily exercise a dedicated on-site comparison feature |
| TC-06 | Reset password | Open the forgot-password page, submit an email address, inspect the response | The application displays the expected response for the chosen email scenario |

## Project structure

- `pages/` contains page objects that encapsulate locators and user actions.
- `tests/` contains test scenarios and assertions.
- `fixtures/` contains shared Playwright fixtures, if used by a test.
- `playwright.config.ts` configures test execution, browser settings, and debugging artifacts.

## Running the tests

Run all tests:

```bash
npx playwright test
```

Run a single test file:

```bash
npx playwright test tests/reset-password.spec.ts
```

Run with a visible browser:

```bash
npx playwright test --headed
```

Open the HTML report after a run:

```bash
npx playwright show-report
```

## Scope and limitations

- The target is a public demo site; its data and behavior can change.
- Tests that require an existing account must use a dedicated test account and credentials stored securely in environment variables, not hard-coded in source code.
- Registration and checkout may be affected by test data, validation rules, or external site behavior.
- Reaching checkout is not the same as successfully completing a purchase.
- Product detail extraction is not equivalent to testing a dedicated product-comparison widget.
- Test results should be rerun and reviewed before submission; previous report artifacts can be stale and should not be treated as proof of the latest run.
