/// <reference types = 'cypress'/>

describe('Pratik ki band', function () {

    before('Data', function() {
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })

    it.skip('Pratiks Amazon OTP', function () {
        cy.visit('https://www.amazon.in/')
        cy.get("span[class='nav-line-2 ']").click()
        // cy.contains('Sign in').click()
        // cy.get("span[class='nav-line-2 ']").trigger('mouseover',{force: true}).contains('Sign in').click()
        cy.wait(2000)
        cy.get("input[type='email']").type(this.data.PratikMobile)
        cy.get('input#continue').click()
        cy.contains('Forgot password?').click();
        cy.get('input.a-button-input').click()
        cy.wait(100000)
        cy.get('a#resend-approval-link').click()
        cy.wait(130000)
        cy.get('a#resend-approval-link').click()
    })
/*
    it.skip('Pratiks Apple account otp', function () {
        cy.visit('https://iforgot.apple.com/password/verify/appleid')
        cy.contains('Sign In').click()
        cy.get('span#idms-input-labelledby-1730978954764-1').type('')

    })


    it.skip('Pratiks facebook account otp', function () {
        cy.visit('http://www.facebook.com/')
        cy.wait(3000)
        cy.get('a[title="English (UK)"]').click()
        cy.wait(3800)
        cy.get('div._6ltj').click()
        cy.get('input#identify_email').type('fast2pratik@gmail.com')
        cy.get('button#did_submit').click()
        cy.contains('Try another way').click()

    })
*/
    it.skip('Pratiks flipkart account', function () {

        cy.visit('https://www.flipkart.com/')
        cy.get('[class*=L_FVxe]').click()
        cy.get('input[class*="BV+Dqf"]').type(this.data.PratikMobile)
        cy.contains('Request OTP').click()
        cy.wait(16500)
        cy.get('span[class="rMF9Z9"]').click()
        cy.wait(16800)
        cy.get('span[class="rMF9Z9"]').click()
    })

    it('Pratiks Meesho account', function(){
        cy.visit('https://www.meesho.com/')
        cy.get('svg[class*="hover"]').eq(1).trigger('mouseover')
        cy.wait(1000)
        cy.get('span[class*="fpkPeP"]').click()
        cy.get('input[class*="jOtPqu"]').type(this.data.PratikMobile)
        cy.wait(1000)
        cy.get('div[class*="ORNrE"]').click({force: true})
        cy.wait(61000)
        cy.get('span[class*="bRMqVa"]').click()
        cy.wait(61000)
        cy.get('span[class*="bRMqVa"]').click()
    })

    it('Pratiks inDrive account', function(){
        cy.visit('https://intercity.indrive.com/en')
        cy.get('[aria-label="Log in"]').click()
        cy.wait(1000)
        cy.get('[class="i1e5zkh6"]').type(this.data.PratikMobile)
        cy.contains('Get code').click()
        cy.wait(31000)
        cy.contains('Request new code').click()
        cy.wait(31200)
        cy.contains('Request new code').click()

    })

})