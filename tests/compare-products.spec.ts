
import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage';

test('compare two products by name and price', async ({ page }) => {
  const productPage = new ProductPage(page);

  await productPage.openCatalogue();

  await productPage.openProduct(0);

  const firstName = await productPage.getName();
  const firstPrice = await productPage.getPrice();

  await productPage.openCatalogue();
  await productPage.openProduct(1);

  const secondName = await productPage.getName();
  const secondPrice = await productPage.getPrice();

  expect(firstName).not.toBe(secondName);
  expect(firstPrice).toBeGreaterThan(0);
  expect(secondPrice).toBeGreaterThan(0);

  if (firstPrice < secondPrice) {
    expect(firstPrice).toBeLessThan(secondPrice);
    console.log(`${firstName} is cheaper than ${secondName}`);
  } else if (secondPrice < firstPrice) {
    expect(secondPrice).toBeLessThan(firstPrice);
    console.log(`${secondName} is cheaper than ${firstName}`);
  } else {
    expect(firstPrice).toBe(secondPrice);
    console.log('Both products have the same price');
  }
});
