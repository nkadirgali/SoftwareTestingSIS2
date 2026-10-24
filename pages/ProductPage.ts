
import { expect, type Page } from '@playwright/test';

export class ProductPage {
  constructor(private readonly page: Page) {}

  async openCatalogue() {
    await this.page.goto('/');
  }

  async openProduct(index: number) {
    await expect(this.page.getByRole('img', {name: "Banner"})).toBeVisible();

    const products = this.page.locator('a[data-test^="product-"]');
    
    await expect(products).toHaveCount(9);
    
    const product = products.nth(index); //filter({ hasText: name });
    await expect(product).toHaveCount(1);
    await product.click();
  }

  async getName(): Promise<string> {
    return (await this.page.getByTestId('product-name').innerText()).trim();
  }

  async getPrice(): Promise<number> {
    const text = await this.page.getByTestId('unit-price').innerText();
    const value = Number(text.replace(/[^\d.]/g, ''));

    if (!Number.isFinite(value)) {
      throw new Error(`Could not read product price: ${text}`);
    }

    return value;
  }

  async setQuantity(quantity: number) {
      await this.page.getByTestId('quantity').fill(quantity.toString());
  }

  async addToCart() {
    await expect(this.page.getByRole('img', {name: (await this.getName()).toString(), exact: true})).toBeVisible();
    
    await this.page.getByTestId('add-to-cart').click();
    await expect(this.page.getByTestId('nav-cart')).toBeVisible();
  }
}
