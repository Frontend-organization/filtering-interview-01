describe('initial integration test', () => {
  it('works', () => {
    cy.visit(`http://localhost:${Cypress.env('APPLICATION_PORT')}/`)
      .get('h2')
      .should('contain.text', 'Home.tsx')
  })
})
