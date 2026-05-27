Feature: Fake Store API playground
    As a user of the Fake Store API
    I want to be able to interact with the API endpoints
    So that I can test the functionality of creating users and products

    @api
    Scenario: Navigate to fakeStoreApi and create a user
        Given client navigates to fakeStoreApi
        When client creates a new user
            | email            | password     |
            | test@example.com | SecurePwd123 |
        Then client is successfully added

    @api
    Scenario: Navigate to fakeStoreApi and create a new product
        Given client navigates to fakeStoreApi
        When client logs in with user_pass
        And client creates a new product
        Then product is successfully added