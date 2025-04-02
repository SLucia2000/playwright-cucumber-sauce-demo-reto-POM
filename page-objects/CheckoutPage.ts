import { Page } from '@playwright/test';

export default class CheckoutPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async fillCheckoutInfo(firstName: string, lastName: string, zipCode: string) {
        await this.page.fill('[data-test="firstName"]', firstName);
        await this.page.fill('[data-test="lastName"]', lastName);
        await this.page.fill('[data-test="postalCode"]', zipCode);
        await this.page.locator('[data-test="continue"]').click();
    }

    async confirmPurchase() {
        await this.page.locator('[data-test="finish"]').click();
    }

    async getConfirmationMessage(): Promise<string> {
        return (await this.page.locator('.complete-header').textContent()) ?? "";
    }
}
