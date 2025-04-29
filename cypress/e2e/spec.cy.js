/// <reference types="cypress" />

describe('Funcionalidade: cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Ben')
    cy.get('#signup-lastname').type('Hurds')
    cy.get('#signup-email').type('12413@example.com')
    cy.get('#signup-phone').type('1234567890')
    cy.get('#signup-password').type('Pog!123456')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
  })
})