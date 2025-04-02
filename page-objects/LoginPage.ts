import { Page } from 'playwright';

export default class LoginPage {
    private page: Page;
    private usernameField;
    private passwordField;
    private loginButton;
    private errorMessage;

    constructor(page: Page) {
        this.page = page;
        this.usernameField = page.locator('#user-name');
        this.passwordField = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.errorMessage = page.locator('.error-message-container');
    }

    async login(username: string, password: string) {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }

    async isErrorVisible(): Promise<boolean> {
        return await this.errorMessage.isVisible();
    }
}
