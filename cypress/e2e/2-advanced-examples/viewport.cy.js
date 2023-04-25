/// <reference types="cypress" />

context("Viewport", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/commands/viewport");
  });

  it("cy.viewport() - set the viewport size and dimension", () => {
    // https://on.cypress.io/viewport

    cy.get("#navbar").should("be.visible");
    cy.viewport(320, 480);

    // the navbar should have collapse since our screen is smaller
    cy.get("#navbar").should("not.be.visible");
    cy.get(".navbar-toggle").should("be.visible").click();
    cy.get(".nav").find("a").should("be.visible");

    // lets see what our app looks like on a super large screen
    cy.viewport(2999, 2999);

    // cy.viewport() accepts a set of preset sizes
    // to easily set the screen to a device's width and height

    // We added a cy.wait() between each viewport change so you can see
    // the change otherwise it is a little too fast to see :)

    cy.viewport("macbook-15");
    cy.wait(200);
    cy.viewport("macbook-13");
    cy.wait(200);
    cy.viewport("macbook-11");
    cy.wait(200);
    cy.viewport("ipad-2");
    cy.wait(200);
    cy.viewport("ipad-mini");
    cy.wait(200);
    cy.viewport("iphone-6+");
    cy.wait(200);
    cy.viewport("iphone-6");
    cy.wait(200);
    cy.viewport("iphone-5");
    cy.wait(200);
    cy.viewport("iphone-4");
    cy.wait(200);
    cy.viewport("iphone-3");
    cy.wait(200);

    // cy.viewport() accepts an orientation for all presets
    // the default orientation is 'portrait'
    cy.viewport("ipad-2", "portrait");
    cy.wait(200);
    cy.viewport("iphone-4", "landscape");
    cy.wait(200);

    // The viewport will be reset back to the default dimensions
    // in between tests (the  default can be set in cypress.config.{js|ts})
  });
});

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
