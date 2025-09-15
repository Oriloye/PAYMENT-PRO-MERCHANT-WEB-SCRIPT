
Feature: Payment Gateway

Background:
    When Open loginpage
    Given I submit login
            

    Scenario: Disputes
        When user creates disputes 

    Scenario: Refunds
      When user refunds money 
        
    Scenario: Paymentlink
       When open paymentlink 

    Scenario: Basic Page
       When i create basic page

    Scenario: Product page
        When i create product page

    Scenario: Recurring Paymentpage
       When i create recurring page

    Scenario: Split account
       When i create split account

    Scenario: Create Sub Account
       When i create sub account

    Scenario: QR Code
        When Create Qr Code

    Scenario: Dynamic Qr Code
       When Create Multiple Qr Code

    Scenario: Create Subscription
       When Create subscription

    Scenario: Create Plan
       When Create subscription plan

    Scenario: Create Invoicing
        When Create Invoicing
        
    Scenario: Create Reward
       When Create Reward

    Scenario: Create Products
       When Create products

    Scenario: Create Tax
      When Create Tax

    Scenario: Create Coupon
       When Create Coupon




            