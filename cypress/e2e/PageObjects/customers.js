/* eslint-disable cypress/no-unnecessary-waiting */
class Customers {
    //customertab
    customertab ="a[href='/customers']"

    //Allcustomers
    Addcustomers = "//button[.//span[text()='Add Customer']]" //xpath
    firstnameinput = "#first_name"
    lastnameinput = "#last_name"
    Phonenuminput = "#mobile_no"
    emailinput = "#email"
    Bvn = "#bvn"
    countrydropdown = "#country"
    State = "#state"
    Address = "#address_one"
    HouseAddress = "21, Orelope, Egbeda, Lagos, Nigeria."
    City = "#city" 
    Lagos = "Lagos"
    nigeriaclick = "div[data-value='Nigeria']"
    Lagosclick = "div[data-value='Lagos']"
    submitbtn = "button[type='submit']"


    //paymentcustomers
    paymentcustomertab = "//a[@href='/customers/payment']//span" //xpath

    //bankingcustomer
    bankingcustomertab = "//a[@href='/customers/banking']//span" //xpath

    //storefront
    storefrontcustomertab = "//a[@href='/customers/storefront']//span" //xpath

    allcustomers(){
        cy.get(this.customertab).click()
        cy.xpath(this.Addcustomers).click()
        const firstNames = ['John', 'Grace', 'Chinonso', 'Elijah', 'Ada', 'David'];
            const lastNames = ['Okafor', 'Smith', 'Johnson', 'Bello', 'Taylor', 'Ogunleye'];

            const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

            const firstName = getRandomItem(firstNames);
            const lastName = getRandomItem(lastNames);

            cy.log(`Random Full Name: ${firstName} ${lastName}`);

        cy.get(this.firstnameinput).type(firstName)
        cy.get(this.lastnameinput).type(lastName)

        cy.wait(2000)

        const phone = generatePhoneNumber();

        cy.get(this.Phonenuminput).type(phone)

            function generatePhoneNumber() {
        const prefixes = ['70', '80', '81', '90', '91'];
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

        cy.get(this.countrydropdown).click()
        cy.get('input[placeholder="Search..."].flex').type('Niger')
        cy.get(this.nigeriaclick).click()
        cy.get(this.State).click()
        cy.get('input[placeholder="Search..."].flex').type(this.Lagos)
        cy.get(this.Lagosclick).click()
        cy.wait(3000)
        cy.get(this.Address).type(this.HouseAddress)
        cy.get(this.City).type(this.Lagos)

        cy.get(this.submitbtn).click()
        cy.xpath("//p[text()='Customer Created Successfully']").should('be.visible')
    }

    paymentcustomer(){
        cy.get(this.customertab).click()
        cy.xpath(this.paymentcustomertab).click()
        cy.xpath(this.Addcustomers).click()
        const firstNames = ['John', 'Grace', 'Chinonso', 'Elijah', 'Ada', 'David'];
            const lastNames = ['Okafor', 'Smith', 'Johnson', 'Bello', 'Taylor', 'Ogunleye'];

            const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

            const firstName = getRandomItem(firstNames);
            const lastName = getRandomItem(lastNames);

            cy.log(`Random Full Name: ${firstName} ${lastName}`);

        cy.get(this.firstnameinput).type(firstName)
        cy.get(this.lastnameinput).type(lastName)

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

        const Bvn = generateBvn();
        cy.get(this.Bvn).type(Bvn)

        function generateBvn() {
        const prefixes = ['770', '222', '991', '890', '891'];
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const number = Math.floor(10000000 + Math.random() * 90000000); // 8-digit suffix
        return prefix + number;
        }

        console.log(this.Bvn);

        cy.get(this.countrydropdown).click()
        cy.get('input[placeholder="Search..."].flex').type('Niger')
        cy.get(this.nigeriaclick).click()
        cy.get(this.State).click()
        cy.get('input[placeholder="Search..."].flex').type(this.Lagos)
        cy.get(this.Lagosclick).click()
        cy.get(this.Address).type(this.HouseAddress)
        cy.get(this.City).type(this.Lagos)

        cy.get(this.submitbtn).click()
        cy.xpath("//p[text()='Customer Created Successfully']").should('be.visible')

    }

    bankingcustomer(){
        cy.get(this.customertab).click()
        cy.xpath(this.bankingcustomertab).click()
        cy.xpath(this.Addcustomers).click()
        const firstNames = ['John', 'Grace', 'Chinonso', 'Elijah', 'Ada', 'David'];
            const lastNames = ['Okafor', 'Smith', 'Johnson', 'Bello', 'Taylor', 'Ogunleye'];

            const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

            const firstName = getRandomItem(firstNames);
            const lastName = getRandomItem(lastNames);

            cy.log(`Random Full Name: ${firstName} ${lastName}`);

        cy.get(this.firstnameinput).type(firstName)
        cy.get(this.lastnameinput).type(lastName)

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

        const Bvn = generateBvn();
        cy.get(this.Bvn).type(Bvn)

        function generateBvn() {
        const prefixes = ['770', '222', '991', '890', '891'];
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const number = Math.floor(10000000 + Math.random() * 90000000); // 8-digit suffix
        return prefix + number;
        }

        console.log(this.Bvn);

        cy.get(this.countrydropdown).click()
        cy.get('input[placeholder="Search..."].flex').type('Niger')
        cy.get(this.nigeriaclick).click()
        cy.get(this.State).click()
        cy.get('input[placeholder="Search..."].flex').type(this.Lagos)
        cy.get(this.Lagosclick).click()
        cy.get(this.Address).type(this.HouseAddress)
        cy.get(this.City).type(this.Lagos)

        cy.get(this.submitbtn).click()
        cy.xpath("//p[text()='Customer Created Successfully']").should('be.visible')
    }

    storefrontcustomers(){
        cy.get(this.customertab).click()
        cy.get('[href="/customers/storefront"]').click()
        cy.xpath("//h1[text()='Storefront Customers']").should('be.visible')

    }

}

export default Customers