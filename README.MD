# Proyecto de Automatización QA – FrontEnd con Playwright y Cucumber

## 📌 Autor
**Shantal Lucia Martinez Franco**

## 📌 Objetivo del Proyecto
Este proyecto tiene como objetivo la automatización de pruebas de la aplicación web **Sauce Demo**, utilizando **Playwright** y **Cucumber** con **TypeScript**. Se implementa el **patrón de diseño Page Object Model (POM)** para una mejor organización y mantenimiento del código.

---

## 📌 Integraciones y Tecnologías Utilizadas

- **Playwright**: Herramienta de automatización para pruebas end-to-end en navegadores modernos.
- **Cucumber**: Framework basado en BDD (Behavior-Driven Development) que permite escribir pruebas en lenguaje Gherkin.
- **TypeScript**: Lenguaje de programación que añade tipado estático a JavaScript.
- **Node.js & npm**: Entorno de ejecución de JavaScript y gestor de paquetes.
- **WebStorm**: IDE utilizado para el desarrollo del proyecto.

---

## 📌 Pasos para Crear el Proyecto

### 🔹 Instalación de Playwright y Cucumber
```sh
mkdir playwright-cucumber-sauce-reto
cd playwright-cucumber-sauce-reto
npm init -y
npm install --save-dev @playwright/test
npm install --save-dev @cucumber/cucumber ts-node typescript
```

### 🔹 Configuración de Playwright y Cucumber

1. **Inicializar Playwright:**
   ```sh
   npx playwright install
   ```

2. **Configurar Cucumber agregando el archivo `cucumber.js` en la raíz del proyecto:**
   ```js
   module.exports = {
       default: {
           require: ["./step-definitions/*.ts", "./support/hooks.ts"],
           requireModule: ["ts-node/register"],
           format: ["progress-bar"],
           publishQuiet: true
       },
   };
   ```

---

## 📌 Arquitectura del Proyecto

```sh
📂 playwright-cucumber-sauce-reto
│--📂 features          # Archivos .feature en lenguaje Gherkin
│   │-- login.feature
│   │-- cart.feature
│   │-- checkout.feature
│
│--📂 page-objects      # Implementación del patrón POM
│   │-- LoginPage.ts
│   │-- InventoryPage.ts
│   │-- CartPage.ts
│   │-- CheckoutPage.ts
│
│--📂 step-definitions  # Definición de los pasos de Cucumber
│   │-- loginSteps.ts
│   │-- cartSteps.ts
│   │-- checkoutSteps.ts
│
│--📂 support          # Hooks y configuraciones
│   │-- hooks.ts
│
│-- cucumber.js        # Configuración de Cucumber
│-- package.json       # Configuración del proyecto
│-- tsconfig.json      # Configuración de TypeScript
```

---

## 📌 Patrón de Diseño **Page Object Model (POM)**

El proyecto sigue el **patrón Page Object Model (POM)**, el cual ayuda a separar la lógica de prueba de la interacción con la interfaz de usuario, mejorando la reutilización y el mantenimiento del código.

- **LoginPage.ts**: Contiene los métodos para iniciar sesión en la aplicación.
- **InventoryPage.ts**: Maneja la selección y visualización de productos.
- **CartPage.ts**: Controla la funcionalidad del carrito de compras.
- **CheckoutPage.ts**: Gestiona el proceso de compra y confirmación.

Ejemplo de una página en POM:
```ts
import { Page } from 'playwright';

export default class LoginPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async login(username: string, password: string) {
        await this.page.fill('[data-test="username"]', username);
        await this.page.fill('[data-test="password"]', password);
        await this.page.click('[data-test="login-button"]');
    }
}
```

---

## 📌 Ejecución de Pruebas

### 🔹 Ejecutar todas las pruebas
```sh
npx cucumber-js
```

### 🔹 Ejecutar una feature específica
```sh
npx cucumber-js --tags "@checkout"
```

### 🔹 Ejecutar en modo visual y con retraso (slow motion)
```sh
npx cucumber-js --world-parameters '{"slowMo":1000}'
```

### 🔹 Ejecutar desde el botón "Play"
También es posible ejecutar cada **feature** o **escenario** de prueba directamente desde WebStorm usando el botón **Play ▶**.

---

## 📌 Configuración de Hooks (`hooks.ts`)

Los **Hooks** permiten configurar acciones antes y después de cada prueba:
```ts
import { Before, After } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';

let browser: Browser;
let page: Page;

Before(async function () {
    browser = await chromium.launch({ headless: false, slowMo: 500 });
    page = await browser.newPage();
    this.page = page;
});

After(async function () {
    await browser.close();
});
```

---

## 📌 Conclusión
Este proyecto demuestra cómo integrar **Playwright** con **Cucumber** utilizando **TypeScript**, siguiendo **buenas prácticas** de automatización con **POM**. Con esta arquitectura, las pruebas son **mantenibles, escalables y reutilizables** para futuros escenarios.

