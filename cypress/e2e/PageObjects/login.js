/* eslint-disable cypress/no-unnecessary-waiting */
class login{

    emailField = "#email"
    passwordField = "#password"
    loginBtn = "button[type='submit']"
    otpField = "input[class='disabled:cursor-not-allowed']"
    email = "endurance+1000@blusalt.net"
    password = "Ekundayo9189@@"
    otp = "123456"
    submit = "button[type='submit']"


loginTestcase(){
cy.wait(4000)
cy.get(this.emailField).type(this.email)
cy.get(this.passwordField).type(this.password)
cy.get(this.loginBtn).click()
// cy.get(this.otpField).type(this.otp)
// cy.get(this.submit).click()



}}



export default login