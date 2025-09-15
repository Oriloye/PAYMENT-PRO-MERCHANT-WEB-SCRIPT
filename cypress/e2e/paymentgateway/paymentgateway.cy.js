import login from '../PageObjects/login';
import Paymentgateway from '../PageObjects/paymentgateway';
import {Given, When} from '@badeball/cypress-cucumber-preprocessor';
import { faker } from '@faker-js/faker';


const gateway = new Paymentgateway 

When('user creates disputes', () =>{ 

gateway.Disputecreation() 

});

When('user refunds money', () =>{ 

gateway.refundmoney() 

});

When('open paymentlink', () =>{ 

gateway.paymentlinktest() 

});

When('i create basic page', () =>{

gateway.createbasicPage()

});

When('i create product page', () =>{

gateway.createProductPage()

});

When('i create recurring page', () =>{

gateway.createRecurringPAGE()

});

When('i create split account', () =>{

gateway.SplitpaymentCreation()

});

When('i create sub account', () =>{

gateway.SubAccountCreation()

});
When('Create Qr Code', () =>{

gateway.qrcodecreation()

});

When('Create Multiple Qr Code', () =>{

gateway.multipledynamicqrcode()

});

When('Create subscription plan', () =>{

gateway.plancreation()

});

When('Create subscription', () =>{

gateway.subscriptioncreations()

});


When('Create Invoicing', () =>{

gateway.invoicingcreation()

});

When('Create Reward', () =>{

gateway.rewardcreations()

});

        
When('Create products', ()=>{

gateway.addproduct()

});

When('Create Tax', ()=> {
    
    gateway.taxcreation()
})

When('Create Coupon', () => {
    gateway.couponcreation()
})