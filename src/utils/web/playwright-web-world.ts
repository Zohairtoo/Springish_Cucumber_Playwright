import { World, IWorldOptions, setWorldConstructor } from '@cucumber/cucumber';
import { BrowserContext, Page } from '@playwright/test';
// import { LoginPage } from '../pages/LoginPage';
// import { DashboardPage } from '../pages/DashboardPage';


export class PlaywrightWorld extends World {
    context!: BrowserContext;
    page!: Page;

    authToken!: string;
    createdUserID!: string;

    constructor(options: IWorldOptions) {
        super(options);
    }
    // Lazy-loaded Page Objects (The "Bean Factory" pattern)
    //   get loginPage(): LoginPage {
    //     return new LoginPage(this.page);
    //   }

    //   get dashboardPage(): DashboardPage {
    //     return new DashboardPage(this.page);
    //   }

}

setWorldConstructor(PlaywrightWorld);