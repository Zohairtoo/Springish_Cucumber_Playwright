import { Before, After, BeforeAll, AfterAll, Status } from '@cucumber/cucumber';
import { chromium, Browser } from '@playwright/test';
import { PlaywrightWorld } from '../playwright-world';
import { AbstractHook } from '../abstractHook';

export class WebHook extends AbstractHook {

    private browser!: Browser;

    public async beforeScenario(world: PlaywrightWorld): Promise<void> {
        this.browser = await this.initBrowser();
        world.browserContext = await this.browser.newContext();
        world.page = await world.browserContext.newPage();
    }

    public async afterScenario(world: PlaywrightWorld): Promise<void> {
        if (world.page) {
            await world.page.close();
        }
        if (world.browserContext) {
            await world.browserContext.close();
        }
        if (this.browser) {
            await this.browser.close();
        }
    }
}

// Instantiate the runner
const webHookInstance = new WebHook();

// Bind directly to Cucumber hooks using tags
Before({ tags: '@web' }, async function (this: PlaywrightWorld) {
    await webHookInstance.beforeScenario(this);
});

After({ tags: '@web' }, async function (this: PlaywrightWorld) {
    await webHookInstance.afterScenario(this);
});