import { Page, expect } from "@playwright/test";

class Login{
    txt_userName: string;
    txt_password: string;
    btn_login: string;

    constructor(){
        this.txt_userName = 'username';
        this.txt_password = 'password';
        this.btn_login = "//button[text()=' Login ']";
    }

    async typeUserName(page: Page, userName: string) {
        await page.getByPlaceholder(this.txt_userName).fill(userName);
    }

    async typePassword(page: Page, password: string){
        await page.getByPlaceholder(this.txt_password).fill(password);
    }

    async clickOnButton(page: Page){
        await page.locator(this.btn_login).click();
    }

    async fillLoginCredentials(page: Page, userName: string, password: string){
        await this.typeUserName(page, userName);
        await this.typePassword(page, password);
        await this.clickOnButton(page);
    }

}
module.exports = Login;