import homePage from "../../pages/homePage";
import inventoryPage from "../../pages/inventoryPage"


    it('Should login to inventory page', () =>{
        cy.visit('https://www.saucedemo.com/')
        homePage.typeUserName('standard_user');
        homePage.typePassword('secret_sauce');
        homePage.clickLogin();        

        inventoryPage.elements.pageTitle().should('have.text','Products')
    })

