import { Given, Then, When, setDefaultTimeout, DataTable } from "@cucumber/cucumber";
import { PlaywrightWorld } from "../../utils/playwright-world";
import { expect, APIResponse } from '@playwright/test';

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
    // need to shift this to a before hook and set the api context there, then we can use it in all the steps
    if (!this.api) throw new Error("API context is not initialized.");
    // need to get this logic into REST onject and then call the method here, also need to add the payload for creating a new product
    const response: APIResponse = await this.api.get("/products");
    const productList = await response.json();
    console.log("List of products before creating a new product: ", productList);
    console.log("Executed step: client creates a new product");
    expect(response.status()).toBe(200);
});

Given("product is successfully added", async function (this: PlaywrightWorld) {
    console.log("Executed step: product is successfully added");
});

Given("client is successfully added", async function (this: PlaywrightWorld) {
    console.log("Executed step: client is successfully added");
});