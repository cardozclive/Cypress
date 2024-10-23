/// <reference types = 'cypress'/>

describe('My eleventh test suite', () => {

    before('Data', function () {
        //runs once before all tests in the block
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })

    it('Hooks', function () {

        cy.visit(this.data.url)
        cy.get(':nth-child(1) > .form-control').type(this.data.name)
        cy.get("input[class='ng-untouched ng-pristine ng-valid']").should('have.value', this.data.name)
        cy.get('[name="email"]').type(this.data.email)
        cy.get('#exampleInputPassword1').type(this.data.password)
        cy.get('#exampleCheck1').check()
        cy.get('#exampleFormControlSelect1').select(this.data.gender)
        // cy.pause()
        cy.get('#inlineRadio2').click()

        cy.get(':nth-child(1) > .form-control').should('have.attr', 'minlength', '2')
        cy.get('#inlineRadio3').should('be.disabled')
        cy.get('[name="bday"]').type("1990-05-01")
        cy.get('.btn-success').click()


        cy.get('[href*="shop"]').click()


        this.data.productName.forEach(function (element) {
            cy.selectProduct(element)
        });

        cy.get('.nav-link.btn.btn-primary').click()

    })


})
