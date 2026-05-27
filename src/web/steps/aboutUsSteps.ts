import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { PlaywrightWorld } from '../../utils/playwright-world';
import AboutUsPage from '../pages/aboutUs';

setDefaultTimeout(15000);

let aboutUsPage: AboutUsPage;


Given('I am on the About Us page', async function (this: PlaywrightWorld) {
    // need to write this logic into page objects
    aboutUsPage = new AboutUsPage(this);
    await aboutUsPage.navigateToAboutPage();
});

Then('I should see the company information', async function (this: PlaywrightWorld) {
    // need to write this logic into page objects
    await aboutUsPage.seeCompanyInformation();
});