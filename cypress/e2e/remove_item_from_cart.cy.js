const locators = {
  username: "[data-test=username]",
  password: "[data-test=password]",
  loginButton: "[data-test=login-button]",
  addToCart: "[data-test=add-to-cart-sauce-labs-backpack]",
  shoppingCart: "#shopping_cart_container",
  removeItem: "[data-test=remove-sauce-labs-backpack]",
};

const userData = {
  validUsername: "standard_user",
  validPassword: "secret_sauce",
};

describe("Sauce Demo Remove Item from Cart", () => {
  it("Removes an item from the cart successfully", () => {
    cy.visit("https://www.saucedemo.com");

    cy.get(locators.username).type(userData.validUsername);
    cy.get(locators.password).type(userData.validPassword);
    cy.get(locators.loginButton).click();

    cy.get(locators.addToCart).click();

    cy.get(locators.shoppingCart).click();

    cy.get(locators.removeItem).click();

    cy.get(locators.removeItem).should("not.exist");
  });
});
