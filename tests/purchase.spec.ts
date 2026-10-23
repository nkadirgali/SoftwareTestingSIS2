
import { test } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';

test('add a product to the cart and reach checkout', async ({ page }) => {
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);

  await productPage.openCatalogue();
  await productPage.openProduct(1)//Math.floor(Math.random() * 9) + 1);

  const productName = await productPage.getName();
  const productPrice = await productPage.getPrice();
  const productQuantity = 1//Math.floor(Math.random() * 3) + 1;

  await productPage.setQuantity(productQuantity);

  await productPage.addToCart();

  await cartPage.open();

  await cartPage.expectProductTitle(productName);
  await cartPage.expectProductPrice(productPrice);
  await cartPage.expectProductQuantity(productQuantity);
  await cartPage.expectProductTotalPrice(productPrice*productQuantity);
    
});
