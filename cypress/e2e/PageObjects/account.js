/* eslint-disable cypress/no-unnecessary-waiting */
import {faker } from "@faker-js/faker"
class account {
    tabmenu = "//a[@href='/account']"
    accountMenu = ('div', 'Account')
    profile = ('a', 'Profile')
    profileinformationValidation = "//a[@role='tab']//span[contains(text(),'Profile Information')]"
    password = "//span[normalize-space()='Password']"
    editprofilweBtn = "//body/div[@id='root']/div/div/main/section/div/div/button[1]"
    countryField = "//button[@id='country']"
    stateField = "//button[@id='state']"
    cityField = "//input[@id='city']"
    address = "//input[@id='address_one']"
    zipcode = "//input[@id='zip_code']"
    saveBtn = "//button[normalize-space()='Save Changes']"
    teambtn = ('a', 'Team')
    addMemberbtn = "//div[@id='team-header']//button[@type='button']"
    emailbtn = "//input[@id='email']"
    nextBtn = "//button[normalize-space()='Next']"
    roleBtn = "//button[@id='role']"
    financerole = "//div[normalize-space()='Finance']"
    savemember = "//button[normalize-space()='Save']"
    SearchEmailBtn = "//input[@placeholder='Search']"
    filterAdminBtn = "//button[@id='admin']"
    saveFilterBtn = "//button[normalize-space()='Save Filter']"
    filterResetBtn = "//div[@id='filter-footer']//button[@type='button']"
    viewCompliance = ('a', 'Compliance')
    businessProfileInfo = "//h1[normalize-space()='Business Profile Information']"
    supportContact = "//h1[normalize-space()='Support Contact Information']"
    BusinessContactInfo = "//h1[normalize-space()='Business Contact Information']"
    CompanyDoc = "//h1[normalize-space()='Company Documents']"
    directorsInformation = "//a[@aria-selected='false']"
    country = "//button[@id='country']";
  state = "//button[@id='state']";
  city = "//input[@id='city']";
  searchbar = "//input[@placeholder='Search...']"
  Bvn = "#bvn"
  


    


    viewProfileTest(){
        cy.xpath(this.tabmenu).click()
        cy.contains(this.accountMenu).click()
        cy.contains(this.profile).click()
        cy.xpath(this.profileinformationValidation).should('be.visible')
        cy.xpath(this.password).click()
    }

    editProfileTest(){
        cy.xpath(this.tabmenu).click()
        cy.contains(this.accountMenu).click()
        cy.contains(this.profile).click()
        cy.xpath(this.editprofilweBtn).click()
        cy.xpath(this.countryField).should('be.visible').and('be.disabled')
        cy.xpath(this.stateField).should('be.visible').and('be.not.disabled')
        cy.xpath(this.cityField).should('be.visible').and('be.not.disabled')
        cy.xpath(this.address).should('be.visible').and('be.not.disabled')
        cy.xpath(this.zipcode).should('be.visible').and('be.not.disabled')
        cy.xpath(this.saveBtn).should('be.visible').and('be.not.disabled')
    }

    AddTeamTest(){
        const email = faker.internet.email()
        cy.xpath(this.tabmenu).click()
        cy.contains(this.accountMenu).click()
        cy.contains(this.teambtn).click()
        cy.xpath(this.addMemberbtn).click()
        cy.xpath(this.emailbtn).type(email)
        cy.xpath(this.nextBtn).click()
        cy.xpath(this.roleBtn).click()
        cy.get('[cmdk-item]').eq(0).click(); // Select option
    
        cy.xpath(this.savemember).click()
        cy.xpath("//section[@aria-label='Notifications alt+T']")
  .should('be.visible')
  .and('contain.text', 'Success');
    }

    filterTeamTest(){
         cy.xpath(this.tabmenu).click()
        cy.contains(this.accountMenu).click()
        cy.contains(this.teambtn).click()
        cy.get('div.flex.items-center.gap-2').contains('Filter').click();
        cy.xpath(this.SearchEmailBtn).type('endurance+14665@blusalt.net')
        cy.xpath(this.filterAdminBtn).click()
        cy.xpath(this.saveFilterBtn).click()
        cy.get('div.flex.items-center.gap-2').contains('Filter').click();
        cy.xpath(this.filterResetBtn).click()
    }

    viewCompliancetest(){
      const nigeriaPrefixes = ['070', '080', '081', '090', '091'];
        const fakeData= {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  dob: faker.date.birthdate({ min: 18, max: 60, mode: 'age' }).toISOString().split('T')[0], // YYYY-MM-DD
  phoneNumber: `${faker.helpers.arrayElement(nigeriaPrefixes)}${faker.string.numeric(8)}`,
  identityNumber: faker.string.numeric(11),
  city: faker.location.city(),
  addressOne: faker.location.streetAddress(),

        }
        const bvn = faker.string.numeric(11);


        cy.xpath(this.tabmenu).click()
        cy.contains(this.accountMenu).click()
        cy.contains(this.viewCompliance).click()
        cy.xpath(this.BusinessContactInfo).should('be.visible')
        cy.wait(2000)
        cy.xpath(this.businessProfileInfo).should('be.visible')
        cy.xpath(this.supportContact).should('be.visible')
        cy.wait(2000)
        cy.xpath(this.CompanyDoc).should('be.visible')
        cy.xpath(this.directorsInformation).click()
        cy.xpath("//div[@id='compliance-nav-tab']//button[@type='button']").click()
        cy.xpath("//input[@id='first_name']").type(fakeData.firstName);
        cy.xpath("//input[@id='last_name']").type(fakeData.lastName);
        cy.xpath("//input[@id='email']").type(fakeData.email);
        cy.xpath("//input[@placeholder='Pick Date of Birth']").click()
        cy.get('svg.lucide-chevron-down').eq(2).parent().click();
        cy.xpath("//button[normalize-space()='2000']").click()
        cy.xpath("//button[normalize-space()='January']").click()
        cy.xpath("//button[normalize-space()='11']").click()
        //cy.get('#country').click()
        //cy.xpath(this.searchbar).type('Nigeria')
        //cy.xpath("//div[@data-value='Nigeria']")
        //.should('be.visible')
        //.click();

        cy.xpath(this.state).click()
        cy.xpath(this.searchbar).type('Lagos')
        cy.xpath("//div[@data-value='Lagos']").click();
        cy.wait(2000)
        //cy.xpath("//input[@id='phone_number']").type(fakeData.phoneNumber);
        
        const Bvn = generateBvn();
        cy.get(this.Bvn).type(Bvn)

        function generateBvn() {
        const prefixes = ['770', '222', '991', '890', '891'];
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const number = Math.floor(10000000 + Math.random() * 90000000); // 8-digit suffix
        return prefix + number;
        }

        console.log(this.Bvn);

        cy.xpath("//button[@id='nationality']").click()
        cy.xpath(this.searchbar).type('Nigeria')
        cy.xpath("//div[@data-value='Nigeria']")
        .should('be.visible')
        .click();
        cy.xpath("//button[@id='identity_card_type']").click()
        cy.xpath("//div[normalize-space()='National ID']").click()
        cy.xpath("//input[@id='identity_number']").type(fakeData.identityNumber);

        cy.get('#identity_card').attachFile('code balck.jpeg');

        cy.xpath("//input[@id='city']").type(fakeData.city);
        cy.xpath("//input[@id='address_one']").type(fakeData.addressOne);

        cy.xpath("//button[normalize-space()='Submit Director Details']").click()

        //valid bvn validation
        cy.get(':nth-child(9) > .items-start').should('before.visible')


    }




}
export default account