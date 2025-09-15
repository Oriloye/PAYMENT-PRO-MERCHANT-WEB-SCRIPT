Feature: report valid 

 
Background: 
         Given I visit Dev
        When I login with Dev

    Scenario: report payment transaction validation
       When i validate report history on a payment transaction

    Scenario: dispute creation on payment transaction report
       Given i create dispute for a payment transaction report    

    Scenario: filter payment transaction report
        Given i filter payment transaction report

    Scenario: funds transfer transaction report validation
       Given i validate single funds transfer transaction report   

    Scenario: filter single funds transfer report validation
        Given i filter single fund transfer report

    Scenario: group fund transfer transaction report validation
        Given i validate group fund transaction report    

    Scenario: filter group Funds Transfer Transaction Report
        Given i filter group fund transfer transaction report

    Scenario: wallet report validation
        Given i validate wallet report

    Scenario: filter wallet report validation
       Given i filter wallet  report 

    Scenario: terminal report validation
       Given i validate terminal report 

    Scenario: filter terminal transaction report validation
        Given i filter terminal transaction report

    Scenario: subscription transaction report validation
        Given i validate subscription transaction 
        
    Scenario: create dispute for a subscription report 
       Given i create dispute for a subscription report

    Scenario: filter subscription report validation
        Given i filter subscription report  

    Scenario: commerce transaction report validation
        Given i validate commerce transaction report  

    Scenario: dispute on commerce transaction report validation
        Given i validate dispute creation on commerce transaction report    
      
    Scenario: filter commerce transaction report validation
        Given i filter commerce transaction report  

    Scenario: remittance transaction report validation
        Given i validate remittance transaction report  

    Scenario: filter remittance transaction report validation
        Given i filter remittance transaction report  

    Scenario: create report validation
        Given i validate report creation

    Scenario: Filter Audits Trail validation
        Given i filter audits trail

    Scenario: remitted tax validation
        Given i validate remited tax

    Scenario: transaction tax validation
        Given i validate transaction tax     
