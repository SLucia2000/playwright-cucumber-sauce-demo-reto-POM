import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import LoginPage from '../page-objects/LoginPage';
import InventoryPage from '../page-objects/InventoryPage';

let loginPage: LoginPage;
let inventoryPage: InventoryPage;

Given('el usuario está en la página de inicio de sesión', async function () {
    loginPage = new LoginPage(this.page);  // Usa la página creada en hooks.ts
    inventoryPage = new InventoryPage(this.page);
    await this.page.goto('https://www.saucedemo.com/');
});

When('ingresa el usuario {string} y la contraseña {string}', async function (username: string, password: string) {
    await loginPage.login(username, password);
});

Then('debería ver la página de productos', async function () {
    expect(await inventoryPage.isPageVisible()).toBeTruthy();
});

Then('debería ver un mensaje de error', async function () {
    expect(await loginPage.isErrorVisible()).toBeTruthy();
});
