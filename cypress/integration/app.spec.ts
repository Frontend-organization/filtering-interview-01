import { data } from '../fixtures/beers.json'

const application = `http://localhost:${Cypress.env('APPLICATION_PORT')}/`
const getBeersEndpoint = 'https://api.jsonbin.io/b/610c9733e1b0604017a774e0'

describe('Filters and clear results', () => {
  it('should render ui to interact with filters', () => {
    cy.visit(application)
      .get('[data-cy=btn-filters]')
      .should('contain.text', 'FILTRAR')
  })

  it('should render results from api correctly', () => {
    const [{ name: beerName }] = data
    cy.intercept(getBeersEndpoint, { fixture: 'beers.json' }).as('getBeers')
    cy.visit(application)
    cy.wait('@getBeers')
      .get('[data-cy=beers-container]')
      .should('contain.text', beerName)
  })

  it('should render results accord filters', () => {
    const [redBeer] = data.filter(({ filterId }) => filterId === 'roja')
    const [notRedBeer] = data.filter(({ filterId }) => filterId !== 'roja')
    cy.intercept(getBeersEndpoint, { fixture: 'beers.json' }).as('getBeers')
    cy.visit(application)
    cy.wait('@getBeers').get('[data-cy=btn-filters]').click()
    cy.get('[data-cy=filters-selector]')
      .should('be.visible')
      .get('p')
      .contains('roja')
      .click()

    cy.get('[data-cy=btn-save-filters]').click()
    cy.contains(redBeer.description).should('exist')
    cy.contains(notRedBeer.description).should('not.exist')
    cy.get('button').contains('FILTRAR').click()
    cy.get('button').contains('LIMPIAR').click()
  })
})
