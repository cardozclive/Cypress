/// <reference types="cypress"/>

describe('My second test suite', function () {

    it('Iterating through product list and adding a specific product to cart', function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('Ca');
        cy.wait(2000);

        cy.get('.products').as('productlocator')

        cy.get('@productlocator').find('.product').each(($e1, index, $list) => {
            const productName = $e1.find('h4.product-name').text();
            if (productName.includes('Cashews')) {
                cy.wrap($e1).find('button').click();
            }
        })

        cy.get('.cart-icon img').click();
        cy.contains('PROCEED TO CHECKOUT').click();
        cy.get('td p.product-name').should('have.text', 'Cashews - 1 Kg')
        cy.get('.promoCode').type('rahulshetty');
        cy.get('.promoBtn').click();
        cy.wait(5000);
        cy.get('.promoInfo').should('have.text','Invalid code ..!');
        cy.get('.promoCode').clear();
        cy.get('.promoCode').type('rahulshettyacademy');
        cy.get('.promoBtn').click();
        cy.wait(5000);
        cy.get('.promoInfo').should('have.text','Code applied ..!');
        cy.contains('Place Order').click();
        const dropdown = cy.get('select')
        dropdown.select('India');
       






    })


})