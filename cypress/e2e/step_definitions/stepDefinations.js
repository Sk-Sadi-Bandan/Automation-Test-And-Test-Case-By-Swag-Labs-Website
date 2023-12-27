import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import locatorsPage from "../../Locators/locators";
import allData from '../../data/data'
import 'cypress-file-upload';
Cypress.config('defaultCommandTimeout', 60000)
const locator = new locatorsPage();
const data = new allData();

Given('Open Browser and Visit Website',()=> {
    cy.visit(data.orange_url);
    });


When('Enter the user login with  invalid username', () => {
     //  // Assuming "data" and "locator" are defined somewhere
     cy.wait(2000);
     cy.xpath(locator.Username).should('be.visible')
     cy.xpath(locator.Username).type('dmin'); // Access email using index [0]
     cy.xpath(locator.Password).should('be.visible')
     cy.xpath(locator.Password).type('admin123'); // Access password using index [0]
     });
Then('Click The Login Button', ()=> {
    cy.xpath(locator.login).should('contain','Login')
    cy.xpath(locator.login).should('be.visible')
   cy.xpath(locator.login).click()
   cy.wait(2000)
  });
When('Enter the user login with invalid password', () => {
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.Username).should('be.visible')
    cy.xpath(locator.Username).type('Admin'); // Access email using index [0]
    cy.xpath(locator.Password).should('be.visible')
    cy.xpath(locator.Password).type('admi'); // Access password using index [0]
    });
Then('Click The Login Button for invalid password',  ()=> {
    cy.xpath(locator.login).should('contain','Login')
    cy.xpath(locator.login).should('be.visible')
    cy.xpath(locator.login).click()
   cy.wait(2000)
   });
When('Enter the user login with valid username & password', () => {
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.Username).should('be.visible')
    cy.xpath(locator.Username).type('standard_user'); // Access email using index [0]
    cy.xpath(locator.Password).should('be.visible')
    cy.xpath(locator.Password).type('secret_sauce'); // Access password using index [0]
    });
Then('Click The Login Button with Valid Username & Password',  ()=> {
    cy.xpath(locator.login).should('contain','Login')
    cy.xpath(locator.login).should('be.visible')
    cy.xpath(locator.login).click()
    cy.wait(2000)
    });
//---------------------------------------------------------------------------------------

When ('Click on menubar option', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.menubar).click({force:true});
    });
Then('Click the about button', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.about).click({force:true});
    });
// Then('Click the signin button', () => {
//     // const feature_dats = dataTable.hashes();
//     //  // Assuming "data" and "locator" are defined somewhere
//     cy.wait(2000);
//     cy.xpath(locator.signin).click({force:true});
//     });
// Then('Enter the user login with username & password from about option', () => {
//     //  // Assuming "data" and "locator" are defined somewhere
//     cy.wait(2000);
//     cy.xpath(locator.Username).should('be.visible')
//     cy.xpath(locator.Username).type('standard_user'); // Access email using index [0]
//     cy.xpath(locator.Password).should('be.visible')
//     cy.xpath(locator.Password).type('secret_sauce'); // Access password using index [0]
//     });
// Then('Click The Login Button with Valid Username & Password from about option',  ()=> {
//     cy.xpath(locator.login).should('contain','Login')
//     cy.xpath(locator.login).should('be.visible')
//     cy.xpath(locator.login).click()
//     cy.wait(2000)
//     });
//---------------------------------------------------------------------------------------

When ('Click on product-1 view', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.backpack).click({force:true});
    });
Then('Click the product-1 addtocart', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.addtocart).click({force:true});
    });
Then('Click the product-1 cartlist', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.cartlist).click({force:true});
    });
Then('Click the product-1 checkout', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.checkout).click({force:true});
    });
Then('Enter the user shopping with fname lname zipcode', () => {
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.firstname).should('be.visible')
    cy.xpath(locator.firstname).type('Sk Sadi'); // Access firstname using index [0]
    cy.xpath(locator.lastname).should('be.visible')
    cy.xpath(locator.lastname).type('Bandan'); // Access lastname using index [0]
    cy.xpath(locator.zipcode).should('be.visible')
    cy.xpath(locator.zipcode).type('3402'); // Access zipcode using index [0]
    });
Then('Click the user shopping continue',  ()=> {
    cy.xpath(locator.continue).should('contain','Continue')
    cy.xpath(locator.continue).should('be.visible')
    cy.xpath(locator.continue).click()
    cy.wait(2000)
    });
Then('Click the user shopping finish', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.finish).click({force:true});
    });
Then('Click the user shopping home', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.gotohome).click({force:true});
    });
//---------------------------------------------------------------------------------------

When ('Click on shopping view', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.shopping).click({force:true});
    });
Then('Click the shopping checkout', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.checkout).click({force:true});
    });
Then('Enter the user shopping with firstname lastname zipcode', () => {
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.firstname).should('be.visible')
    cy.xpath(locator.firstname).type('Sk Sadi'); // Access firstname using index [0]
    cy.xpath(locator.lastname).should('be.visible')
    cy.xpath(locator.lastname).type('Bandan'); // Access lastname using index [0]
    cy.xpath(locator.zipcode).should('be.visible')
    cy.xpath(locator.zipcode).type('3402'); // Access zipcode using index [0]
    });
Then('Click the shopping continue',  ()=> {
    cy.xpath(locator.continue).should('contain','Continue')
    cy.xpath(locator.continue).should('be.visible')
    cy.xpath(locator.continue).click()
    cy.wait(2000)
    });
Then('Click the shopping finish', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.finish).click({force:true});
    });
Then('Click the shopping home', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.gotohome).click({force:true});
    });
//---------------------------------------------------------------------------------------

When ('Click the lightadd addtocart', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.lightadd).click({force:true});
    });
Then ('Click the blacktshirtadd addtocart', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.blacktshirtadd).click({force:true});
    });
Then ('Click the jacketadd addtocart', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.jacketadd).click({force:true});
    });
Then ('Click the onesieadd addtocart', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.onesieadd).click({force:true});
    });
Then ('Click the redtshirtadd addtocart', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.redtshirtadd).click({force:true});
    });    
Then('Click the all shopping cartlist', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.cartlist).click({force:true});
    });
Then('Click the all shopping checkout', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.checkout).click({force:true});
    });
Then('Enter the customer shopping with fname lname zipcode', () => {
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.firstname).should('be.visible')
    cy.xpath(locator.firstname).type('Sk Sadi'); // Access firstname using index [0]
    cy.xpath(locator.lastname).should('be.visible')
    cy.xpath(locator.lastname).type('Bandan'); // Access lastname using index [0]
    cy.xpath(locator.zipcode).should('be.visible')
    cy.xpath(locator.zipcode).type('3402'); // Access zipcode using index [0]
    });
Then('Click the customer shopping continue',  ()=> {
    cy.xpath(locator.continue).should('contain','Continue')
    cy.xpath(locator.continue).should('be.visible')
    cy.xpath(locator.continue).click()
    cy.wait(2000)
    });
Then('Click the customer shopping finish', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.finish).click({force:true});
    });
Then('Click the customer shopping home', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.gotohome).click({force:true});
    });
//---------------------------------------------------------------------------------------

When ('Click on linkedin option', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.linkedin).click({force:true});
    });
Then ('Click on facebook option', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.fb).click({force:true});
    });
Then ('Click on twitter option', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.twitter).click({force:true});
    });
//---------------------------------------------------------------------------------------

When ('Click the lightadded addtocart', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.lightadd).click({force:true});
    });
Then ('Click the blacktshirtadded addtocart', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.blacktshirtadd).click({force:true});
    });
Then ('Click the jacketadded addtocart', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.jacketadd).click({force:true});
    });
Then ('Click the onesieadded addtocart', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.onesieadd).click({force:true});
    });
Then('Click the selected shopping cartlist', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.cartlist).click({force:true});
    });
Then ('Click the light rmvtocart', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.rvmlight).click({force:true});
    });
Then('Click the onesie rmvtocart', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.rvmonesie).click({force:true});
    });
Then('Click the edited shopping checkout', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.checkout).click({force:true});
    });
Then('Enter the customer information', () => {
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.firstname).should('be.visible')
    cy.xpath(locator.firstname).type('Sk Sadi'); // Access firstname using index [0]
    cy.xpath(locator.lastname).should('be.visible')
    cy.xpath(locator.lastname).type('Bandan'); // Access lastname using index [0]
    cy.xpath(locator.zipcode).should('be.visible')
    cy.xpath(locator.zipcode).type('3402'); // Access zipcode using index [0]
    });
Then('Click the customer continue',  ()=> {
    cy.xpath(locator.continue).should('contain','Continue')
    cy.xpath(locator.continue).should('be.visible')
    cy.xpath(locator.continue).click()
    cy.wait(2000)
    });
Then('Click the cancle order', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.cancleorder).click({force:true});
    });
//---------------------------------------------------------------------------------------

When ('Click the addlight addtocart', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.lightadd).click({force:true});
    });
Then ('Click the addblacktshirt addtocart', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.blacktshirtadd).click({force:true});
    });
Then('Click the reselect shopping cartlist', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.cartlist).click({force:true});
    });
Then('Click the continue shopping', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.continueshopping).click({force:true});
    });
Then ('Click the addjacket addtocart', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.jacketadd).click({force:true});
    });
Then ('Click the addonesie addtocart', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.onesieadd).click({force:true});
    });
Then('Click the reselected shopping cartlist', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.cartlist).click({force:true});
    });
Then('Click the present or privious shopping checkout', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.checkout).click({force:true});
    });
Then('Enter the customer info', () => {
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.firstname).should('be.visible')
    cy.xpath(locator.firstname).type('Sk Sadi'); // Access firstname using index [0]
    cy.xpath(locator.lastname).should('be.visible')
    cy.xpath(locator.lastname).type('Bandan'); // Access lastname using index [0]
    cy.xpath(locator.zipcode).should('be.visible')
    cy.xpath(locator.zipcode).type('3402'); // Access zipcode using index [0]
    });
Then('Click the customer info continue',  ()=> {
    cy.xpath(locator.continue).should('contain','Continue')
    cy.xpath(locator.continue).should('be.visible')
    cy.xpath(locator.continue).click()
    cy.wait(2000)
    });
Then('Click the customer shopping finished', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.finish).click({force:true});
    });
Then('Click the customer go to home', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.gotohome).click({force:true});
    });
//---------------------------------------------------------------------------------------

