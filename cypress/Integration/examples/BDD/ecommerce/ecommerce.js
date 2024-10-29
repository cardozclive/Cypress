/// <reference types='cypress'/>
const { When, Then, Given } = require("@badeball/cypress-cucumber-preprocessor");
import HomePage from '../../../pageObjects/homepage'
import ProductPage from '../../../pageObjects/productpage'
import '../ecommerce/beforeEach'

const homePage = new HomePage()
const productPage = new ProductPage()

Given('I opened Ecommerce page',function()
{  
    cy.visit(Cypress.env('url')+"/angularpractice")
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

})

When('I add items to cart and Validate the total prices',function()
{
    
    this.data.productName.forEach(function (element) {
        cy.selectProduct(element)
    });

    productPage.checkOutBtn().click()
    var sum = 0
    cy.get('tr td:nth-child(4) strong').each(($el, list, index) => {

        var amount = $el.text().split(" ")[1].trim()
        cy.log(amount)
        sum = Number(sum) + Number(amount)
    }).then(function () {
        cy.log('total sum ' + sum)
    })

    // Assertion - Check if the total of all the amount calculated above matches with total amount displayed on the website 
    cy.get('td h3 strong').then(function (finalAmtTxt) {
        var finalAmount = parseInt(finalAmtTxt.text().split(" ")[1].trim())
        cy.log(finalAmount)
        expect(finalAmount).to.equal(sum)
        if (finalAmount === sum) {
            cy.log("Sum of total of all products matches")
        } else {
            cy.log("Sum of total of all products doesn't match")
        }
    })

    productPage.clickCheckOut().click()
})

Then('select the country, submit and verify thankyou message', () =>
{  
    productPage.typeCountryName().type('India')
    // cy.wait(5000)
    // cy.waitForm('.suggestion a')
    productPage.clickCountry().click();
    // cy.wait(2000)

    productPage.TncCheckbox().click({ force: true })
    productPage.purchaseBtn().click()

    // cy.get('.alert').should('have.text',"Success! Thank you! Your order will be delivered in next few weeks :-).")
    cy.get('.alert').then(function (element) {
        const actualText = element.text()
        expect(actualText.includes('Success!')).to.be.true
    })
    // productPage.alertMsg().invoke('text').should('contain', "Success! Thank you! Your order will be delivered in next few weeks :-).")
})