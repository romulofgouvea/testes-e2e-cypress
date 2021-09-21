describe('Deve visitar uma pagina e fazer uma asertiva do titulo', () => {
    it('Deve visitar a pagina', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.title().should('be.equal', 'Campo de Treinamento')
    })
});