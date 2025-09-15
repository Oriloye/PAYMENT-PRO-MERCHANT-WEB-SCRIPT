Feature: Account validation

    Background: 
         Given I visit Dev
        When I login with Dev
    

    Scenario: View Account Profile Validation
        Given i validate user can view account profile 

    Scenario: edit profile validation
        Given i validate i can edit profile  

    Scenario: Add team validation
        Given add new team member

    Scenario: Filter team validation
        Given i filter team member list

    Scenario: compliance validation
        Given i validate compliance page    