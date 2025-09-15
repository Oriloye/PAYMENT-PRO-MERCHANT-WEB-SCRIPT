/* eslint-disable cypress/no-unnecessary-waiting */
class devlogin {
    emailField = "#email"
    passwordField = "#password"
    email = "abass@blusalt.net"
    password = "@Blusalt2027"
    submitbtn = "button[type='submit']"

    login (){
        cy.wait(3000)
        cy.get(this.emailField).type(this.email)
        cy.get(this.passwordField).type(this.password)
        cy.get(this.submitbtn).click()
    }
}

export default devlogin
