/// <reference types="cypress" />

describe("Sauce Demo Purchase Flow", () => {
  it("Completes the purchase flow successfully", () => {
    cy.visit("https://www.saucedemo.com");

    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();

    cy.get(".inventory_item:first .btn_inventory").click();

    cy.get("#shopping_cart_container").click();

    cy.get(".cart_item")
      .should("have.length", 1)
      .and("contain", "Sauce Labs Backpack");

    cy.get(".checkout_button").click();

    cy.get("#first-name").type("John");
    cy.get("#last-name").type("Doe");
    cy.get("#postal-code").type("12345");
    cy.get(".cart_button").click();

    cy.get(".summary_info")
      .should("contain", "Payment Information:")
      .and("contain", "Sauce Labs Backpack");

    cy.get(".cart_button").click();

    cy.get(".complete-header").should("contain", "THANK YOU FOR YOUR ORDER");
  });
});
