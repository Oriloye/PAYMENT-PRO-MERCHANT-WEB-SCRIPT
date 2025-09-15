import { faker } from "@faker-js/faker"

/* eslint-disable cypress/no-unnecessary-waiting */
class balancemodule {

    //balance 
    submitbtn = "button[type='submit']"
    balancetab = "a[href='/balance']"

    //collection
    withdrawfund = "//div[@id='collection-balance-header']//button[1]//span[1]" //xpath
    transaferbtn = ""
    inputamount = "#amount"
    amount = "500"
    Otpfield = "input[autocomplete='one-time-code']"
    otptoken = "123456"
    SuccessfulCreation = "p[class='mb-2 text-[18px] font-semibold']"
    wallettabb = "//a[@href='/balance/wallet']//span"

    //transfer
    Transfertab = "//span[text()='Transfer']" //xpath
    fundwallet = "//span[text()='Fund Wallet']" //xpath
    collectiontransfer = "//button[.//p[text()='Collection Wallet']]"  //xpath

    //withdraw
    withdrawbtn = "//span[text()='Withdraw']" //xpath
    bankaccount = "//button[.//p[text()='Bank Account']]" //xpath
    opayselect = "//div[text()='OPAY DIGITAL SERVICES LIMITED']" //xpath
    bankdropdown = "#bank"
    inputbankaccount = "#account_number"
    accountnumber = "8063567555"
    narrationField = "#narration"
    narration = "testing"

    

    transferfund(){
        cy.wait(2000)
        cy.get(this.balancetab).click()
        cy.xpath("//button[.//span[text()='Withdraw']]").click();
        cy.xpath("//button[.//p[text()='Transfer Wallet']]").click();
        cy.get(this.inputamount).type(this.amount)
        cy.get(this.submitbtn).click()
        cy.get(this.Otpfield).type(this.otptoken)
        cy.get(this.submitbtn).click()
        cy.get('.w-full > .flex > .text-base').should('be.visible')
    }

    withdrawpayout(){
        cy.get(this.balancetab).click()
        cy.xpath("//button[.//span[text()='Withdraw']]").click();
        cy.xpath("//button[.//p[text()='Payout Account']]").click();
        cy.get(this.inputamount).type(this.amount)
        cy.get(this.submitbtn).click()
        cy.get(this.Otpfield).type(this.otptoken)
        cy.get(this.submitbtn).click()
        cy.get('.w-full > .flex > .text-base').should('be.visible')

    }

    walletcollection(){
         cy.get(this.balancetab).click()
         cy.xpath(this.wallettabb).click()
         cy.xpath("//h1[text()='Wallet Balance']").should('be.visible')

    }

    transfer() {
        cy.get(this.balancetab).click()
        cy.xpath(this.Transfertab).click()
        cy.xpath(this.fundwallet).click()
        cy.xpath(this.collectiontransfer).click()
        cy.get(this.inputamount).type(this.amount)
        cy.get(this.submitbtn).click()
        cy.get(this.Otpfield).type(this.otptoken)
        cy.get(this.submitbtn).click()
        cy.get('.w-full > .flex > .text-base').should('be.visible')

    }

    withdrawcollection(){
         cy.get(this.balancetab).click()
         cy.xpath(this.Transfertab).click()
         cy.xpath(this.withdrawbtn).click()
         cy.xpath(this.bankaccount).click()
         cy.get(this.bankdropdown).click()
         cy.get('input[placeholder="Search..."].flex').type('opay')
         cy.xpath(this.opayselect).click();
         cy.wait(2000)
         cy.get(this.inputbankaccount).type(this.accountnumber)
         cy.get(this.inputamount).type(this.amount)
         cy.get(this.narrationField).type(this.narration)
         cy.wait(3000)
         cy.get(this.submitbtn).click()
         cy.get(this.Otpfield).type(this.otptoken) 
         cy.wait(2000)
        cy.get(this.submitbtn).click()
        cy.get('.w-full > .flex > .text-base').should('be.visible')
    }
    
    



}

export default balancemodule

