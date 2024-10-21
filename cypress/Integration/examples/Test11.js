/// <reference types = 'cypress'/>

describe('My eleventh test suite', () => {

    before(function(){
        //runs once before all tests in the block
        cy.fixture('example').then(function(data){
            data
        })
    })

    it('Hooks', () => {

        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('[name="name"]').eq(0).type('Testing')
        cy.get('[name="email"]').type('test@yopmail.com')
        cy.get('#exampleInputPassword1').type('Password123')
        cy.get('#exampleCheck1').check()
        cy.get('#exampleFormControlSelect1').select('Female')
        cy.get('#inlineRadio2').click()
        // cy.get('[href*="shop"]').click()



    })
})