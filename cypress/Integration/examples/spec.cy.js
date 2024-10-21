describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.vervali.com/');
    cy.get('.cc-deny').click();
  })
})