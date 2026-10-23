
import { expect, type Page } from '@playwright/test';

export class CartPage {
  constructor(private readonly page: Page) {}

  async open() {
    await this.page.goto('/checkout');
  }

  async expectProductTitle(name: string) {
    await expect(await this.page.getByTestId('product-title')).toHaveText(name);
  }

  async expectProductQuantity(quantity: number) {
    await expect(this.page.getByTestId('product-quantity')).toHaveValue(String(quantity));
  }

  async expectProductPrice(price: number) {
    await expect(this.page.getByTestId('product-price')).toHaveText("$"+String(price));
  }

  async expectProductTotalPrice(totalPrice: number) {
    await expect(this.page.getByTestId('line-price')).toHaveText("$"+String(totalPrice));
  }

}
