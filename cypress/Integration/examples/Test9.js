/// <reference types = 'cypress'/>
/// <reference types = 'cypress-iframe'/>
import 'cypress-iframe'

describe('My nineth test suite', function()
{

it('Handling iFrame', function()
{

cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
cy.frameLoaded('#courses-iframe')
cy.iframe().find('li a[href="mentorship"]').eq(0).click()
cy.wait(4000)
cy.iframe().find('.pricing-title.text-white.ls-1').should('have.length', 2)
cy.iframe().find('.pricing-price').eq(0).should('have.text', '$30.00')

})

})
