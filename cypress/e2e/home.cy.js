describe('Login Flow', () => {
  it('redirect to dashboard', () => {
    cy.visit('/login')
    cy.get("[data-test='email']").type('test@test.com')
    cy.get("[data-test='password']").type('1234')
    cy.get("[data-test='submit']").click()
    cy.url().should('include', '/dashboard')
  })
})