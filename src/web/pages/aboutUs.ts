// this is the page object of about us page, we can write all the methods related to about us page here and then call those methods in steps file
import { BasePage } from './page';

export default class AboutUsPage extends BasePage {

    private static URL: string = 'https://parabank.parasoft.com/parabank/about.htm';

    private Elements = {
        title: "h1.title",
        paragraph: "#rightPanel p"
    }

    async navigateToAboutPage() {
        await this.navigateTo(AboutUsPage.URL);
    }

    async seeCompanyInformation() {
        await this.expect(this.page.locator(this.Elements.title)).toHaveText('ParaSoft Demo Website');
        await this.expect(this.page.locator(this.Elements.paragraph).first())
            .toContainText('ParaBank is a demo site used for demonstration');
    }

}