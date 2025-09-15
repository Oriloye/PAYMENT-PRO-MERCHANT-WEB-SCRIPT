import { Given } from "@badeball/cypress-cucumber-preprocessor";
import account from "../PageObjects/account";

const accountmodule = new account
 

Given('i validate user can view account profile', () => {
    accountmodule.viewProfileTest()
})

Given('i validate i can edit profile', () => {
    accountmodule.editProfileTest()
})

Given('add new team member', () => {
    accountmodule.AddTeamTest()
})

Given('i filter team member list', () => {
    accountmodule.filterTeamTest()
})

Given('i validate compliance page', () => {
    accountmodule.viewCompliancetest()
})