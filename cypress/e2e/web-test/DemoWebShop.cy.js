describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://demowebshop.tricentis.com/register')
  })
  it('Failed registration - Invalid email', () => {
    cy.get('#gender-female').check()
    cy.get('#FirstName').type('Coco')
    cy.get('#LastName').type('Melon')
    cy.get('#Email').type('cocomelon')
    cy.get('#Password').type('A123456789')
    cy.get('#ConfirmPassword').type('A123456789')
    cy.get('#register-button').click()
    cy.get('.field-validation-error > span').should('contain.text','Wrong email')
  })
  it('Success registration', () => {
    const uniqueEmail = `user${Date.now()}@example.com`
    cy.get('#gender-female').check()
    cy.get('#FirstName').type('coco')
    cy.get('#LastName').type('melon')
    cy.get('#Email').type(uniqueEmail)
    cy.get('#Password').type('A123456789')
    cy.get('#ConfirmPassword').type('A123456789')
    cy.get('#register-button').click()
    cy.url().should('include','https://demowebshop.tricentis.com/registerresult/1')
  })
})