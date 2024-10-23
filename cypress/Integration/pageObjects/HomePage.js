class HomePage
{

    getName()
    {

      return  cy.get(':nth-child(1) > .form-control')
    }

    getTwoWayDataBindin()
    {

        return cy.get("input[class='ng-untouched ng-pristine ng-valid']")
    }

    

    getEmail()
    {

        return cy.get('[name="email"]')
    }

    getPassword()
    {
        return cy.get('#exampleInputPassword1')
    }

    getCheckBox()
    {
        return cy.get('#exampleCheck1')
    }

    getGender()
    {
        return cy.get('#exampleFormControlSelect1')
    }

    getEmpRadioBtn()
    {
        return cy.get('#inlineRadio2')
    }

    getBirthDay()
    {
        return cy.get('[name="bday"]')
    }

    getEntepreneurRadioBtn()
    {
        return cy.get('#inlineRadio3')
    }

    getShopTab()
    {
        return cy.get('[href*="shop"]')
    }

    getCart()
    {
        cy.get('.nav-link.btn.btn-primary')
    }

}

export default HomePage;

