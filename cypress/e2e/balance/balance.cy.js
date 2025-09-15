import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import balancemodule from "../PageObjects/balance";

const  balance = new balancemodule


When('I Withdraw from Transfer Wallet', () =>{

balance.transferfund()

});

When('I Withdraw from payout Account', () =>{

balance.withdrawpayout()

});

When('wallet balance', () =>{

balance.walletcollection()

});

When('fund wallet', () =>{

balance.transfer()

});

When('i withdraw from transfer module', () =>{

balance.withdrawcollection()

});