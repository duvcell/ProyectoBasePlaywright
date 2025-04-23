import { expect, Page } from '@playwright/test';

class Dashboard{
    lbl_title: string;

    constructor(){
        this.lbl_title = 'Dashboard'
    }

    async checkTitleDashboard(page:Page){
        await page.waitForTimeout(3000);
        await expect(page.getByRole('heading', { name: this.lbl_title })).toBeVisible();
    }

    
}
module.exports = Dashboard;