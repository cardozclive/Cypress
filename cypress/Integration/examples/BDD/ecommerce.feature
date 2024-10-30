Feature: End to End Ecommerce validation

    Application Regression
@Smoke
    Scenario: Ecommerce products delivery
    Given I opened Ecommerce page
    When I add items to cart and Validate the total prices
    Then select the country, submit and verify thankyou message

@Regression
    Scenario: Ecommerce landing page
    Given I open Ecommerce page
    When I added name, Email, Password, Gender, DOB
    |  name  |   email   |   password  |  gender  |    DOB    |   
    | Test   | y@yop.com | Password@123|   Male   | 1990-05-01|
    Then Validating minLenght of name field and Enterpreneur Radio Button is disabled