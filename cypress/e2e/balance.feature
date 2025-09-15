Feature: Balance

    Background: 
        Given I visit Dev
        When I login with Dev

    Scenario: withdraw from transfer
        When I Withdraw from Transfer Wallet

    Scenario: i withdraw from payout
        When I Withdraw from payout Account

     Scenario: i check wallet balance
        When wallet balance

    Scenario: Fund wallet via transfer module
        When fund wallet

    Scenario: withdraw via transfer module
        When i withdraw from transfer module



