describe("API Testing", function(){

it("API Testing", function()
{
    cy.request('POST', "http://216.10.245.166/Library/Addbook.php", {
        "name": "Learn Appium automation with Java",
        "isbn": "bcfdh",
        "aisle": "22fe",
        "author": "John Fee"
        }).then(function(response)
        {
        expect(response.body).to.have.property("Msg","successfully added")
        expect(response.status).to.eq(200)
        })

})

} )