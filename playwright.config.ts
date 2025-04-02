import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    browserName: 'chromium', // Puedes cambiar a 'firefox' o 'webkit'
    headless: false, // Cambiar a true si quieres que las pruebas corran sin abrir navegador
    screenshot: 'only-on-failure',
    trace: 'on',
  },
});
