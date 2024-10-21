/// <reference types='cypress'/>

describe('My fifth test scenario', function()
{
it('Mouse Hover', function()
{

cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
cy.get('.mouse-hover-content').invoke('show');
cy.wait(2000)
cy.contains('Top').click();
cy.url().should('include','top')
// cy.scrollTo('bottom')
// cy.wait(3000)
// cy.contains('Top').click({force: true})
cy.get('.mouse-hover-content').trigger('mouseover',{force: true}).contains('Reload').click()
cy.url().then(function(urlText)
{
    expect(urlText).to.equal('https://rahulshettyacademy.com/AutomationPractice/')
})
// cy.log(url)

})

}
)