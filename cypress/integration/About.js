describe('renders the About', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/#About')
  })
  it('renders the About component', () => {
    cy.get('#About').should('exist')
    cy.get('div').contains('About Us')
    cy.get('div').contains('Allow us to tell a short story....')
    cy.get('div').contains('Chapter 1')
    cy.get('div').contains('Chapter 2')
    cy.get('div').contains('Chapter 3')
    cy.get('div').contains('Chapter 4')
  })
})