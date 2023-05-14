const locators = {
  username: "[data-test=username]",
  password: "[data-test=password]",
  loginButton: "[data-test=login-button]",
  addToCart: "[data-test=add-to-cart-sauce-labs-backpack]",
  shoppingCart: "#shopping_cart_container",
  cartItem: ".cart_item",
  checkout: "[data-test=checkout]",
  continue: "[data-test=continue]",
  error: "[data-test=error]",
  firstName: "[data-test=firstName]",
  lastName: "[data-test=lastName]",
  postalCode: "[data-test=postalCode]",
};

const userData = {
  validUsername: "standard_user",
  validPassword: "secret_sauce",
  firstName: "Jon",
  lastName: "Snow",
  postalCode: "12345",
};

const errorMessages = {
  firstNameRequired: "Error: First Name is required",
  lastNameRequired: "Error: Last Name is required",
  postalCodeRequired: "Error: Postal Code is required",
};

describe("Sauce Demo Purchase Flow - Missing Required Fields", () => {
  beforeEach(() => {
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
  });

  it("Cannot complete purchase flow with missing required fields", () => {
    cy.get(locators.continue).click();
    cy.get(locators.error).should("contain", errorMessages.firstNameRequired);

    cy.get(locators.firstName).type(userData.firstName);
    cy.get(locators.continue).click();
    cy.get(locators.error).should("contain", errorMessages.lastNameRequired);

    cy.get(locators.lastName).type(userData.lastName);
    cy.get(locators.continue).click();
    cy.get(locators.error).should("contain", errorMessages.postalCodeRequired);

    cy.get(locators.postalCode).type(userData.postalCode);
    cy.get(locators.lastName).clear();
    cy.get(locators.continue).click();
    cy.get(locators.error).should("contain", errorMessages.lastNameRequired);
  });
});
