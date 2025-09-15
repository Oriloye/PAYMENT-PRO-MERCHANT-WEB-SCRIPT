/* eslint-disable cypress/no-unnecessary-waiting */
/* eslint-disable cypress/unsafe-to-chain-command */
import { faker } from "@faker-js/faker";

class report{
  tabmenu = '//*[@id="root"]/div/div[1]/div/div[1]/aside/div[2]/button/div/div[3]';
  reportBtn = ('.text-white', 'Reports')
  transactionInfo = "//tbody/tr[1]/td[1]"
  createDisputeBtn = "//button[normalize-space()='Create Dispute']"
  disputeTitleBtn = "//input[@placeholder='What is the issue']"
  disputeDescriptionBtn = "//textarea[@id='description']"
  disputeTypeBtn = "//button[@id='type']"
  disputeUploadBtn = "//div[@role='presentation']"
  fruaddisputtypeBtn = "//div[normalize-space()='Fraud']"
  submitBtn = "//button[@type='submit']"
  referenceIdBtn ="//input[@placeholder='Search']"
  filterbypaymethodbtn = "//div[normalize-space()='Payment Method']"
  cardpaymentmethodOption ="//button[@id='card']"
  filterByPaymentSourceBtn = "//div[normalize-space()='Payment Source']"
  paymentlinkPaySourceBtn = "//button[@id='payment-link']"
  filterByStatusBtn = "//div[contains(text(),'Status')]"
  successStatus = "//button[@id='successful']"
  filterbyCurrencyBtn = "//div[contains(text(),'Currency')]"
  nairaCurrency = "//button[@id='NGN']"
  saveFilterBtn = "//button[normalize-space()='Save Filter']"
  resetBtn = "//div[@id='filter-footer']//button[@type='button']"
  fundTransferBtn = "//span[normalize-space()='Fund Transfers']"
  filterByAccountNumber = "//input[@id='accountNumber']"
  filterByBankName = "//input[@id='receiverBankName']"
  walletBtn = "//a[@role='tab']//span[contains(text(),'Wallets')]"
  subscriptionreportBtn = "//a[@role='tab']//span[contains(text(),'Subscriptions')]"
  commerceBtn = "//a[@role='tab']//span[contains(text(),'Commerce')]"
  remittanceBtn = "//span[normalize-space()='Remittance']"
  createReportBtn = ('a', 'Create Report') 
  reportNameBtn = "//input[@id='title']"
  reportDate = "//input[@placeholder='Choose Date']"
  generateReport = "//button[normalize-space()='Generate Report']"
  AuditTrailsBtn = ('a', 'audit-trails')
  filterbyRolesBtn = "//div[contains(text(),'Roles')]"
  filterByEventsBtN = "//div[contains(text(),'Events')]"
  AdminFilterOption = "//button[@id='admin']"
  PrincingFilterOption = "//button[@id='Pricing']"
  taxBtn = ('a[href="/reports/tax"]', 'TAX')
  remitTaxBtn = "//button[normalize-space()='Remit Tax']"
  selectInstitutionBtn = "//button[@name='institution']"
  FRSC = ('div[role="option"]', 'FRSC')
  PayTaxBtn = "//button[normalize-space()='Pay Tax']"
  transactionBtn = "//span[normalize-space()='Transactions']"
  paymentcolumn = "//td[text()='Card']"




  reportOnPaymentTransactionTest(){
    
    cy.contains(this.reportBtn).click();
    cy.xpath(this.paymentcolumn).eq(0).click(); // clicks the 3rd matching element
    cy.xpath("//h1[normalize-space()='Payment Information']").should('be.visible')
    
  }

  disputeonPaymenttransactionReportTest(){
    const disputeTitle = faker.lorem.words(3)
    cy.xpath(this.tabmenu).click()
    cy.contains(this.reportBtn).click();
    cy.xpath(this.paymentcolumn).eq(0).click(); // clicks the 3rd matching element
    cy.xpath(this.createDisputeBtn).click()
    cy.wait(3000)
    cy.xpath(this.disputeTitleBtn).type(disputeTitle)
    cy.xpath(this.disputeDescriptionBtn).type('testing')
    cy.xpath(this.disputeTypeBtn).click()
    cy.xpath(this.fruaddisputtypeBtn).click()
    cy.wait(5000)
    //file upload
   cy.get('input[type="file"][accept="image/*"]').attachFile('code balck.jpeg');

    cy.xpath(this.submitBtn).click()

    cy.xpath("//section[@aria-label='Notifications alt+T']")
  .should('be.visible')
  .and('contain.text', 'Success'); 
  }

  Filterpaymenttransactionreporttest(){
    cy.xpath(this.tabmenu).click()
    cy.contains(this.reportBtn).click();
    cy.get('div.flex.items-center.gap-2').contains('Filter').click();
    cy.xpath("//input[@name='min']").clear().type('100')
    cy.xpath("//input[@name='max']").clear().type('1000')
    cy.xpath(this.referenceIdBtn).type('TCH-dp8O90Dz3')
    cy.xpath(this.filterbypaymethodbtn).first().click()
    cy.xpath(this.cardpaymentmethodOption).click()
    cy.xpath(this.filterByPaymentSourceBtn).first().click()
    cy.xpath(this.paymentlinkPaySourceBtn).click()
    cy.xpath(this.filterByStatusBtn).first().click()
    cy.xpath(this.successStatus).click()
    cy.xpath(this.filterbyCurrencyBtn).first().click()
    cy.xpath(this.nairaCurrency).click()
    cy.xpath(this.saveFilterBtn).click()
    cy.get('div.flex.items-center.gap-2').contains('Filter').click();
    cy.xpath(this.resetBtn).click()
  }

  singlefundTransfertransactionreportTest(){
    cy.xpath(this.tabmenu).click()
    cy.contains(this.reportBtn).click();
    cy.xpath(this.fundTransferBtn).click()
    cy.xpath('//tbody/tr[2]/td[1]').eq(0).click(); // clicks the 3rd matching element
    cy.xpath("//h1[normalize-space()='Payment Information']").should('be.visible')
  }

  filtersingleFundTransferreportTest(){
    cy.xpath(this.tabmenu).click()
    cy.contains(this.reportBtn).click();
    cy.xpath(this.fundTransferBtn).click()
    cy.get('div.flex.items-center.gap-2').contains('Filter').click();
    cy.xpath(this.referenceIdBtn).first().type('TRF-3f546049-96d7-4fd2-95c9-83b6716f8460')
    cy.xpath(this.filterByAccountNumber).type('8132561877')
    cy.xpath(this.filterByBankName).type('000007')
    cy.xpath(this.filterbyCurrencyBtn).first().click()
    cy.xpath(this.nairaCurrency).click()
    cy.xpath(this.filterByStatusBtn).first().click()
    cy.xpath(this.successStatus).click()
    cy.xpath(this.saveFilterBtn).click()
    cy.get('div.flex.items-center.gap-2').contains('Filter').click();
    cy.xpath(this.resetBtn).click()
  }

  groupFundsTransferTransReportTest(){
    cy.xpath(this.tabmenu).click()
    cy.contains(this.reportBtn).click();
    cy.xpath(this.fundTransferBtn).click()
    cy.xpath("//span[normalize-space()='Group Transactions']").click()
    cy.xpath("//td[contains(text(),'ekundayo')]").eq(0).click(); // clicks the 3rd matching element
    cy.xpath("//h1[normalize-space()='Transaction Information']").should('be.visible')
    cy.xpath("//span[normalize-space()='Beneficiaries']").click()
    cy.xpath("//input[@id='receiverAccountName']").type('Suru Avoseh')
  }

  filtergroupFundsTransferTransReportTest(){
    cy.xpath(this.tabmenu).click()
    cy.contains(this.reportBtn).click();
    cy.xpath(this.fundTransferBtn).click()
    cy.xpath("//span[normalize-space()='Group Transactions']").click()
    cy.get('div.flex.items-center.gap-2').contains('Filter').click();
    cy.xpath("//input[@id='groupTag']").first().type('ekundayo')
    cy.xpath(this.filterbyCurrencyBtn).first().click()
    cy.xpath(this.nairaCurrency).click()
    cy.xpath(this.saveFilterBtn).click()
    cy.get('div.flex.items-center.gap-2').contains('Filter').click();
    cy.xpath(this.resetBtn).click()
  }

  walletReportTest(){
    cy.xpath(this.tabmenu).click()
    cy.contains(this.reportBtn).click();
    cy.xpath(this.walletBtn).click()
    cy.xpath(this.paymentcolumn).eq(0).click(); // clicks the 3rd matching element

  }
  
  filterWalletReportTest(){
    cy.xpath(this.tabmenu).click()
    cy.contains(this.reportBtn).click();
    cy.xpath(this.walletBtn).click()
    cy.get('div.flex.items-center.gap-2').contains('Filter').click();
    cy.xpath("//input[@name='min']").clear().type('100')
    cy.xpath("//input[@name='max']").clear().type('1000')
    cy.xpath(this.referenceIdBtn).type('TST-06/21/2025_2581')
    cy.xpath(this.filterbypaymethodbtn).first().click()
    cy.xpath(this.cardpaymentmethodOption).click()
    cy.xpath(this.filterByPaymentSourceBtn).first().click()
    cy.xpath(this.paymentlinkPaySourceBtn).click()
    cy.xpath(this.filterByStatusBtn).first().click()
    cy.xpath(this.successStatus).click()
    cy.xpath(this.filterbyCurrencyBtn).first().click()
    cy.xpath(this.nairaCurrency).click()
    cy.xpath(this.saveFilterBtn).click()
    cy.get('div.flex.items-center.gap-2').contains('Filter').click();
    cy.xpath(this.resetBtn).click()
  }

  terminalreportTest(){
    cy.xpath(this.tabmenu).click()
    cy.contains(this.reportBtn).click();
    cy.xpath("//span[normalize-space()='Terminals']").click()
    cy.xpath("//td[contains(text(),'Payment Collection')]").eq(0).click(); // clicks the 3rd matching element']").should('be.visible')
  }

  filterterminalReportTest(){
    cy.xpath(this.tabmenu).click()
    cy.contains(this.reportBtn).click();
    cy.xpath("//span[normalize-space()='Terminals']").click()
    cy.get('div.flex.items-center.gap-2').contains('Filter').click();
    cy.xpath(this.referenceIdBtn).type('cwQ7rKM1azrZXj5KOSD-f')
    cy.xpath(this.successStatus).click()
    cy.xpath(this.saveFilterBtn).click()
    cy.get('div.flex.items-center.gap-2').contains('Filter').click();
    cy.wait(5000)
    cy.xpath(this.resetBtn).click()
  }


  subscriptionTransactionReportTest(){
    cy.xpath(this.tabmenu).click()
    cy.contains(this.reportBtn).click()
    cy.xpath(this.subscriptionreportBtn).click()
    cy.xpath(this.paymentcolumn).eq(0).click(); // clicks the 3rd matching element
    cy.xpath("//h1[normalize-space()='Payment Information']").should('be.visible')
  }

  createdisputeforasubscriptionreportTest(){
    const disputeTitle = faker.lorem.words(3)
    const disputeDescription = faker.lorem.sentences(2)
    cy.xpath(this.tabmenu).click()
    cy.contains(this.reportBtn).click()
    cy.xpath(this.subscriptionreportBtn).click()
    cy.xpath(this.paymentcolumn).eq(0).click(); // clicks the 3rd matching element
    cy.xpath(this.createDisputeBtn).click()
    cy.wait(3000)
    cy.xpath(this.disputeTitleBtn).type(disputeTitle)
    cy.xpath(this.disputeDescriptionBtn).type(disputeDescription)
    cy.xpath(this.disputeTypeBtn).click()
    cy.xpath(this.fruaddisputtypeBtn).click()
    cy.wait(5000)
    //file upload
    cy.get('input[type="file"][accept="image/*"]').attachFile('code balck.jpeg');

    cy.xpath(this.submitBtn).click()

    cy.xpath("//section[@aria-label='Notifications alt+T']")
  .should('be.visible')
  .and('contain.text', 'Success'); 
  }
  
  filtersubscriptionreportTest(){
    cy.xpath(this.tabmenu).click()
    cy.contains(this.reportBtn).click()
    cy.xpath(this.subscriptionreportBtn).click()
    cy.get('div.flex.items-center.gap-2').contains('Filter').click();
    cy.xpath("//input[@name='min']").clear().type('100')
    cy.xpath("//input[@name='max']").clear().type('1000')
    cy.xpath(this.referenceIdBtn).type('TEST-TCH-9xRby91nG')
    cy.xpath(this.filterbypaymethodbtn).first().click()
    cy.xpath(this.cardpaymentmethodOption).click()
    cy.xpath(this.filterByStatusBtn).first().click()
    cy.xpath(this.successStatus).click()
    cy.xpath(this.filterbyCurrencyBtn).first().click()
    cy.xpath(this.nairaCurrency).click()
    cy.xpath(this.saveFilterBtn).click()
    cy.get('div.flex.items-center.gap-2').contains('Filter').click();
    cy.xpath(this.resetBtn).click()
  }

  commercereportTest(){
    cy.xpath(this.tabmenu).click()
    cy.contains(this.reportBtn).click()
    cy.xpath(this.commerceBtn).click()
    cy.xpath(this.paymentcolumn).eq(0).click(); // clicks the 3rd matching element
    cy.xpath("//h1[normalize-space()='Payment Information']").should('be.visible')
  }

  disputeonCommerceReportTest(){
    const disputeTitle = faker.lorem.words(3)
    cy.xpath(this.tabmenu).click()
    cy.contains(this.reportBtn).click()
    cy.xpath(this.commerceBtn).click()
    cy.xpath(this.paymentcolumn).eq(0).click(); // clicks the 3rd matching element
    cy.xpath(this.createDisputeBtn).click()
    cy.wait(3000)
    cy.xpath(this.disputeTitleBtn).type(disputeTitle)
    cy.xpath(this.disputeDescriptionBtn).type('automationtesting')
    cy.xpath(this.disputeTypeBtn).click()
    cy.xpath(this.fruaddisputtypeBtn).click()
    cy.wait(5000)
    //file upload
    cy.get('input[type="file"][accept="image/*"]').attachFile('code balck.jpeg');
    cy.xpath(this.submitBtn).click()

    cy.xpath("//section[@aria-label='Notifications alt+T']")
  .should('be.visible')
  .and('contain.text', 'Success'); 
  }

  filtercommercetransactionreportTest(){
    cy.xpath(this.tabmenu).click()
    cy.contains(this.reportBtn).click()
    cy.xpath(this.commerceBtn).click()
    cy.get('div.flex.items-center.gap-2').contains('Filter').click();
    cy.xpath("//input[@name='min']").clear().type('100')
    cy.xpath("//input[@name='max']").clear().type('1000')
    cy.xpath(this.referenceIdBtn).type('TEST-TCH-24OkjFxbt')
    cy.xpath(this.filterbypaymethodbtn).first().click()
    cy.xpath(this.cardpaymentmethodOption).click()
    cy.xpath(this.filterByStatusBtn).first().click()
    cy.xpath(this.successStatus).click()
    cy.xpath(this.filterbyCurrencyBtn).first().click()
    cy.xpath(this.nairaCurrency).click()
    cy.xpath(this.saveFilterBtn).click()
    cy.get('div.flex.items-center.gap-2').contains('Filter').click();
    cy.xpath(this.resetBtn).click()
  }

  remittanceTransactionrReportTest(){
    cy.xpath(this.tabmenu).click()
    cy.contains(this.reportBtn).click()
    cy.xpath(this.remittanceBtn).click()
    cy.xpath("//div[text()='Processing']").eq(0).click(); // clicks the 3rd matching element
    cy.xpath("//h1[normalize-space()='Sender Information']").should('be.visible')
    cy.wait(2000)
    cy.xpath("//h1[normalize-space()='Receiver Information']").should('be.visible')
    cy.wait(2000)
    cy.xpath("//h1[normalize-space()='Transaction Information']").should('be.visible')
    cy.wait(2000)
    cy.xpath("//h1[normalize-space()='Transaction Timeline']").should('be.visible')
  }

  filterremittanceTransactionReportTest(){
    cy.xpath(this.tabmenu).click()
    cy.contains(this.reportBtn).click()
    cy.xpath(this.remittanceBtn).click()
    cy.get('div.flex.items-center.gap-2').contains('Filter').click();
    cy.xpath(this.referenceIdBtn).type('LR-uifNpxjyRiGRZFwktnnkS')
    cy.xpath("//button[@id='POSTED']").click
    cy.xpath(this.saveFilterBtn).click()
    cy.get('div.flex.items-center.gap-2').contains('Filter').click();
    cy.xpath(this.resetBtn).click()
  }

  createReportTest(){
    const ReportTitle = faker.lorem.words(2)
    cy.xpath(this.tabmenu).click()
    cy.contains(this.reportBtn).click()
    cy.contains(this.createReportBtn).click()
    cy.xpath(this.reportNameBtn).type(ReportTitle)
cy.wait(4000)
  // Open the date picker
cy.xpath(this.reportDate)
  .should('be.visible')
  .click();

const today = new Date().getDate();
const randomEndDay = Math.floor(Math.random() * (30 - today)) + today + 1;

// Click start date in LEFT calendar
cy.xpath("(//div)[60]")
  .should('be.visible')
  .contains(new RegExp(`^${today}$`))
  .click();

cy.xpath("(//div)[72]")
  .find('button:not([disabled])')
  .then($buttons => {
    const count = $buttons.length;
    const randomIndex = Math.floor(Math.random() * count);
    cy.wrap($buttons[randomIndex]).click({ force: true });
  });
    // send Esc to the body
  cy.get('body').type('{esc}');
//financial report
  cy.xpath("//body/div[@id='root']/div/div/main/section/form/div/button[1]").click({force:true})
  cy.xpath("//button[@id='section']").click()
  cy.xpath("//div[normalize-space()='Wallet']").click()
  cy.xpath(this.generateReport).click()

  cy.xpath("//section[@aria-label='Notifications alt+T']")
  .should('be.visible')
  .and('contain.text', 'Success');

  }

  FilterAudittrailsTest(){
    cy.xpath(this.tabmenu).click()
    cy.contains(this.reportBtn).click()
    cy.get('a[href="/reports/audit-trails"]').within(() => {
    cy.contains('Audit Trails').click();
    });
    cy.get('div.flex.items-center.gap-2').contains('Filter').click();
    cy.xpath(this.filterbyRolesBtn).click()
    cy.xpath(this.AdminFilterOption).click()
    cy.xpath(this.filterByEventsBtN).click()
    cy.xpath(this.PrincingFilterOption).click()
    cy.xpath(this.saveFilterBtn).click()
    cy.get('div.flex.items-center.gap-2').contains('Filter').click();
    cy.xpath(this.resetBtn).click()



  }

  remitedTaxTest(){
    cy.wait(10000)
    cy.xpath(this.tabmenu).click()
    cy.contains(this.reportBtn).click()
    cy.contains(this.taxBtn).click()
    cy.xpath("//div[text()='Remitted']").eq(0).click(); // clicks the 3rd matching element
    cy.xpath(this.remitTaxBtn).click()
    cy.xpath(this.selectInstitutionBtn).click()
     cy.get('[cmdk-item]').eq(0).click(); // Select option
       cy.get('body').type('{esc}');
    cy.xpath(this.PayTaxBtn).click()
    cy.xpath("//section[@aria-label='Notifications alt+T']")
  .should('be.visible')
  .and('contain.text', 'Success');
  }

  transactionTaxTest(){
    cy.xpath(this.tabmenu).click()
    cy.contains(this.reportBtn).click()
    cy.contains(this.taxBtn).click()
    cy.xpath(this.transactionBtn).click()
    cy.get('div.flex.items-center.gap-2').contains('Filter').click();
    cy.xpath(this.referenceIdBtn).type('TEST-TCH-9xRby91nG')
    cy.xpath("//input[@name='min']").clear().type('100')
    cy.xpath("//input[@name='max']").clear().type('1000') 
    cy.xpath(this.saveFilterBtn).click()
    cy.get('div.flex.items-center.gap-2').contains('Filter').click();
    cy.xpath(this.resetBtn).click()



  }

  






}
export default report