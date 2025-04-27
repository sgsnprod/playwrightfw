const { expect }= require('@playwright/test');

exports.GenesisPage= class GenesisPage{
constructor(page) {
    this.page=page;
    this.clickEvPlans = page.getbytext('EV Plans');
    this.openMenu=page.getbytext('Open menu');
    this.whyGenesis=page.getbyloctor('span.flex-1 {has-text: "Why Genesis"}');
}   
    async goto(){
    this.page.goto('https://genesisenergy.co.nz');
}

async openEV(){
    this.clickEvPlans.click();
}

}