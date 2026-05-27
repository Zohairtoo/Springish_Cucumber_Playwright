import { Before, After, BeforeAll, AfterAll, Status } from '@cucumber/cucumber';
import { chromium, Browser } from '@playwright/test';
import { PlaywrightWorld } from './playwright-web-world';

let browser: Browser;

BeforeAll(async function () {
    // Launch browser once globally across tests
    browser = await chromium.launch({ headless: true });
    //we can select the browser based on env variable in future
});

Before(async function (this: PlaywrightWorld) {
    // Setup an isolated context and page for every single scenario
    this.context = await browser.newContext();
    this.page = await this.context.newPage();
});

After(async function (this: PlaywrightWorld, scenario) {
    // Optional: Take a screenshot if the step fails
    if (scenario.result?.status === Status.FAILED) {
        const screenshot = await this.page.screenshot();
        await this.attach(screenshot, 'image/png');
    }
    // Tear down layers cleanly
    await this.page.close();
    await this.context.close();
});

AfterAll(async function () {
    await browser.close();
});