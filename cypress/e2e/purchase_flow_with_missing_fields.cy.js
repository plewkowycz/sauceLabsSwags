describe("Sauce Demo Purchase Flow - Missing Required Fields", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com");

    cy.testid("username").type("standard_user");
    cy.testid("password").type("secret_sauce");
    cy.testid("login-button").click();

    cy.testid("add-to-cart-sauce-labs-backpack").click();

    cy.get("#shopping_cart_container").click();

    cy.get(".cart_item")
      .should("have.length", 1)
      .and("contain", "Sauce Labs Backpack");

    cy.testid("checkout").click();
  });

  it("Cannot complete purchase flow with missing required fields", () => {
    cy.testid("continue").click();
    cy.testid("error").should("contain", "Error: First Name is required");

    cy.testid("firstName").type("Jon");
    cy.testid("continue").click();
    cy.testid("error").should("contain", "Error: Last Name is required");

    cy.testid("lastName").type("Snow");
    cy.testid("continue").click();
    cy.testid("error").should("contain", "Error: Postal Code is required");

    cy.testid("postalCode").type("12345");
    cy.testid("lastName").clear();
    cy.testid("continue").click();
    cy.testid("error").should("contain", "Error: Last Name is required");
  });
});
