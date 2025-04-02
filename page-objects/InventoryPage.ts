import { Page } from '@playwright/test';

export default class InventoryPage {
    private page: Page;
    private inventoryContainer;

    constructor(page: Page) {
        this.page = page;
        this.inventoryContainer = page.locator('.inventory_list');
    }

    async isPageVisible(): Promise<boolean> {
        return await this.inventoryContainer.isVisible();
    }

    async addProductToCart(productName: string) {
        const productLocator = this.page.locator(`text=${productName} >> xpath=../../..//button`);
        await productLocator.click();
    }
}
