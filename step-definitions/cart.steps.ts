import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import InventoryPage from '../page-objects/InventoryPage';
import CartPage from '../page-objects/CartPage';

let inventoryPage: InventoryPage;
let cartPage: CartPage;

When('agrega el producto {string} al carrito', async function (productName: string) {
    inventoryPage = new InventoryPage(this.page);
    cartPage = new CartPage(this.page);
    await inventoryPage.addProductToCart(productName);
});

Then('debería ver {string} producto en el carrito', async function (quantity: string) {
    const cartCount = await this.page.locator('.shopping_cart_badge').textContent();
    expect(cartCount).toBe(quantity);
});

When('abre el carrito de compras', async function () {
    await cartPage.openCart();
});

Then('debería ver el producto {string} en el carrito', async function (productName: string) {
    const productInCart = await this.page.locator('.inventory_item_name').textContent();
    expect(productInCart).toBe(productName);
});
