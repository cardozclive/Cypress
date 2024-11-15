/// <reference types='cypress'/>


let productName
let orderIdDisplayed

describe('JWT session', function () {
    it('Is logged in through local storage', async () => {
        cy.LoginAPI().then(function () {
            cy.visit('https://rahulshettyacademy.com/client/',
                {
                    onBeforeLoad: function (window) {
                        window.localStorage.setItem('token', Cypress.env('token'))
                    }
                })

        })
        cy.get('.card-body b').eq(1).then(function (element) {
            productName = element.text()
        })
        cy.get('.card-body button:last-of-type').eq(1).click()
        cy.wait(2000)
        cy.get('button[routerlink="/dashboard/cart"]').click()
        cy.wait(2000)
        cy.get('div div.cartSection h3').then(function (e1) {
            expect(e1.text()).to.include('ADIDAS')
        })
        cy.contains('Checkout').click()
        cy.wait(1500)
        cy.get('[placeholder="Select Country"]').type('Ind')
        cy.wait(1000)
        cy.get('.ta-results button').each(($el, index, $list) => {

            if ($el.text().trim() === 'India') {
                cy.wrap($el).click()
            }
        })
        cy.get('.action__submit').click()
        cy.wait(2000)
        cy.get('.order-summary button').contains('Excel').click()
        cy.wait(500)

        cy.get('tbody td label.ng-star-inserted').then(function (ele) {
            const orderIdDisplayedWithExtraCharacters = ele.text()
            console.log(orderIdDisplayedWithExtraCharacters)
            console.log(orderIdDisplayedWithExtraCharacters.split("| ")[1].trim())
            orderIdDisplayed = orderIdDisplayedWithExtraCharacters.split("| ")[1].trim()
        })

        const filePath = Cypress.config('fileServerFolder') + "\\cypress\\downloads\\order-invoice_sobo.xlsx"
        cy.task('excelToJsonConverter', filePath).then(function (result) {
            cy.log(result)
        })

    })





})