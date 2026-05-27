import { Before, After } from '@cucumber/cucumber';
import { PlaywrightWorld } from '../playwright-world';
import { AbstractHook } from '../abstractHook';
import { request } from '@playwright/test';

export class ApiHook extends AbstractHook {

    public async beforeScenario(world: PlaywrightWorld): Promise<void> {
        // Initialize independent native API capabilities with no browser window overhead
        world.api = await request.newContext({
            baseURL: 'https://fakestoreapi.com',
            extraHTTPHeaders: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        // need to shift this to a before hook and set the api context there, then we can use it in all the steps
        if (!world.api) throw new Error("API context is not initialized.");
    }

    public async afterScenario(world: PlaywrightWorld): Promise<void> {
        if (world.api) {
            await world.api.dispose(); // Explicitly dispose of the request engine
        }
    }
}

// Instantiate the runner
const apiHook = new ApiHook();

// Bind directly to Cucumber hooks using tags
Before({ tags: '@api' }, async function (this: PlaywrightWorld) {
    await apiHook.beforeScenario(this);
});

After({ tags: '@api' }, async function (this: PlaywrightWorld) {
    await apiHook.afterScenario(this);
});