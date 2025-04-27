const { expect } = require('@playwright/test');

exports.GenesisPage = class GenesisPage {
    constructor(page) {
        this.page = page;
        this.clickEvPlans = page.getByText('EV Plans');
        this.openMenu = page.getByText('Open menu');
        this.whyGenesis = page.locator('span.flex-1', { hasText: 'Why Genesis' });
    }

    async goto() {
        await this.page.goto('https://genesisenergy.co.nz');
    }

    async openEV() {
        await this.clickEvPlans.click();
    }
}
