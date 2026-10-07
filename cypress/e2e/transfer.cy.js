describe('Transfers', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.loginWithValidCredentials()
    })

    it('Should transfer with data and value valids', () => {
        cy.toMakeATransfer('Maria Oliveira', 'João da Silva', '11')
        cy.verifyToastMessage('Transferência realizada!')
    })

    it('Should show an error when try to transfer above 5 thousands without a token', () => {
        cy.toMakeATransfer('Maria Oliveira', 'João da Silva', '5000.01')
        cy.verifyToastMessage('Autenticação necessária para transferências acima de R$5.000,00.')
    })
})