Feature: Customers

    Background: 
         When Open loginpage
         Given I submit login 

    Scenario: Create All Customer
          When User Create All Customer

    Scenario: Create Payment Customer
          When User Create Payment Customer

    Scenario: Create Banking Customer
          When User Create Banking Customer

    Scenario: View Storefront Customer
          When User View Storefront Customer