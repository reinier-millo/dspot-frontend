describe('Test friends list', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.viewport(1024, 768)
  })
  
  it('should display friends list with 6 friends', () => {
    // Check if the friends list is displayed
    cy.get(".friend-item-container").should("have.length", 6)
    cy.get(".friend-item-container-cta").should("have.length", 6)
  })

  it('should display friend details when a friend is clicked and return to the friends list', () => {
    // Click the first friend Details button
    cy.get(".friend-item-container-cta").first().click()
    cy.wait(200)
    // Check if the name is correct
    cy.get(".friend-details-name").should("contain", "Jeremy Davis")
    // Check if the bio title is correct
    cy.get(".info-entry-title").first().should("contain", "Bio:")
    // Check if the phone number is correct
    cy.get(".info-entry-title").eq(1).next().should("contain", "(820) 289-1818")
    // Check if the back button exists and click it
    cy.get(".back-btn").first().should("exist")
    cy.get(".back-btn").first().click()
    // Check if the friends list is displayed again
    cy.get(".friend-item-container").should("have.length", 6)
    cy.get(".friend-item-container-cta").should("have.length", 6)
  })
})