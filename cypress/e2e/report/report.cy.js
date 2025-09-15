import { Given,When } from "@badeball/cypress-cucumber-preprocessor";
import report from "../PageObjects/report";
 
const reporttest = new report

When('i validate report history on a payment transaction', () => {
    reporttest.reportOnPaymentTransactionTest()
})

Given('i create dispute for a payment transaction report', () => {
    reporttest.disputeonPaymenttransactionReportTest()
})

Given('i filter payment transaction report', () => {
    reporttest.Filterpaymenttransactionreporttest()
})

Given('i validate single funds transfer transaction report', () => {
    reporttest.singlefundTransfertransactionreportTest()
})

Given('i filter single fund transfer report', () => {
    reporttest.filtersingleFundTransferreportTest()
})

Given('i validate group fund transaction report', () => {
    reporttest.groupFundsTransferTransReportTest()
})

Given('i filter group fund transfer transaction report', () => {
    reporttest.filtergroupFundsTransferTransReportTest()
})

Given('i validate wallet report', () => {
    reporttest.walletReportTest()
})

Given('i filter wallet  report', () => {
    reporttest.filterWalletReportTest()
})

Given('i validate terminal report', () => {
    reporttest.terminalreportTest()
})

Given('i filter terminal transaction report', () => {
    reporttest.filterterminalReportTest()
})

Given('i validate subscription transaction', ()=> {
    reporttest.subscriptionTransactionReportTest()
})

Given('i create dispute for a subscription report', () => {
    reporttest.createdisputeforasubscriptionreportTest()
})

Given('i filter subscription report', () => {
    reporttest.filtersubscriptionreportTest()
})

Given('i validate commerce transaction report',() => {
    reporttest.commercereportTest()
})

Given('i validate dispute creation on commerce transaction report', () => {
    reporttest.disputeonCommerceReportTest()
})

Given('i filter commerce transaction report', ()=> {
    reporttest.filtercommercetransactionreportTest()
})

Given('i validate remittance transaction report', () => {
    reporttest.remittanceTransactionrReportTest()
})

Given('i filter remittance transaction report', () => {
    reporttest.filterremittanceTransactionReportTest()
})

Given('i validate report creation', () => {
    reporttest.createReportTest()
})

Given('i filter audits trail', () => {
    reporttest.FilterAudittrailsTest()
})

Given('i validate remited tax', () => {
    reporttest.remitedTaxTest()
})

Given('i validate transaction tax', () => {
    reporttest.transactionTaxTest()

})