describe('Checkout on Sauce Demo', () => {

  it('Should complete an order successfully', () => {
    //  sauce demo website opening
    cy.visit('https://www.saucedemo.com/')

    // Use test-data variable to insert username and password
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    // Check if login is successfully perform
    cy.url().should('include', '/inventory.html')
    // The inventory page should be visible
    cy.get('[data-test="inventory-container"]').should('be.visible')

    // Add 2 articles in the cart
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    // Check that the cart contains 2 articles
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '2')
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="inventory-item"]').should('have.length', 2)
    cy.get('[data-test="inventory-item-name"]')
        .should('contain', 'Sauce Labs Onesie')
        .and('contain', 'Sauce Labs Backpack')

    // checkout
    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="firstName"]').type('Test')
    cy.get('[data-test="lastName"]').type('User')
    cy.get('[data-test="postalCode"]').type('67400')
    
    cy.get('[data-test="continue"]').click()
    cy.url().should('include', '/checkout-step-two.html')
    // Check that wa have the good articles in the recap of the order
    cy.get('[data-test="inventory-item-name"]')
        .should('contain', 'Sauce Labs Onesie')
        .and('contain', 'Sauce Labs Backpack')

    cy.get('[data-test="finish"]').click()

     cy.get('[data-test="complete-header"]')
        .should('contain', 'Thank you for your order!')

  })

})