import { test, expect } from '@playwright/test';
import { GenesisPage } from '../pages/GenesisPage';

test('check Genesis page', async ({ page }) => {
    const genesis = new GenesisPage(page);
    await genesis.goto();
    await genesis.openEV();
});
