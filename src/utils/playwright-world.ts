import { World, IWorldOptions, setWorldConstructor } from '@cucumber/cucumber';
import { BrowserContext, Page } from '@playwright/test';


export class PlaywrightWorld extends World {
    browserContext!: BrowserContext;
    page!: Page;
    api!: any; // Using 'any' for simplicity, can be typed more strictly based on the API client used

    authToken!: string;
    createdUserID!: string;

    constructor(options: IWorldOptions) {
        super(options);
    }

}

setWorldConstructor(PlaywrightWorld);