/// <reference types  ='cypress'/>

describe("My Sixth test suite", function () {
    
    it("Ways of iterating through table and asserting value in corresponding element", function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
/*
        //first way of iterating through table and asserting value in corresponding element
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text();
            if (text.includes('Python'))
             {
                cy.wrap($el).next().should('have.text', '25')

            }
        })
*/
/*
        //second way of iterating through table and asserting value in corresponding element
        cy.get('tr td:nth-child(2)').each(($el,index,$list) =>{
            const text = $el.text()
            if(text.includes('Python'))
            {
                cy.get('tr td:nth-child(2)').eq(index).next().should('have.text', '25')

            }

        })
*/
        //Third way of iterating through table and asserting value in corresponding element     
        cy.get('tr td:nth-child(2)').each(($el,index,$list) =>{
            const text = $el.text()
            if(text.includes('Python'))
            {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
            {
              const priceText =  price.text()
              expect(priceText).to.equal('25')          
            })

            }

        })


    })

})