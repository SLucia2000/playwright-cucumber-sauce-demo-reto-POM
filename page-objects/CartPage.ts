import { Page } from '@playwright/test';

export default class CartPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async openCart() {
        await this.page.locator('.shopping_cart_link').click();
    }

    async proceedToCheckout() {
        await this.page.locator('[data-test="checkout"]').click();
    }
}
