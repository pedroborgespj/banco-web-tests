describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Login with valid data should allow to enter in the system', () => {
    cy.loginWithValidCredentials()

    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('Login with invalid data should generate error message', () => {
    cy.loginWithInvalidCredentials()

    cy.verifyToastMessage('Erro no login. Tente novamente.')
  })

})