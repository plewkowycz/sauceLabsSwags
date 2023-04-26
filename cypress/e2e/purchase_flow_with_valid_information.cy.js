describe("Sauce Demo Purchase Flow", () => {
  it("Completes the purchase flow successfully", () => {
    const item_total = "29.99";
    const tax = "2.40";
    const total = "32.39";

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

    cy.testid("firstName").type("Jon");
    cy.testid("lastName").type("Snow");
    cy.testid("postalCode").type("12345");
    cy.testid("continue").click();

    cy.get(".summary_info").should("contain", item_total);
    cy.get(".summary_tax_label").should("contain", tax);
    cy.get(".summary_total_label").should("contain", total);

    cy.testid("finish").click();

    cy.testid("back-to-products").should("be.visible");
  });
});
