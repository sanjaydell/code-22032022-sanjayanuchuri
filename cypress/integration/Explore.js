describe('renders the Explore', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/#Explore')
  })
  it('renders the Explore component', () => {
    cy.get('#Explore').should('exist')
    cy.get('div').contains('Explore')
    cy.get('div').contains('from one-guest rooms to')
    cy.get('div').contains('penthouses with pools and gardens')
  })
})