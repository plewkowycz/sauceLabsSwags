/// <reference types="cypress" />

describe("Sauce Demo Remove Item from Cart", () => {
  it("Removes an item from the cart successfully", () => {
    cy.visit("https://www.saucedemo.com");

    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();

    cy.get(".inventory_item:first .btn_inventory").click();

    cy.get("#shopping_cart_container").click();

    cy.get(".cart_item")
      .should("have.length", 1)
      .and("contain", "Sauce Labs Backpack");

    cy.get(".cart_item:first .cart_button").click();

    cy.get(".cart_item").should("not.exist");
  });
});
