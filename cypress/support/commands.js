// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('PreencherCadastro', (Nome, Sobrenome, email, Telefone, Senha) => {
    cy.get('#signup-firstname').type(Nome)
    cy.get('#signup-lastname').type(Sobrenome)
    cy.get('#signup-email').type(email)
    cy.get('#signup-phone').type(Telefone)
    cy.get('#signup-password').type(Senha)
    cy.get('#signup-button').click()  
 })

 Cypress.Commands.add('buscaDeFilmesValida', () =>{
    cy.get('#clear-button').click()
    cy.get('#search-input').clear().type('Matrix Reloaded')
    cy.get('#search-button').click()
    cy.get('#results-section h3').should('contain' , 'The Matrix Reloaded').eq('0')
    
})

Cypress.Commands.add('buscaDeFilmesInvalida', () =>{
    cy.get('#clear-button').click()
    cy.get('#search-input').clear().type('mmatrix Reloaded')
    cy.get('#search-button').click()
    cy.get('#results-section > p').should('contain', 'Filme não encontrado.')
    
})

Cypress.Commands.add('recomendacoesDeFilmes', () => { 
    cy.get('#recommendations').children('div').its('length').should((len) => {
        expect(len).to.be.within(4, 5)
  })
 })

 Cypress.Commands.add('buscaDeFilmesDeArray', () => 
    cy.fixture('filmes').each((filmes) =>{
        cy.get('#clear-button').click()
        cy.get('#search-input').clear().type(filmes.titulo)
        cy.get('#search-button').click()
        cy.get('#results-section').should('contain' , filmes.titulo )
        
 })
 )