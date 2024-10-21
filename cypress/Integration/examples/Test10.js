/// <reference types = 'cypress'/>

describe('My tenth test suite', () => {
    it('Handling calendar', () => {
        const monthNo = "6";
        const date = "15"
        const year = "2027"
        const expectedList = [monthNo, date, year]

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('[href*=offers]').invoke('removeAttr', 'target').click()
        cy.get('.react-date-picker__inputGroup').click()
        cy.get('.react-calendar__navigation__label__labelText--from').click()
        cy.get('.react-calendar__navigation__label__labelText--from').click()
        cy.contains('button', year).click()
        cy.get('.react-calendar__year-view__months__month').eq(Number(monthNo) - 1).click()
        cy.contains('abbr', date).click()
        cy.get('.react-date-picker__inputGroup__input').each(($el, index, $list) => {
            cy.wrap($el).invoke('val').should('eq', expectedList[index])
        })



    })

})
