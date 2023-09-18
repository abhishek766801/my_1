// cypress/integration/example.spec.js

describe('My First Cypress Test', () => {
  it('Visits the Cypress website', () => {
    cy.visit('https://www.cypress.io/');
    cy.contains('Download').click();
    cy.url().should('include', '/download');
  });
});
