import { chromium, Browser } from '@playwright/test';
import { PlaywrightWorld } from './playwright-world';

export abstract class AbstractHook {

    protected async initBrowser(): Promise<Browser> {
        return await chromium.launch({
            headless: true,
            // We can select the browser based on env variable in future
        });
    }

    public abstract beforeScenario(world: PlaywrightWorld): Promise<void>;
    public abstract afterScenario(world: PlaywrightWorld): Promise<void>;

}