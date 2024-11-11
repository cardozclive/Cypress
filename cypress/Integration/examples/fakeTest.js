/// <reference types= 'cypress'/>

describe('API response mocking', function () {

    it('API response mocking', function () {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo')

        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },
            {
                statusCode: 200,
                body: [{
                    "book_name": "Learn Appium Automation with Java",
                    "isbn": "RS531",
                    "aisle": "2275"
                }]
            }).as('bookRetrievals')
      
        cy.get('div button[type="button"]').click() 
        cy.wait('@bookRetrievals').then(({request,response})=>
            {
                cy.get('tbody tr').should('have.length', response.body.length)
            
        })
        cy.get('app-library-dashboard p').should('have.text', 'Oops only 1 Book available')
        // expect('app-library-dashboard p').to.have('Oops only 1 Book available')
        cy.screenshot()
    })




})