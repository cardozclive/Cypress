/// <reference types = 'cypress'/>

describe('My eleventh test suite', () => {

    before('Data',function(){
        //runs once before all tests in the block
        cy.fixture('example').then(function(data){
            this.user = data
            
        })
    })

    it('Hooks', function() {

        cy.visit(this.user.url)
        cy.get('[name="name"]').eq(0).type(this.user.name)
        cy.get('[name="email"]').type(this.user.email)
        cy.get('#exampleInputPassword1').type(this.user.password)
        cy.get('#exampleCheck1').check()
        cy.get('#exampleFormControlSelect1').select(this.user.gender)
        cy.get('#inlineRadio2').click()
        // cy.get('[href*="shop"]').click()



    })
})