import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { PlaywrightWorld } from '../../utils/web/playwright-web-world';

setDefaultTimeout(15000);

Given('I am on the About Us page', async function (this: PlaywrightWorld) {
    await this.page.goto('https://parabank.parasoft.com/parabank/about.htm', { waitUntil: 'load' });
});

Then('I should see the company information', async function (this: PlaywrightWorld) {
   await expect(this.page.locator('h1.title')).toHaveText('ParaSoft Demo Website');

    // 2. Verify the paragraph text contains the demo site description
    await expect(this.page.locator('#rightPanel p').first())
        .toContainText('ParaBank is a demo site used for demonstration');
});