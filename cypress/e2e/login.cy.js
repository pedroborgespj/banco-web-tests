describe('Login', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('URL'))
  })

  it('Login with valid data should allow to enter in the system', () => {
    cy.fixture('credentials').then(credentials => {
      cy.get('#username').click().type(credentials.valid.user)
      cy.get('#senha').click().type(credentials.valid.password)
    })
    cy.contains('button', 'Entrar').click()

    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('Login with invalid data should generate error message', () => {
    cy.fixture('credentials').then(credentials => {
      cy.get('#username').click().type(credentials.invalid.user)
      cy.get('#senha').click().type(credentials.invalid.password)
    })
    cy.contains('button', 'Entrar').click()

    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })

})