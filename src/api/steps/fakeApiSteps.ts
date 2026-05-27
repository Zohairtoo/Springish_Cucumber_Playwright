import { Given, Then, When, setDefaultTimeout, DataTable } from "@cucumber/cucumber";
// import Assert from "../../support/playwright/asserts/Assert";
// import StringUtil from "../../support/utils/StringUtil";
// import Constants from "../constants/Constants";
import { PlaywrightWorld } from "../../utils/playwright-world";

setDefaultTimeout(5000);

Given('client navigates to fakeStoreApi', async function (this: PlaywrightWorld) {
    console.log("Executed step: client navigates to fakeStoreApi");
});

When("client creates a new user", async function (this: PlaywrightWorld, userDetails: DataTable) {
    // 2. Convert the table into a standard key-value object
    const details = userDetails.rowsHash();

    // 3. Access properties directly by their column key names
    const email = details["email"];
    const password = details["password"];

    console.log(`Executed step: client creates a new user with email: ${email} and password: ${password}`);
});

Then("client logs in with user_pass", async function (this: PlaywrightWorld) {
    console.log("Executed step: client logs in with user_pass");
});

Given("client creates a new product", async function (this: PlaywrightWorld) {
    console.log("Executed step: client creates a new product");
});

Given("product is successfully added", async function (this: PlaywrightWorld) {
    console.log("Executed step: product is successfully added");
});

Given("client is successfully added", async function (this: PlaywrightWorld) {
    console.log("Executed step: client is successfully added");
});