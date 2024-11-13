/// <reference types='cypress'/>

describe('API request mocking', function () {

    it('Api request mocking', function () {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo')

        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', (req) => {
            req.url = 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra'
           return req
            // req.continue((res) => {
            //     // expect(res.statusCode).to.equal(403)
            // })
        }).as('dummyURL')
        

        cy.get('div button[type="button"]').click()
        cy.wait('@dummyURL')




    })



})