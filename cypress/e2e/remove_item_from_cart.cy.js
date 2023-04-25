describe("Sauce Demo Remove Item from Cart", () => {
  it("Removes an item from the cart successfully", () => {
    cy.visit("https://www.saucedemo.com");

    cy.testid("username").type("standard_user");
    cy.testid("password").type("secret_sauce");
    cy.testid("login-button").click();

    cy.testid("add-to-cart-sauce-labs-backpack").click();

    cy.get("#shopping_cart_container").click();

    cy.testid("remove-sauce-labs-backpack").click();

    cy.testid("remove-sauce-labs-backpack").should("not.exist");
  });
});
