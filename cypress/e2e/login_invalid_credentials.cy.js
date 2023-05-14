const locators = {
  error: "[data-test=error]",
};

const userData = {
  incorrectUsername: "standard_user_incorrect",
  incorrectPassword: "catdogcat",
};

const errorMessages = {
  credentialsMismatch:
    "Epic sadface: Username and password do not match any user in this service",
};

describe("Sauce Demo Invalid Login", () => {
  it("Displays an error message for invalid credentials", () => {
    cy.visit("https://www.saucedemo.com");

    cy.login(userData.incorrectUsername, userData.incorrectPassword);

    cy.get(locators.error)
      .should("be.visible")
      .and("contain", errorMessages.credentialsMismatch);
  });
});
