describe('Test friend details', () => {
  beforeEach(() => {
    cy.visit('/1/details')
    cy.viewport(1024, 768)
  })

  it('should display friend details when a friend is clicked and return to the friends list', () => {
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

  it('should show the photos details on tab change', () => {
    // Check that photos are not displayed
    cy.get('img.rounded').should('not.exist')

    // Click the photos tab
    cy.get("button.tab").eq(1).click()

    // Check the number of images and that they are displayed
    cy.get("img.rounded").should("have.length", 12)
    cy.get('img.rounded').each(($el) => {
      cy.wrap($el).should('be.visible')
    })
  })

  it('should show the photo overlar', () => {
    // Click the photos tab
    cy.get("button.tab").eq(1).click()

    // Click on the first image
    cy.get("img.rounded").first().click()

    // Check that the photo overlay is displayed
    cy.get("button.close-btn").should("exist")
    cy.get("button.close-btn").first().next().should('have.prop', 'tagName', 'IMG')

    // Click the close button
    cy.get("button.close-btn").first().click()
    cy.get("button.close-btn").should("not.exist")
  })
})