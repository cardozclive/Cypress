/// <reference types ='cypress'/>

describe('window', () => {

    it("Database interaction", () => {

        cy.sqlServer('select * from PERSONS').then(function (result) {
            console.log(result[0][1])
            console.log(result[1][3])
            console.log(result[2][2])
            console.log(result)
            
        })

    })

})