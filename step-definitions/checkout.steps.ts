import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import CartPage from '../page-objects/CartPage';
import CheckoutPage from '../page-objects/CheckoutPage';

let cartPage: CartPage;
let checkoutPage: CheckoutPage;

When('procede al checkout', async function () {
    cartPage = new CartPage(this.page);
    await cartPage.proceedToCheckout();
});

When('ingresa la información de compra {string} {string} {string}', async function (firstName: string, lastName: string, zipCode: string) {
    checkoutPage = new CheckoutPage(this.page);
    await checkoutPage.fillCheckoutInfo(firstName, lastName, zipCode);
});

When('confirma la compra', async function () {
    await checkoutPage.confirmPurchase();
});

Then('debería ver el mensaje {string}', async function (expectedMessage: string) {
    const confirmationText = await checkoutPage.getConfirmationMessage();
    expect(confirmationText).toBe(expectedMessage);
});
