import { Before, After } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';

let browser: Browser;
let page: Page;

Before(async function () {
    console.log("Iniciando el navegador...");
    browser = await chromium.launch({
        headless: false, // Para ver la ejecución en el navegador
        slowMo: 1000     // Retraso de 1 segundo entre cada acción
    });
    page = await browser.newPage();
    this.page = page; // Almacena la página en el contexto de prueba
});

After(async function () {
    console.log("Cerrando el navegador...");
    await browser.close();
});
