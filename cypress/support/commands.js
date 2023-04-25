Cypress.Commands.add("login", (username, password) => {
  cy.testid("username").type(`${username}`);
  cy.testid("password").type(`${password}`);
  cy.testid("login-button").click();
});

cy.testid = (selector_id) => {
  return cy.get(`[data-test=${selector_id}]`);
};
