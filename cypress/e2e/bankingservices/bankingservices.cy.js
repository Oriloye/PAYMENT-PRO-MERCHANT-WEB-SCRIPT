import devlogin from "../PageObjects/devlogin";
import { When } from "@badeball/cypress-cucumber-preprocessor";
import bankingservices from "../PageObjects/bankingservices";

const bank = new bankingservices

When('User Create Personal Ngn wallet', () => {
    bank.Personalwalletcreationngn()
});

When('User Create Business Ngn wallet', () => {
    bank.businesswalletcreationngn()
});

When('User Create Personal Usd wallet', () => {
    bank.Personalwalletcreationusd()
});

When('User Create Virtual Account', () => {
    bank.virtualacctcreation()
})

When('User make Single Transfer to Saved beneficiary', () => {
    bank.savedsinglettransfer()
})

When('User make Single Transfer to New beneficiary', () => {
    bank.newsinglettransfer()
})

When('User make Bulk Transfer', () => {
    bank.bulktransfer()
})

When('User Create Single Beneficiary', () => {
    bank.addsinglebeneficiary()
})

When('User Create Group Beneficiary', () => {
    bank.addgroupbeneficiary()
})