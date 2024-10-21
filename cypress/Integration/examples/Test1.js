/// <reference types="cypress"/>

describe('My first test suite', function () {

    it('Parent child chaining', function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('Ca');
        cy.wait(2000);
        /*   cy.get('.product:visible').should('have.length', 4);
           //parent child chaining
           cy.get('.products').find('.product').should('have.length', 4);
           cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();
           cy.get('.products').find('.product').each(($e1, index, $list) => {
   
               const textVeg = $e1.find('h4.product-name').text();
   
               if (textVeg.includes('Cashews')) {
                   cy.wrap($e1).find('button').click();
               }
           })
   
           // .product:nth-child(2)
   */
        //FIRST WAY TO ASSERT NUMBER OF PRODUCTS
        cy.get('.product:visible').should('have.length', 4);
        cy.get('.products').as('productlocator')
        // SECOND WAY TO ASSERT NUMBER OF PRODUCTS
        cy.get('@productlocator').find('.product').should('have.length', 4);

        //FIRST WAY TO ADD TO CART BASED ON INDEX OF THE PRODUCT
        cy.get('@productlocator').find('.product').eq(2).contains('ADD TO CART').click().then(function()
    {
        console.log('SF')
    })
        
        //SECOND WAY TO ADD TO CART BASED ON NAME OF THE PRODUCT
        cy.get('@productlocator').find('.product').each(($e1, index, $list) => 
            {
                const productName = $e1.find('h4.product-name').text();
                if(productName.includes('Cashews'))
                {
                    cy.wrap($e1).find('button').click();
                }
            })
        
        //assert if logo text is correctly displayed
        cy.get('.greenLogo').should('have.text', 'GREENKART')

        //This is to print in logs
        cy.get('.greenLogo').then(function (logoElement)
        {
           cy.log(logoElement.text());

        });
        




    })


})