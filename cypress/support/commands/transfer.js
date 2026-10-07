Cypress.Commands.add('toMakeATransfer', (fromAccount, toAccount, value) => {
    cy.selectComboboxOption('conta-origem', fromAccount)
    cy.selectComboboxOption('conta-destino', toAccount)
    cy.get('#valor').click().type(value)
    cy.contains('button', 'Transferir').click()
})