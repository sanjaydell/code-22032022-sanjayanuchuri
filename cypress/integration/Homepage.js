describe('renders the homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('Renders the home component', () => {
    cy.get('#Home').should('exist')
  })
  it('Should Navigate to Explore with Navbar', () => {
    cy.get('div').contains('Explore').click()

    cy.get('#Explore').should('exist')
  })
  it('Should Navigate to About Us with Navbar', () => {
    cy.get('div').contains('About Us').click()

    cy.get('#About').should('exist')
  })
  it('Should have the content', () => {
    cy.get('h1').contains('Rethink')
    cy.get('h1').contains('living & renting')
  })
})