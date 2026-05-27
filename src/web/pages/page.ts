import { Page, expect } from '@playwright/test';
import { PlaywrightWorld } from '../../utils/playwright-world';

export class BasePage {
    // 'protected' allows child classes that extend BasePage to use 'this.page'
    protected readonly page: Page;
    protected readonly expect = expect;

    constructor(currentWorld: PlaywrightWorld) {
        // Initialize the local page object from the passed Cucumber world context
        this.page = currentWorld.page;
    }

    // Common navigation utility shared across all page objects
    protected async navigateTo(url: string): Promise<void> {
        await this.page.goto(url, { waitUntil: 'load' });
    }
}