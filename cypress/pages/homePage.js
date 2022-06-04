class homePage{

    elements = {
        userNameInput : () => cy.get('#user-name'),
        userPasswordInput : () => cy.get('#password'),
        loginBtn : () => cy.get('#login-button'),
        errorMsg : () => cy.get('//h3[@data-test="error"]')
    }

    typeUserName(userName){
        this.elements.userNameInput().type(userName);
    }

    typePassword(password){
        this.elements.userPasswordInput().type(password);
    }

    clickLogin(){
        this.elements.loginBtn().click();
    }

}

module.exports = new homePage();