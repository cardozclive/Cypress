/// <reference types ="cypress"/>

it('First Cypress test', ()=>{

cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
cy.get('input[value = "radio2"]').click();
cy.get('#checkBoxOption2').check();
cy.wait(4000);
cy.get('#name',{timeout: 2000}).type('Rahul{enter}');
// expect('#displayed-text').visible()



})