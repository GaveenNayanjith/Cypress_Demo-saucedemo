class inventoryPage{
    elements = {
        pageTitle : () => cy.get('.title')
    }

}

module.exports = new inventoryPage();