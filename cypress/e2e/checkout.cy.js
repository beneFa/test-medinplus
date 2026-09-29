describe('Checkout on Sauce Demo', () => {

  it('Should complete an order successfully', () => {
    //  ouverture de la page
    cy.visit('https://www.saucedemo.com/')

    // dans data-test on ajoute l'username et le mdp
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    // verification qu'une fois log in, on arrive sur la page avec tous les produits
    cy.url().should('include', '/inventory.html')
    // verification que l'iventaire est visible
    cy.get('[data-test="inventory-container"]').should('be.visible')

    // ajout au panier de 2 articles
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    // verification que le panier a 2 articles
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '2')
    // ouverture du panier
    cy.get('[data-test="shopping-cart-link"]').click()
    // verification des articles du panier
    cy.get('[data-test="inventory-item"]').should('have.length', 2)
    cy.get('[data-test="inventory-item-name"]')
        .should('contain', 'Sauce Labs Onesie')
        .and('contain', 'Sauce Labs Backpack')

    // checkout
    cy.get('[data-test="checkout"]').click()
    // info utilisateurs
    cy.get('[data-test="firstName"]').type('Test')
    cy.get('[data-test="lastName"]').type('User')
    cy.get('[data-test="postalCode"]').type('67400')
    
    cy.get('[data-test="continue"]').click()
    cy.url().should('include', '/checkout-step-two.html')
    // verification qu'on a bien les bons articles dans le récapitulatif de commande
    cy.get('[data-test="inventory-item-name"]')
        .should('contain', 'Sauce Labs Onesie')
        .and('contain', 'Sauce Labs Backpack')

    cy.get('[data-test="finish"]').click()

     cy.get('[data-test="complete-header"]')
        .should('contain', 'Thank you for your order!')

  })

})