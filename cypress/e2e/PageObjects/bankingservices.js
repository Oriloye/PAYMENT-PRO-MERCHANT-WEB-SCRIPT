/* eslint-disable cypress/no-unnecessary-waiting */
class bankingservices {

    //banking
    bankingservicetab = "a[href='/banking-services']"

    //wallet
    wallettab =  "//a[@href='/banking-services/wallets']//span"
    createwalletbtn = "div[id='wallets-nav-tab'] span"
    personalwalletbtn = "//button[1]//p[1]" //xpath
    firstnameinput = "#first_name"
    lastnameinput = "#last_name"
    D0B = "input[placeholder='Choose Date of Birth']"
    D0B16 = "button[aria-label='Sunday, July 1st, 2012']"
    Phonenuminput = "#mobile_no"
    emailinput = "#email"
    maleselect = "#male"
    tier1select = "#tier1"
    nationalitydropdown = "#nationality"
    nigeriaclick = "div[data-value='Nigeria']"
    Lagosclick = "div[data-value='Lagos']"
    Nigeria = "Niger"
    submitbtn = "button[type='submit']"
    Ngncurrency = "div[role='option'][data-value='🇳🇬 NGN']"
    currencyField = "button[name='currency']"
    nationalid = "#nationalId"
    Bvn = "#bvn"
    countrydropdown = "#country"
    State = "#state"
    Address = "#address_one"
    HouseAddress = "21, Orelope, Egbeda, Lagos, Nigeria."
    City = "#city" 
    Lagos = "Lagos"
    SuccessfulCreation = "p[class='mb-2 text-[18px] font-semibold']"

    //businesswalletcreation
    businesswalletbtn = "//p[normalize-space()='Business Wallet']"
    Companyname = "//input[@id='company_name']"
    Companyemail = "#company_email"
    registrationnumber = "#rc_number"
    phonenum = "#phone"
    Tin = "#tin"
    Dateofestablishment = "input[placeholder='Pick Date of Establishment']"
    businesstype = "button[id='business_type'] span"
    //directorinfo
    directoremail = "#director_email"
    drectorphoneno = "#director_phone"
    DOB2 = "input[placeholder='Pick Date of Birth']"
    DOB162 = "button[aria-label='Thursday, July 1st, 2010']"
    Countrydropdown = "#country"
    //contactkyc
    Otheridtype = "#other_id"
    Idnumber = "#other_id_number"
    issuedate = "input[placeholder='Issued Date']"
     expirynumber = "input[placeholder='Choose Expiration Date']"
     //businessaddress 
     businesscountry = "#businessCountry"

     //virtualaccount
     virtualaccttab = "//a[@href='/banking-services/virtual-accounts']//span" //xpath
     Addvirtualaccount = "div[id='virtual-accounts-header'] span" 

     //transfer
     transfertab = "//a[@href='/banking-services/transfers']//span" //xpath
     transfertype = "#type"
     beneficiarydropdown = "#beneficiary"
     narrationField = "#narration"
     narration = "Testing"
     amontField = "#amount"
     amount = "500"
     Otpfield = "input[autocomplete='one-time-code']"
     otptoken = "123456"
     continue = "//button[text()='Complete']"

     //newbeneficiary
     bankaccount = "//button[.//p[text()='Bank Account']]" //xpath
    opayselect = "//div[text()='OPAY DIGITAL SERVICES LIMITED']" //xpath
    bankdropdown = "#bank"
    inputbankaccount = "#account_number"
    accountnumber = "8132561877"
    
//bulktransfer
     bulktransferbtn = "a[href='/banking-services/transfers/bulk-transfer']"
     groupbeneficiarydropdown = "#beneficiaryGroup"
     amount1 = "input[id='beneficiaries[0].amount']"
     amount2 = "input[id='beneficiaries[1].amount']"
     amount3 = "input[id='beneficiaries[2].amount']"
     amount4  = "input[id='beneficiaries[3].amount']"

//singlebeneficiary
beneficiarytab = 'a[href="/banking-services/transfers/beneficiaries"]'

//groupbeneficiary
groupbeneficiarytab = 'a[href="/banking-services/transfers/beneficiaries/group"]'
creategroupbeneficiary = 'a[href="/banking-services/transfers/beneficiaries/create-group"]'


     


     


    Personalwalletcreationngn() {
        cy.wait(2000)
        cy.get(this.bankingservicetab).should('be.visible')
        cy.get(this.bankingservicetab).click()
        cy.xpath(this.wallettab).click()
        cy.get(this.createwalletbtn).should('be.visible')
        cy.get(this.createwalletbtn).click()
        cy.xpath(this.personalwalletbtn).click()

        cy.get(this.currencyField).click()
        cy.get(this.Ngncurrency).click()

        cy.wait(2000)

        const firstNames = ['John', 'Grace', 'Chinonso', 'Elijah', 'Ada', 'David'];
            const lastNames = ['Okafor', 'Smith', 'Johnson', 'Bello', 'Taylor', 'Ogunleye'];

            const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

            const firstName = getRandomItem(firstNames);
            const lastName = getRandomItem(lastNames);

            cy.log(`Random Full Name: ${firstName} ${lastName}`);

        cy.get(this.firstnameinput).type(firstName)
        cy.get(this.lastnameinput).type(lastName)
        

        cy.get(this.D0B).click()
        cy.get(this.D0B16).click()
        cy.get('body').type('{esc}');

        const phone = generatePhoneNumber();

        cy.get(this.Phonenuminput).type(phone)

            function generatePhoneNumber() {
        const prefixes = ['070', '080', '081', '090', '091'];
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const number = Math.floor(10000000 + Math.random() * 90000000); // 8-digit suffix
        return prefix + number;
        }

        
        console.log(this.Phonenuminput); // e.g. 08123456789

        const email = generateEmail();
        
        cy.get(this.emailinput).type(email)

                function generateEmail() {
        const domains = ['blusalt.com'];
        const name = Math.random().toString(36).substring(2, 10); // random string
        const domain = domains[Math.floor(Math.random() * domains.length)];
        return `${name}@${domain}`;
        }

        console.log(this.emailinput); // e.g. abcd1234@mailinator.com


        cy.get(this.tier1select).click()
        cy.get(this.maleselect).click()
        cy.get(this.nationalitydropdown).click()
        cy.get('input[placeholder="Search..."]').type(this.Nigeria)
        cy.get(this.nigeriaclick).click()
        cy.get(this.submitbtn).click()

        //identity
        cy.wait(2000)
         const nationalid = generateNationalId();
        cy.get(this.nationalid).type(nationalid)


            function generateNationalId() {
        const prefixes = ['570', '222', '991', '190', '691'];
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const number = Math.floor(10000000 + Math.random() * 90000000); // 8-digit suffix
        return prefix + number;
        }

        console.log(this.nationalid);

        const Bvn = generateBvn();
        cy.get(this.Bvn).type(Bvn)

        function generateBvn() {
        const prefixes = ['770', '222', '991', '890', '891'];
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const number = Math.floor(10000000 + Math.random() * 90000000); // 8-digit suffix
        return prefix + number;
        }

        console.log(this.Bvn);
        cy.get(this.submitbtn).click()

        //ContactAddress 
        cy.wait(2000)
        cy.get(this.countrydropdown).click()
        cy.get('input[placeholder="Search..."].flex').type(this.Nigeria)
        cy.get(this.nigeriaclick).click()
        cy.get(this.State).click()
        cy.get('input[placeholder="Search..."].flex').type(this.Lagos)
        cy.get(this.Lagosclick).click()
        cy.wait(2000)
        cy.get(this.Address).type(this.HouseAddress)
        cy.get(this.City).type(this.Lagos)

        cy.get(this.submitbtn).click()
        
         cy.get('#create-wallet-footer > .bg-primary').click()
        cy.get('p.font-semibold').contains('Personal Wallet Created Successfully');


    }


    businesswalletcreationngn() {
        cy.wait(2000)
        cy.get(this.bankingservicetab).should('be.visible')
        cy.get(this.bankingservicetab).click()
        cy.xpath('//span[text()="Wallets"]').should('be.visible')
        cy.xpath('//span[text()="Wallets"]').click()
        cy.get(this.createwalletbtn).should('be.visible')
        cy.get(this.createwalletbtn).click()
        cy.xpath('//button[p[text()="Business Wallet"]]').click()
        cy.get(this.currencyField).click()
        cy.get(this.Ngncurrency).click()

        cy.wait(2000)
        cy.xpath(this.Companyname).type('Busy')

        const email = generateEmail();
         cy.get(this.Companyemail).type(email)

                function generateEmail() {
        const domains = ['blusalt.com'];
        const name = Math.random().toString(36).substring(2, 10); // random string
        const domain = domains[Math.floor(Math.random() * domains.length)];
        return `${name}@${domain}`;
        }

        console.log(this.emailinput); // e.g. abcd1234@mailinator.com

        const phone = generatePhoneNumber();

        cy.get(this.phonenum).type(phone)

            function generatePhoneNumber() {
        const prefixes = ['070', '080', '081', '090', '091'];
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const number = Math.floor(10000000 + Math.random() * 90000000); // 8-digit suffix
        return prefix + number;
        }

        
        console.log(this.Phonenuminput); // e.g. 08123456789

            cy.get(this.registrationnumber).type('3445')
            cy.get(this.Tin).type(4000)
            cy.get(this.Dateofestablishment).click()
            cy.get("button[aria-label='Tuesday, July 1st, 2025']").click()
            
            cy.get(this.businesstype).click()
             cy.get('[role="group"]').should('be.visible').each(() => {
            cy.get('[role="option"]').then($options => {
              const randomIndex = Math.floor(Math.random() * $options.length);
              cy.wrap($options[randomIndex]).click();
            });
          });

        cy.get(this.submitbtn).click()

        //DirectorInfo
        cy.wait(2000)
        const firstNames = ['Endy', 'Endurance', 'Chinonso', 'Elijah', 'Ada', 'David'];
            const lastNames = ['Okafor', 'Smith', 'Johnson', 'Oriloye', 'Taylor', 'Ogunleye'];

            const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

            const firstName = getRandomItem(firstNames);
            const lastName = getRandomItem(lastNames);

            cy.log(`Random Full Name: ${firstName} ${lastName}`);

        cy.get(this.firstnameinput).type(firstName)
        cy.get(this.lastnameinput).type(lastName)

        const Dphone = generatePhoneNumber();
        cy.get(this.drectorphoneno).type(Dphone)

            function generatePhoneNumber() {
        const prefixes = ['070', '080', '081', '090', '091'];
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const number = Math.floor(10000000 + Math.random() * 90000000); // 8-digit suffix
        return prefix + number;
        }

        
        console.log(this.Phonenuminput); // e.g. 08123456789

        const Demail = generateEmail();
        cy.get(this.directoremail).type(Demail)

                function generateEmail() {
        const domains = ['blusalt.com'];
        const name = Math.random().toString(36).substring(2, 10); // random string
        const domain = domains[Math.floor(Math.random() * domains.length)];
        return `${name}@${domain}`;
        }

        console.log(this.emailinput); // e.g. abcd1234@mailinator.com

        cy.get(this.maleselect).click()
        cy.get(this.DOB2).click()
        cy.get(this.DOB162).click()
        cy.get('body').type('{esc}');

         cy.get(this.countrydropdown).click()
        cy.get('input[placeholder="Search..."]').type(this.Nigeria)
        cy.get(this.nigeriaclick).click()
        cy.get(this.submitbtn).click()

        //contactkyc
        cy.wait(2000)
         const nationalid = generateNationalId();
        cy.get(this.nationalid).type(nationalid)


            function generateNationalId() {
        const prefixes = ['570', '222', '991', '190', '691'];
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const number = Math.floor(10000000 + Math.random() * 90000000); // 8-digit suffix
        return prefix + number;
        }

        console.log(this.nationalid);

        const Bvn = generateBvn();
        cy.get(this.Bvn).type(Bvn)

        function generateBvn() {
        const prefixes = ['770', '222', '991', '890', '891'];
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const number = Math.floor(10000000 + Math.random() * 90000000); // 8-digit suffix
        return prefix + number;
        }

        console.log(this.Bvn);

        cy.get(this.Otheridtype).click()

        cy.get('[role="group"]').should('be.visible').each(() => {
            cy.get('[role="option"]').then($options => {
              const randomIndex = Math.floor(Math.random() * $options.length);
              cy.wrap($options[randomIndex]).click();
            });
          });
       

        cy.get(this.Idnumber).type('864677366')
        cy.get(this.issuedate).click()
        cy.get("button[aria-label='Tuesday, July 1st, 2025").click()
        cy.get(this.expirynumber).click()
         cy.get("button[aria-label='Wednesday, July 30th, 2025']").eq(0).click()


        cy.get(this.submitbtn).click()

        //businessaddress
          cy.wait(2000)
        cy.get(this.businesscountry).click()
        cy.get('input[placeholder="Search..."].flex').type(this.Nigeria)
        cy.get(this.nigeriaclick).click()
        cy.get(this.State).click()
        cy.get('input[placeholder="Search..."].flex').type(this.Lagos)
        cy.get(this.Lagosclick).click()
        cy.wait(2000)
        cy.get(this.Address).type(this.HouseAddress)
        cy.get(this.City).type(this.Lagos)
        cy.get(this.submitbtn).click()

        cy.get('#create-wallet-footer > .bg-primary').click()
        




        
    }


Personalwalletcreationusd() {
        cy.wait(2000)
        cy.get(this.bankingservicetab).should('be.visible')
        cy.get(this.bankingservicetab).click()
        cy.xpath(this.wallettab).click()
        cy.xpath('//span[text()="USD"]').click();

        cy.get(this.createwalletbtn).should('be.visible')
        cy.get(this.createwalletbtn).click()
        cy.xpath(this.personalwalletbtn).click()

        cy.get(this.currencyField).click()
        cy.get('div[data-value="🇺🇸 USD"]').click()

        cy.wait(2000)

        const firstNames = ['John', 'Grace', 'Chinonso', 'Elijah', 'Ada', 'David'];
            const lastNames = ['Okafor', 'Smith', 'Johnson', 'Bello', 'Taylor', 'Ogunleye'];

            const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

            const firstName = getRandomItem(firstNames);
            const lastName = getRandomItem(lastNames);

            cy.log(`Random Full Name: ${firstName} ${lastName}`);

        cy.get(this.firstnameinput).type(firstName)
        cy.get(this.lastnameinput).type(lastName)
        

        cy.get(this.D0B).click()
        cy.get(this.D0B16).click()
        cy.get('body').type('{esc}');

        const phone = generatePhoneNumber();
        cy.wait(2000)
        cy.get(this.Phonenuminput).type(phone)

            function generatePhoneNumber() {
        const prefixes = ['070', '080', '081', '090', '091'];
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const number = Math.floor(10000000 + Math.random() * 90000000); // 8-digit suffix
        return prefix + number;
        }

        
        console.log(this.Phonenuminput); // e.g. 08123456789

        const email = generateEmail();
        
        cy.get(this.emailinput).type(email)

                function generateEmail() {
        const domains = ['blusalt.com'];
        const name = Math.random().toString(36).substring(2, 10); // random string
        const domain = domains[Math.floor(Math.random() * domains.length)];
        return `${name}@${domain}`;
        }

        console.log(this.emailinput); // e.g. abcd1234@mailinator.com


        cy.get(this.tier1select).click()
        cy.get(this.maleselect).click()
        cy.get(this.nationalitydropdown).click()
        cy.get('input[placeholder="Search..."]').type(this.Nigeria)
        cy.get(this.nigeriaclick).click()
        cy.get(this.submitbtn).click()

        //identity
        cy.wait(2000)
         const nationalid = generateNationalId();
        cy.get(this.nationalid).type(nationalid)


            function generateNationalId() {
        const prefixes = ['570', '222', '991', '190', '691'];
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const number = Math.floor(10000000 + Math.random() * 90000000); // 8-digit suffix
        return prefix + number;
        }

        console.log(this.nationalid);

        const Bvn = generateBvn();
        cy.get(this.Bvn).type(Bvn)

        function generateBvn() {
        const prefixes = ['770', '222', '991', '890', '891'];
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const number = Math.floor(10000000 + Math.random() * 90000000); // 8-digit suffix
        return prefix + number;
        }

        console.log(this.Bvn);
        cy.get(this.submitbtn).click()

        //ContactAddress 
        cy.wait(2000)
        cy.get(this.countrydropdown).click()
        cy.get('input[placeholder="Search..."].flex').type(this.Nigeria)
        cy.get(this.nigeriaclick).click()
        cy.get(this.State).click()
        cy.get('input[placeholder="Search..."].flex').type(this.Lagos)
        cy.get(this.Lagosclick).click()
        cy.wait(2000)
        cy.get(this.Address).type(this.HouseAddress)
        cy.get(this.City).type(this.Lagos)
        cy.get(this.submitbtn).click()

        cy.get('#create-wallet-footer > .bg-primary').click()
        cy.get('p.font-semibold').contains('Personal Wallet Created Successfully');
        
        
    }

    virtualacctcreation(){
        cy.wait(2000)
        cy.get(this.bankingservicetab).should('be.visible')
        cy.get(this.bankingservicetab).click()
        cy.xpath(this.wallettab).click()
        cy.xpath(this.virtualaccttab).click()
        cy.get(this.Addvirtualaccount).click()

        cy.wait(2000)
        
        const firstNames = ['John', 'Grace', 'Chinonso', 'Elijah', 'Ada', 'David'];
            const lastNames = ['Okafor', 'Smith', 'Johnson', 'Bello', 'Taylor', 'Ogunleye'];

            const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

            const firstName = getRandomItem(firstNames);
            const lastName = getRandomItem(lastNames);

            cy.log(`Random Full Name: ${firstName} ${lastName}`);

        cy.get(this.firstnameinput).type(firstName)
        cy.get(this.lastnameinput).type(lastName)

        const phone = generatePhoneNumber();
        cy.wait(2000)
        cy.get(this.Phonenuminput).type(phone)

            function generatePhoneNumber() {
        const prefixes = ['070', '080', '081', '090', '091'];
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const number = Math.floor(10000000 + Math.random() * 90000000); // 8-digit suffix
        return prefix + number;
        }

        
        console.log(this.Phonenuminput); // e.g. 08123456789

        const email = generateEmail();
        
        cy.get(this.emailinput).type(email)

                function generateEmail() {
        const domains = ['blusalt.com'];
        const name = Math.random().toString(36).substring(2, 10); // random string
        const domain = domains[Math.floor(Math.random() * domains.length)];
        return `${name}@${domain}`;
        }

        console.log(this.emailinput); // e.g. abcd1234@mailinator.com

        const Bvn = generateBvn();
        cy.get(this.Bvn).type(Bvn)

        function generateBvn() {
        const prefixes = ['770', '222', '991', '890', '891'];
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const number = Math.floor(10000000 + Math.random() * 90000000); // 8-digit suffix
        return prefix + number;
        }

        console.log(this.Bvn);
        cy.get(this.submitbtn).click()
        cy.get('.flex > .text-base').should('be.visible')


   
    }

    savedsinglettransfer() {
        cy.wait(2000)
        cy.get(this.bankingservicetab).should('be.visible')
        cy.get(this.bankingservicetab).click()
        cy.xpath(this.transfertab).click()
        cy.wait(2000)
        cy.xpath("//button[.//span[text()='Transfer Funds']]").click()
        cy.get('a[href="/banking-services/transfers/single-transfer"]').click()
        cy.get(this.currencyField).click()
        cy.get('[data-value="NGN"]').click()
        cy.get(this.transfertype).click()
        cy.get('div[data-value="Transfer to Saved Beneficiary"]').click()
        cy.get(this.beneficiarydropdown).click()
        cy.get('[cmdk-item]').eq(0).click(); // Select option
        cy.get('body').type('{esc}');
        cy.wait(2000)
        cy.get('#amount').type('1000')
        cy.get(this.narrationField).type(this.narration)
        cy.get(this.submitbtn).click()
        cy.get('button.bg-primary.text-white').contains('Yes, Continue')
        .click()
        cy.get(this.Otpfield).type(this.otptoken)
        cy.xpath(this.continue).click()
        cy.get('.h-full > .w-full > .flex').should('be.visible')
         }

    newsinglettransfer() {
        cy.wait(2000)
        cy.get(this.bankingservicetab).click()
        cy.xpath(this.transfertab).click()
        cy.xpath("//button[.//span[text()='Transfer Funds']]").click()
        cy.get('a[href="/banking-services/transfers/single-transfer"]').click()
        cy.get(this.currencyField).click()
        cy.get('[data-value="NGN"]').click()
        cy.wait(2000)
        cy.get(this.transfertype).click()
        cy.get('div[data-value="Transfer to New Beneficiary"]').click()
         cy.get(this.bankdropdown).click()
         cy.get('input[placeholder="Search..."].flex').type('opay')
         cy.xpath(this.opayselect).click();
         cy.wait(2000)
         cy.get('#accountNumber').type(this.accountnumber)
        cy.get(this.amontField).type('1000')
        cy.get(this.narrationField).type(this.narration)
        cy.wait(2000)
        cy.get(this.submitbtn).click()
        cy.get('button.bg-primary.text-white').contains('Yes, Continue')
        .click()
        cy.get(this.Otpfield).type(this.otptoken)
        cy.xpath(this.continue).click()
        cy.get('.h-full > .w-full > .flex').should('be.visible')
         }

bulktransfer(){
            cy.wait(2000)
            cy.get(this.bankingservicetab).click()
        cy.xpath(this.transfertab).click()
        cy.xpath("//button[.//span[text()='Transfer Funds']]").click()
        cy.get(this.bulktransferbtn).click()
        cy.get(this.groupbeneficiarydropdown).click()
        cy.get('[cmdk-item]').eq(0).click(); // Select option
        cy.get('body').type('{esc}');
        cy.wait(2000)
        cy.get(this.narrationField).type('testing')
        cy.get(this.amount1).type(this.amount)
        cy.get(this.amount2).type(this.amount)
        cy.get(this.amount3).type(this.amount)
        cy.get(this.amount4).type(this.amount)
        cy.get(this.submitbtn).click()
        cy.xpath("//button[text()='Yes, Continue']").click()
        cy.contains("Awaiting approval to complete transfer.").should("be.visible")
         }


    addsinglebeneficiary(){
        cy.wait(2000)
        cy.get(this.bankingservicetab).click()
        cy.xpath(this.transfertab).click()
        cy.get(this.beneficiarytab).click()

        cy.wait(2000)
        cy.get('button').contains('Add Single Beneficiary').click()
        cy.wait(2000)
        cy.get(this.bankdropdown).click()
        cy.wait(2000)
         cy.get('input[placeholder="Search..."].flex').type('opay')
         cy.xpath(this.opayselect).click();
         cy.get('#accountNumber').type(this.accountnumber)
         cy.wait(2000)
         cy.get(this.currencyField).click()
        cy.get('[data-value="NGN"]').click()
        cy.get('#email').type('chi@gmail.com')

        cy.get(this.submitbtn).click()
        cy.wait(4000)

        // the assertion is failing because of the FT service
        cy.get('.h-full > .w-full > .flex').should('be.visible')


        
         }
    addgroupbeneficiary(){
        cy.get(this.bankingservicetab).click()
        cy.xpath(this.transfertab).click()
        cy.get(this.beneficiarytab).click()
        cy.get(this.groupbeneficiarytab).click()
        cy.get(this.creategroupbeneficiary).click()
        cy.get('#file').attachFile('download.csv')
        cy.get(this.submitbtn).click()
        
    }

}



export default bankingservices