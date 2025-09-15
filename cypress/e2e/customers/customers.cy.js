import { When } from "@badeball/cypress-cucumber-preprocessor";
import Customers from "../PageObjects/customers";

const Customer = new Customers

When('User Create All Customer', () =>{
    Customer.allcustomers()
});

When('User Create Payment Customer', () =>{
    Customer.paymentcustomer()
});

When('User Create Banking Customer', () =>{
    Customer.bankingcustomer()
});

When('User View Storefront Customer', () =>{
    Customer.storefrontcustomers()
});
