import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import signUp from "../PageObjects/signUp";

 const createaccount = new signUp

 Given ('URL', () => {
        cy.visit('https://staging-payment-pro.blusalt.net/auth/signup')
 })


 When('should confirm email via verification link', () =>{
 
 createaccount.createaccount()
 
 });
 
