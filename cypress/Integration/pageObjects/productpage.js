class ProductPage
{

checkOutBtn()
{
    return cy.get('.nav-link.btn.btn-primary')
}

clickCheckOut()
{
    return cy.get('.btn.btn-success')
}

typeCountryName()
{
    return cy.get('#country')
}

clickCountry()
{
    return cy.get('div.suggestions ul li a',  { timeout: 5500 })
}

TncCheckbox()
{
    return  cy.get('#checkbox2')
}

purchaseBtn()
{
    return cy.get('.btn.btn-success.btn-lg')
}

alertMsg()
{
    cy.get('.alert-success')
}



}

export default ProductPage