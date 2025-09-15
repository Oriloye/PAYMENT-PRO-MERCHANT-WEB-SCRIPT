 class signUp{
    email = "#email"
    password = "#password"
    connfirmPassword = "#confirmPassword"
    businessName = "#businessName"
    countrydrpdown = "#country"
    tc = "#agreeToTerms"
    submitbtn = "button[type='submit']"
    nigeriaclick = "div[data-value='Nigeria']"
    Nigeria = "Nigeria"

createaccount(){
        cy.get(this.email).type('chinso@gmail.com')
        cy.get(this.password).type('Blusalt@2026')
        cy.get(this.connfirmPassword).type('Blusalt@2026')
        cy.get(this.businessName).type('Techpro')
        cy.get(this.countrydrpdown).click()
        cy.get('input[placeholder="Search..."]').type(this.Nigeria)
        cy.get(this.nigeriaclick).click()
        cy.get(this.tc).click()
        cy.get(this.submitbtn).click()

        cy.contains('h5', 'to activate your account. Click on the link to activate your account').should('be.visible')

    }
    

}

export default signUp