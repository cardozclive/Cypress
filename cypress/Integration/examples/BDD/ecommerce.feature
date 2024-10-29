Feature: End to End Ecommerce validation

    Application Regression

    Scenario: Ecommerce products delivery
    Given I opened Ecommerce page
    When I add items to cart and Validate the total prices
    Then select the country, submit and verify thankyou message