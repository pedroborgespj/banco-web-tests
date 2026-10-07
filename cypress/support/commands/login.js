Cypress.Commands.add('loginWithValidCredentials', () => {
    cy.fixture('credentials').then(credentials => {
      cy.get('#username').click().type(credentials.valid.user)
      cy.get('#senha').click().type(credentials.valid.password)
    })
    cy.contains('button', 'Entrar').click()
})

Cypress.Commands.add('loginWithInvalidCredentials', () => {
    cy.fixture('credentials').then(credentials => {
      cy.get('#username').click().type(credentials.invalid.user)
      cy.get('#senha').click().type(credentials.invalid.password)
    })
    cy.contains('button', 'Entrar').click()
})