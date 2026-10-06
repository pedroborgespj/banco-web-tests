describe('Transfers', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fixture('credentials').then(credentials => {
            cy.get('#username').click().type(credentials.valid.user)
            cy.get('#senha').click().type(credentials.valid.password)
        })
        cy.contains('button', 'Entrar').click()
    })

    it('Should transfer with data and value valids', () => {
        cy.get('label[for="conta-origem"]').parent().as('campo-conta-origem')
        cy.get('@campo-conta-origem').click()
        cy.get('@campo-conta-origem').contains('Maria Oliveira').click()

        cy.get('label[for="conta-destino"]').parent().as('campo-conta-destino')
        cy.get('@campo-conta-destino').click()
        cy.get('@campo-conta-destino').contains('João da Silva').click()

        cy.get('#valor').click().type('11')
        cy.contains('button', 'Transferir').click()

        cy.get('.toast').should('have.text', 'Transferência realizada!')
    })
})