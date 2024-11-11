/// <reference types='cypress'/>

describe('API request mocking', function () {

    it('Api request mocking', function () {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo')

        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', (req) => {
            req.url = 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra'
            req.continue((res) => {
                expect(res.statusCode).to.equal(403)
            })
        })

        cy.get('div button[type="button"]').click()




    })



})