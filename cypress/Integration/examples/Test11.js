/// <reference types = 'cypress'/>
import HomePage from '../pageObjects/homepage'

describe('My eleventh test suite', () => {

    before('Data', function () {
        //runs once before all tests in the block
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })

    it('Hooks', function () {
        const homePage = new HomePage()
        

        cy.visit(this.data.url)
        homePage.getName().type(this.data.name)
        homePage.getTwoWayDataBindin().should('have.value', this.data.name)
        homePage.getEmail().type(this.data.email)
        homePage.getPassword().type(this.data.password)
        homePage.getCheckBox().check()
        homePage.getGender().select(this.data.gender)
        homePage.getEmpRadioBtn().click()

        homePage.getName().should('have.attr', 'minlength', '2')
        homePage.getEntepreneurRadioBtn().should('be.disabled')
        homePage.getBirthDay().type("1990-05-01")
        cy.get('.btn-success').click()

        homePage.getShopTab().click()

        this.data.productName.forEach(function (element) {
            cy.selectProduct(element)
        });

        cy.get('.nav-link.btn.btn-primary').click()

    })


})
