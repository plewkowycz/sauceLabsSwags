const locators = {
  username: "[data-test=username]",
  password: "[data-test=password]",
  loginButton: "[data-test=login-button]",
  addToCart: "[data-test=add-to-cart-sauce-labs-backpack]",
  shoppingCart: "#shopping_cart_container",
  cartItem: ".cart_item",
  checkout: "[data-test=checkout]",
  firstName: "[data-test=firstName]",
  lastName: "[data-test=lastName]",
  postalCode: "[data-test=postalCode]",
  continue: "[data-test=continue]",
  summaryInfo: ".summary_info",
  summaryTaxLabel: ".summary_tax_label",
  summaryTotalLabel: ".summary_total_label",
  finish: "[data-test=finish]",
  backToProducts: "[data-test=back-to-products]",
};

const userData = {
  validUsername: "standard_user",
  validPassword: "secret_sauce",
  firstName: "Jon",
  lastName: "Snow",
  postalCode: "12345",
};

const purchaseInfo = {
  itemTotal: "29.99",
  tax: "2.40",
  total: "32.39",
};

describe("Sauce Demo Purchase Flow", () => {
  it("Completes the purchase flow successfully", () => {
    cy.visit("https://www.saucedemo.com");

    cy.get(locators.username).type(userData.validUsername);
    cy.get(locators.password).type(userData.validPassword);
    cy.get(locators.loginButton).click();

    cy.get(locators.addToCart).click();

    cy.get(locators.shoppingCart).click();

    cy.get(locators.cartItem)
      .should("have.length", 1)
      .and("contain", "Sauce Labs Backpack");

    cy.get(locators.checkout).click();

    cy.get(locators.firstName).type(userData.firstName);
    cy.get(locators.lastName).type(userData.lastName);
    cy.get(locators.postalCode).type(userData.postalCode);
    cy.get(locators.continue).click();

    cy.get(locators.summaryInfo).should("contain", purchaseInfo.itemTotal);
    cy.get(locators.summaryTaxLabel).should("contain", purchaseInfo.tax);
    cy.get(locators.summaryTotalLabel).should("contain", purchaseInfo.total);

    cy.get(locators.finish).click();

    cy.get(locators.backToProducts).should("be.visible");
  });
});
