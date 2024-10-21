/// <reference types ='cypress'/>

describe('My fifth test suite', function(){

it('Handling new tab', function()
{
cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
cy.get('#opentab').invoke('removeAttr','target').click();
cy.origin("https://www.qaclickacademy.com/", ()=>
{
cy.get('#navbarSupportedContent a[href*="about"]').click();
cy.get('.mt-50 h2').should('contain','QAClick Academy');

})

})

})