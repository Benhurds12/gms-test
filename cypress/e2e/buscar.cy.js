/// <reference types="cypress" />


describe('US-001 - Funcionalidade: Busca de Filmes', () => {
    beforeEach(() => {
        cy.visit('/') // Visita a página antes de cada teste
      });
    
      afterEach(() => {
        cy.screenshot()
      });
    it('Deve realizar a busca com a palavra-chave válida', () => {
      cy.buscaDeFilmesValida()
  
    })
    it('Deve realizar a busca com a palavra-chave inválida', () => {
  
      cy.buscaDeFilmesInvalida()
    })
  
    it('Deve buscar filme com sucesso de uma lista', () => {
  
      cy.buscaDeFilmesDeArray()
    })
  })