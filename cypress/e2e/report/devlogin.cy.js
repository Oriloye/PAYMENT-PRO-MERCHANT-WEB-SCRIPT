import { Given, When } from "@badeball/cypress-cucumber-preprocessor"
import devlogin from "../PageObjects/devlogin"

const dev = new devlogin


Given('I visit Dev', () => {
cy.visit('https://dev-payment-pro.blusalt.net/')
})

When('I login with Dev', () => {
dev.login()
})


