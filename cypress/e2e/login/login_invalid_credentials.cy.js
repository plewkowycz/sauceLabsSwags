/// <reference types="cypress" />

describe("Sauce Demo Invalid Login", () => {
  it("Displays an error message for invalid credentials", () => {
    cy.visit("https://www.saucedemo.com");

    cy.get("#user-name").type("invalid_user");
    cy.get("#password").type("invalid_password");
    cy.get("#login-button").click();

    cy.get(".error-message-container")
      .should("be.visible")
      .and(
        "contain",
        "Epic sadface: Username and password do not match any user in this service"
      );
  });
});
