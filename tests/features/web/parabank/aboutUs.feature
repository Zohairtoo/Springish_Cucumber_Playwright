Feature: About Us
  As a user of the Parabank website
  I want to be able to access the "About Us" page
  So that I can learn more about the company and its services

  @web
  Scenario: Accessing the About Us page
    Given I am on the About Us page
    Then I should see the company information
