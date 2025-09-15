import {faker} from '@faker-js/faker';
/* eslint-disable cypress/no-unnecessary-waiting */

class Paymentgateway{

//paymentlink
    Paymentlinktab = "//span[normalize-space()='Payment Links']"
    Createpaylink = "//span[normalize-space()='Create Payment Link']"
    namefield = "#name"
    descriptionfield = "#description"
    amountfield = "#amount"
    paylinkref = "#reference"
    expirydatebox = "#expire"
    submitbtn = "button[type='submit']"
    name = "endy"
    description = "testing"
    paylinkamount = "50000"
    amount = "500"
    linkref = "quality"

// payment page element
    paymentPageBtn = "//a[@href='/payment-gateway/payment-page']//span" // xpart
    createPaymentPageBTN = "div[id='payment-pages-header'] button[type='button'] span"
    basicPageBTN = "//span[normalize-space()='Create a simple one time payment page.']" // expart
    currencyfield = "#currency"
    naira = "//div[contains(text(),'NGN')]"
    previewPage ="//button[normalize-space()='Preview']" // expert
    closebtn = "//button[normalize-space()='Close']" // xpath
    nextBtn = "//button[normalize-space()='Next']" //xpath
    Ngncurrency = '[data-value="NGN"]'
    currencyField = "button[name='currency']"
    
    // product page element
     
    productBTN = "//span[contains(text(),'Collect payments for a product or service you are ')]" // expert
    pageTitleBtn = "input[placeholder='Payment Page Title']"
    selectProductBTN = "#products"
    product = "div[data-value='cooked']"

    // recurring page element
    Recurringbtn = "//p[normalize-space()='Recurring payment Page']"
    plandropdown = "#plan"
    

    //Split payment page
    Splitpaymenttab = "//a[@href='/payment-gateway/split-payments']//span" //xpath
    Splitpaymentcreation = "//span[normalize-space()='Create Split Group']" //xpath
    Subaccountdropdown = "//span[normalize-space()='Choose Sub Account to add']" //xpath
    Splitentervalue = "button[name='sub_accounts'] span"
    Splitvaue = "50"
    closeVA = "body > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > button:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > svg:nth-child(1) > path:nth-child(1)"

    //subaccount 
    Subaccounttab = "//span[normalize-space()='Sub Accounts']" //xpath
    SubaccountCreation = "//span[normalize-space()='Add SubAccount']" //xpath
    bankname = "button[name='bank_name'] span"
    inputacctnumber = "#account_number"
    Accountnumber = "8063567555"
    subaccname ="//input[@placeholder='Give this Sub Account a name e.g. Savings Account']"
    palmpay = "palmpay"


//QRCODES
    Qrcodetab = "//span[normalize-space()='QR Codes']"  //xpath
    QrcodeCreation = "//span[normalize-space()='Create QR Code']" //xpath
    DynamicQrcodeCreation = "//p[normalize-space()='Dynamic']" //xpath
    SuccessfulCreation = "p[class='mb-2 text-[18px] font-semibold']"

 //multipledynmic
    multipledynamicQrcodeCreation = "//p[normalize-space()='Dynamic Multiple']" //xpath
    Choosesubacctinfo = "#sub_accounts"


//Plan
    Subscriptiontab = "//span[normalize-space()='Subscriptions']" //xpath
    Subscriptioncreation = "//span[normalize-space()='Create Subscription']" //xpath
    plandropdown ="#plan"
    coupondropdown = "#coupon"
    walletdropdown = "button[name='wallet'] span"
    PlanCreation = "//span[normalize-space()='Create Plan']" //xpath
    plantab = "//span[@class='min-w-16 text-center'][normalize-space()='Plans']" //xpath
    Subtypedropdown = "#subscription_type"
    Intervaldropdown = "#interval"
    monthlyoptiondropdown = "div[id='radix-:r1d8:']" 
    onetimesubtype = "div[id='radix-:r1d1:']"

//invoicing 
    invoicingtab = "a[href='/payment-gateway/invoicing']" //xpath
    Invoicingcreation = "//span[normalize-space()='Create Invoice']" //xpath
    customerdropdown = "#customer"
    issuedate = "//input[@placeholder='Pick Issue Date']"
    endingdate = "//input[@placeholder='Pick Expiry Date']"
    itemname = "button[id='line_items.[0]']"
    itemquatintty = "input[id='line_items[0].quantity']"
    quantity  = "50"
    Createinvoicebtn = "//span[@class='hidden lg:block'][normalize-space()='Create Invoice']"
    invoicestartdate = "//button[@aria-label='Sunday, July 27th, 2025']"
    invoiceenddate = "//button[@aria-label='Thursday, July 31st, 2025']"


//RewardCheckout
    rewardcheckout = "//span[normalize-space()='Checkout Rewards']" //xpath
    rewardtab = "//span[@class='min-w-16 text-center'][normalize-space()='Rewards']" //xpath
    rewardcreation = "//span[normalize-space()='Create Reward']" //xpath
    rewardname = "#rewardName"
    rewardcatergory = "#categoryRef"
    rewardpoints = "#rewardPoints"
    startdate = "#startDate"
    enddate = "#endDate"
    userlimit = "#userLimit"
    jule22 = "button[aria-label='Tuesday, July 22nd, 2025']"
    june30 = "button[aria-label='Thursday, July 31st, 2025']"

//Productspage
    productstab = "//span[@class='inline-flex text-nowrap'][normalize-space()='Products']" //xpath
    addproducts = "//span[normalize-space()='Add Product']" //xpath
    taxdropdown = "#TaxId" 
    uploadimage = "div[role='presentation']"
    productssuccessful = "span[class='text-base text-black']"

//tax
    taxtab = "//span[@class='min-w-16 text-center'][normalize-space()='Tax']" //xpath
    createtax = "//span[normalize-space()='Create Tax']" //xpath
    taxtypedropdown = "#tax_type"
    countrydropdown = "#country"
    Nigeria = "Niger"
    currency = "//div[contains(text(),'NGN')]"
    currencyField = "button[name='currency']"
    nigeriaclick = "div[data-value='Nigeria']"
    ratedropdown = "input[placeholder='Enter rate']input[placeholder='Enter rate']"
    taxvariantdropdown = "button[name='type']"
//coupondropdon
    coupontab = "//a[span[text()='Coupons']]" //xpath
    createcoupon = "//span[normalize-space()='Create Coupon']" //xpath
    selectproductdropdown = "#forPlans"
    couponcodeinput = "#couponCode"
    discountype = "#discountType"
    maxnumberofredp = "#numberAvailable"


//transaction
trasactiontab = "//a[@href='/payment-gateway/transactions']//span" //xpath
disputetab = "//span[contains(text(), 'Disputes')]" //xpath
createdispute = "//button[.//span[text()='Create Dispute']]" //xpath
title = "#title"
disputetype = "#type"
transactionref = "#payment_reference"
reference = "TEST-TCH-4TOuHRlxn"
disputecatergory = "#category"

//refund
paymentcolumn = "//td[text()='Card']"
refundbtn = "//button[text()='Refund']"
Otpfield = "input[autocomplete='one-time-code']"
     otptoken = "123456"



Disputecreation(){
  cy.wait(3000)
  cy.xpath(this.trasactiontab).click()
  cy.xpath(this.disputetab).click()
  cy.xpath(this.createdispute).click()
  cy.get(this.title).type('automationtesting')
  cy.get(this.descriptionfield).type(this.description)
  cy.get(this.disputetype).click()
  cy.get('[cmdk-item]').eq(0).click(); // Select option
        cy.get('body').type('{esc}');
  cy.get(this.transactionref).type(this.reference)
  cy.get(this.disputecatergory).click()
  cy.get('[cmdk-item]').eq(0).click(); // Select option
  cy.get('body').type('{esc}');
  cy.get('input[type="file"][accept="image/*"]').attachFile('code balck.jpeg');

  cy.get(this.submitbtn).click()
  cy.get('section[aria-label="Notifications alt+T"]').should('be.visible')


    
}

refundmoney(){
  cy.xpath(this.trasactiontab).click()
  cy.xpath(this.paymentcolumn).eq(0).click(); // clicks the 3rd matching element
  cy.xpath(this.refundbtn).click()
  cy.get(this.amountfield).type('50')
  cy.get(this.submitbtn).click()
  cy.get(this.Otpfield).type(this.otptoken)
  cy.get(this.submitbtn).click()
   cy.xpath("//p[text()='Your refund request is successful']").should('be.visible')
}


paymentlinktest() {
    cy.wait(4000)
    cy.xpath(this.Paymentlinktab).should('be.visible')
    cy.xpath(this.Paymentlinktab).click()
    cy.xpath(this.Createpaylink).click()
    const randomName = faker.person.fullName();
    cy.get(this.namefield).type(randomName)
    cy.get(this.descriptionfield).type(this.description)
    cy.get(this.amountfield).type(this.paylinkamount)
    const ref = faker.string.alphanumeric(8).toUpperCase(); // e.g., 'A1B2C3D4'
    cy.get(this.paylinkref).type(ref)
    cy.get(this.expirydatebox).click()
    cy.get(this.submitbtn).click()
    cy.get('section[aria-label="Notifications alt+T"]').should('be.visible')
}


    createbasicPage(){
        cy.wait(4000)
        cy.xpath(this.paymentPageBtn).click()
        cy.get(this.createPaymentPageBTN).click()
        cy.xpath(this.basicPageBTN).click()
        cy.wait(2000)
        cy.get(this.namefield).type(this.name)
        cy.get(this.descriptionfield).type(this.description)
        cy.get(this.currencyField).click()
        cy.get(this.Ngncurrency).click()
        cy.get(this.amountfield).type(this.amount)

        cy.wait(1000); 
        cy.xpath(this.nextBtn).click()
        cy.get(this.expirydatebox).click()
        cy.get(this.submitbtn).click()
        cy.contains('Payment Page Created Successfully').should('be.visible')
 
    }

    createProductPage(){
      cy.wait(2000)
        cy.xpath(this.paymentPageBtn).click()
        cy.get(this.createPaymentPageBTN).click()
    
        cy.xpath(this.productBTN).click()
        cy.get(this.namefield).type(this.name)
        cy.get(this.descriptionfield).type(this.description)
        cy.get(this.currencyField).click()
        cy.get(this.Ngncurrency).click()
        cy.get(this.selectProductBTN).click()
        cy.get('[cmdk-item]').eq(0).click(); // Select option
        cy.get('body').type('{esc}');

        cy.xpath(this.nextBtn).click()
        cy.get(this.expirydatebox).click()
        cy.get(this.submitbtn).click()
        cy.contains('Payment Page Created Successfully').should('be.visible')
        
        }


  createRecurringPAGE(){
        cy.xpath(this.paymentPageBtn).click()
        cy.get(this.createPaymentPageBTN).click()
        cy.xpath(this.Recurringbtn).click()
        cy.get(this.namefield).type(this.name)
        cy.get(this.descriptionfield).type(this.description)
        cy.get(this.currencyField).click()
        cy.get(this.Ngncurrency).click()
        cy.get(this.plandropdown).click()
         cy.get('[cmdk-item]').eq(0).click(); // Select option
        cy.get('body').type('{esc}');
        cy.xpath(this.nextBtn).click()
        cy.get(this.expirydatebox).click()
        cy.get(this.submitbtn).click()
        cy.contains('Payment Page Created Successfully').should('be.visible')
    

        }

  SplitpaymentCreation(){
    cy.wait(4000)
        cy.xpath(this.Splitpaymenttab).click()
        cy.xpath(this.Splitpaymentcreation).click()
        const randomName = faker.person.fullName();
        cy.get(this.namefield).type(randomName)
        cy.xpath(this.Subaccountdropdown).click()

        cy.wait(2000)
        cy.get('[cmdk-item]').eq(0).click(); // Select option
        cy.get('body').type('{esc}');

        cy.wait(2000)

      
        cy.get("input[id='sub_accounts.[0].split_value']").type('80')
       
    
        cy.get(this.submitbtn).click()
    
        cy.contains('split payment created').should('be.visible')

        }

    SubAccountCreation(){
      cy.wait(4000)
            cy.xpath(this.Splitpaymenttab).click()
            cy.xpath(this.Subaccounttab).click()
            cy.xpath(this.SubaccountCreation).click()
            cy.get(this.bankname).type(this.palmpay)
            cy.get('[cmdk-item]').eq(0).click(); // Select option
        

        cy.get(this.inputacctnumber).type('8063567555')
        cy.get(this.namefield).type("random")
        cy.wait(2000)
        cy.get(this.submitbtn).click()
    }

qrcodecreation() {
        cy.wait(4000)
        cy.xpath(this.Qrcodetab).should('be.visible')
        cy.xpath(this.Qrcodetab).click()
        cy.xpath(this.QrcodeCreation).click()
        cy.xpath(this.DynamicQrcodeCreation).click()
        cy.get(this.namefield).type(this.name)
        cy.get(this.descriptionfield).type(this.description)
        cy.get(this.amountfield).type(this.amount)
        cy.get(this.expirydatebox).click()
        cy.get(this.submitbtn).click()
        cy.get(this.SuccessfulCreation).should('be.visible')

    }

multipledynamicqrcode() {
        cy.wait(4000)
        cy.xpath(this.Qrcodetab).click()
        cy.xpath(this.QrcodeCreation).click()
        cy.xpath(this.multipledynamicQrcodeCreation).click()
        cy.get(this.namefield).type(this.name)
        cy.get(this.descriptionfield).type(this.description)
        cy.get(this.Choosesubacctinfo).click()

        cy.get('[role="group"]').should('be.visible').each(() => {
            cy.get('[role="option"]').then($options => {
              const randomIndex = Math.floor(Math.random() * $options.length);
              cy.wrap($options[randomIndex]).click();
            });
          });
          
    
    
        cy.get('[role="dialog"] + div') // assuming overlay is next to modal
        .click({ force: true });
        
    
    cy.get(this.expirydatebox).click()
    cy.get(this.submitbtn).click()
    cy.get(this.SuccessfulCreation).should('be.visible')

    }


  plancreation() {
        cy.xpath(this.Subscriptiontab).click()
        cy.xpath(this.plantab).click()
        cy.xpath(this.PlanCreation).click()
        const randomName = faker.person.fullName();
        cy.get(this.namefield).type(randomName)
        
        cy.get(this.descriptionfield).type(this.description)
        cy.get(this.amountfield).type(this.amount)
        cy.get(this.Subtypedropdown).click()
        cy.get('[cmdk-item]').eq(0).click(); // Select option
        cy.get('body').type('{esc}');
        
        cy.get(this.Intervaldropdown).click()

        cy.get('[cmdk-item]').eq(0).click(); // Select option
        cy.get('body').type('{esc}');
        
        cy.get(this.submitbtn).click()
        cy.get('section[aria-label="Notifications alt+T"]').should('be.visible')
        


    }

    subscriptioncreations() {
        cy.wait(3000)
        cy.xpath(this.Subscriptiontab).click()
        cy.wait(3000)
        cy.xpath(this.Subscriptioncreation).click()
        cy.get(this.plandropdown).click()
         
        cy.get('[cmdk-item]').eq(0).click(); // Select option
        cy.get('body').type('{esc}');

           cy.get(this.coupondropdown).click()

        cy.get('[cmdk-item]').eq(0).click(); // Select option
        cy.get('body').type('{esc}');
    
       
        cy.get(this.walletdropdown).click()

        cy.get('[cmdk-item]').eq(0).click(); // Select option
        cy.get('body').type('{esc}');
       
        cy.get(this.submitbtn).click()
        cy.get('.flex > .text-base').should('be.visible')

  }
    
  invoicingcreation() {
         cy.wait(4000)
        cy.get(this.invoicingtab).should('be.visible')
        cy.get(this.invoicingtab).click()
        cy.xpath(this.Invoicingcreation).click()
        cy.get(this.customerdropdown).click()
        
        cy.get('[cmdk-item]').eq(0).click(); // Select option
        cy.get('body').type('{esc}');

        cy.xpath(this.issuedate).click()
        cy.xpath(this.invoicestartdate).click()
        cy.get('body').type('{esc}');
        

      cy.wait(2000)

        cy.xpath(this.endingdate).click()
        cy.xpath(this.invoiceenddate).click()
        cy.get('body').type('{esc}');
        cy.wait(2000)
        cy.get(this.descriptionfield).type(this.description)

        cy.get(this.itemname).click()
        cy.get('[cmdk-item]').eq(0).click(); // Select option
        cy.get('body').type('{esc}');
  
        cy.wait(2000)
        cy.get(this.itemquatintty).type("7")
        cy.contains(this.submitbtn, 'Create Invoice').click();
        cy.get(this.SuccessfulCreation).should('be.visible')

        
    }

  rewardcreations() {
        cy.wait(3000)
        cy.xpath(this.rewardcheckout).should('be.visible')
        cy.xpath(this.rewardcheckout).click()
        cy.xpath(this.rewardtab).click()
        cy.xpath(this.rewardcreation).click()
        cy.get(this.rewardname).type(this.name)
        cy.get(this.rewardcatergory).click()
        cy.get('[cmdk-item]').eq(0).click(); // Select option
        cy.get('body').type('{esc}');
        cy.wait(2000)
        cy.get(this.rewardpoints).type("60")
        cy.get(this.startdate).click()
        cy.get("button[aria-label='Sunday, July 27th, 2025']").click()
        cy.get('body').type('{esc}');
        cy.wait(2000)
        cy.get(this.enddate).click()
        cy.get("button[aria-label='Thursday, July 31st, 2025']").click({ multiple: true })
        cy.get('body').type('{esc}');
        cy.wait(2000)
        
        cy.get(this.userlimit).type("3")
        cy.get(this.submitbtn).click()
        cy.get(this.SuccessfulCreation).should('be.visible')

    }

  

 addproduct() {
        cy.wait(3000)
        const productName = faker.commerce.productName();
        cy.xpath(this.productstab).click();
        cy.xpath(this.addproducts).click();

        cy.get(this.namefield).type(productName);
      

        cy.get(this.descriptionfield).type(this.description);
        cy.get(this.amountfield).type(this.amount);
        cy.get(this.taxdropdown).click();

        cy.get('[cmdk-item]').eq(0).click(); // Select option
        cy.get('body').type('{esc}');
        cy.get('input[type="file"][accept="image/*"]').attachFile('code balck.jpeg');
          
        cy.get(this.submitbtn).click()
        cy.get(this.productssuccessful).should('be.visible')
          
    }
      
  taxcreation () {
      cy.xpath(this.productstab).click()
      cy.xpath(this.taxtab).click()
      cy.xpath(this.createtax).click()
      cy.get(this.namefield).type(this.name)
      cy.get(this.taxtypedropdown).click()
      cy.get('[cmdk-item]').eq(0).click(); // Select option
      cy.get('body').type('{esc}');

        cy.get(this.countrydropdown).click()
        cy.get('input[placeholder="Search..."].flex').type(this.Nigeria)

        cy.get(this.nigeriaclick).click()

        cy.get(this.currencyField).click()
        cy.xpath(this.currency).click()
        cy.wait(2000)
        cy.get(this.ratedropdown).type('12')
        cy.get(this.taxvariantdropdown).click()
        cy.get('[cmdk-item]').eq(0).click(); // Select option
         cy.get('body').type('{esc}');
        cy.get(this.submitbtn).click()
        cy.get(this.productssuccessful).should('be.visible')
        
        }

  couponcreation() {
            
        cy.wait(3000)
        cy.xpath(this.productstab).click()
        cy.xpath(this.coupontab).click()
        cy.xpath(this.createcoupon).click()
        cy.get(this.selectproductdropdown).click()
        cy.get('[cmdk-item]').eq(0).click(); // Select option
         cy.get('body').type('{esc}');
          
        const coupon = faker.string.alphanumeric(8).toUpperCase(); // e.g., 'A1B2C3D4'

        cy.get(this.couponcodeinput).type(coupon)
        cy.get(this.discountype).type('400')
        cy.get('#unlimited').click()
        cy.get('#expiration').click()
        cy.get(this.startdate).click()
        cy.get("button[aria-label='Sunday, July 27th, 2025']").click()
        
        cy.get('body').type('{esc}');
        cy.get('#endDate').click()
        cy.get("button[aria-label='Thursday, July 31st, 2025']").click()
        
        cy.wait(4000)
        cy.get(this.submitbtn).click()
        cy.get(this.productssuccessful).should('be.visible')
        }
}





export default Paymentgateway
