
///  <reference types='cypress'/>

describe('My fourth test suite', function()
{
   
it('Capturing text from the popup and asserting it', function()
{

cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
cy.get('#name').type('Clive');
cy.get('#alertbtn').click();
cy.get('[value="Confirm"]').click();
// capturing text from the popup and asserting it
cy.on('window:alert', (str)=>
{
    expect(str).to.equal('Hello Clive, share this practice page and share your knowledge')
})
cy.on('window:confirm', (str) =>
{
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
})
// cy.on('window:confirm', ()=> false)

// cy.on('window:confirm',function(){
//     return false;       
// })


})




})
