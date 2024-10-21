/// <reference types ='cypress'/>

describe("Handling Child Tab trial test suite", function () {
    beforeEach(() => {
        // run these tests as if in a desktop
        // browser with a 720p monitor
        cy.viewport(1280, 720)
    })

    it.skip('Handling Child Tab Test case', function () {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.blinkingText').invoke('removeAttr', 'target').click();



    })

    it.skip('Handling Javascript popup', function () {
        cy.visit('https://the-internet.herokuapp.com');
        cy.contains('JavaScript Alerts').click();
        cy.get('button[onclick="jsAlert()"]').click();

        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am a JS Alert')
        })
        cy.wait(1000)
        cy.get('#result').then(function (resultText) {
            expect(resultText.text()).to.equal('You successfully clicked an alert')
        })

    })

    it.skip('Dropdown', function()
{
    cy.visit('https://the-internet.herokuapp.com/');
    cy.contains('Dropdown').click();
    cy.get('#dropdown').select('Option 1');

})

it('Dynamic Controls', function()
{
cy.visit('https://the-internet.herokuapp.com/')
cy.contains('Dynamic Controls').click();
cy.get("input[label='blah']").should('not.be.checked')
cy.get("input[label='blah']").check().should('be.checked')
cy.get('button[onclick="swapCheckbox()"]').click();
cy.wait(4000)
cy.get('#message').then(function(messageText)
{
    expect(messageText.text()).to.equal("It's gone!")
})

cy.get('[type="text"]').should('be.disabled')
cy.get('button[onclick="swapInput()"]').click()
cy.wait(5000)
cy.get('#message').then(function(messageTxt)
{
    expect(messageTxt.text()).to.equal("It's enabled!")

})
cy.get('[type="text"]').should('be.enabled')
})



})