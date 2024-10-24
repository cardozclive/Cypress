/// <reference types = 'cypress'/>
import HomePage from '../pageObjects/homepage'
import ProductPage from '../pageObjects/productpage'

describe('My eleventh test suite', () => {

    before('Data', function () {
        //runs once before all tests in the block
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })

    it('Hooks', function () {
        Cypress.config('defaultCommandTimeout', 6000)
        const homePage = new HomePage()
        const productPage = new ProductPage()

        //homepage
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

        //Product page
        this.data.productName.forEach(function (element) {
            cy.selectProduct(element)
        });

        productPage.checkOutBtn().click()
        
        // Assertion
        var sum = 0
        cy.get('tr td:nth-child(4) strong').each(($el, list, index) =>{
        //    cy.log($el.text()) 
           var amount = $el.text().split(" ")[1].trim()
           cy.log(amount)
            sum = Number(sum)+Number(amount)      
        }).then(function(){
            cy.log('total sum ' + sum)
        })

        
        cy.get('td h3 strong').then(function(finalAmtTxt){
            var finalAmount = parseInt(finalAmtTxt.text().split(" ")[1].trim())
            cy.log(finalAmount)
            expect(finalAmount).to.equal(sum)
            if(finalAmount === sum)
                {
                    cy.log("Sum of total of all products matches")
                } else{
                    cy.log("Sum of total of all products doesn't match")
                }
        })
        




        productPage.clickCheckOut().click()
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


})
