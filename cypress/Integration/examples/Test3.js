
///  <reference types='cypress'/>

describe('My third test suite', function()
{
   
    it('Checkbox, Radio button, Static Dropdown, Dynamic Dropdwn', function()
{

cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

// checkboxes
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');
cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
cy.get('input[type = "checkbox"]').check(['option2','option3']);

// static dropdown
cy.get('select').select('option3').should('have.value','option3');

//Dynamic dropdown
cy.get('#autocomplete').type('IND')
cy.get('.ui-menu-item div').each(($e1, index, $list) =>
{
   
    if($e1.text() === 'India')
    {
        cy.get($e1).click();
    }
})

//Assert if correct country is selected
cy.get('#autocomplete').should('have.value','India');

//Assert if element is visible or hidden
cy.get('#displayed-text').should('be.visible');
cy.get('#hide-textbox').click();
cy.get('#displayed-text').should('not.be.visible');
cy.get('#show-textbox').click();
cy.get('#displayed-text').should('be.visible');

// Handling radio button and asserting if it is checked
cy.get('[value="radio2"]').check().should('be.checked')


})




})
