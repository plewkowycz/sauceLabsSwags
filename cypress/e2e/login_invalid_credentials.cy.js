describe("Sauce Demo Invalid Login", () => {
  it("Displays an error message for invalid credentials", () => {
    cy.visit("https://www.saucedemo.com");

    const user_correct = "standard_user_incorrect";
    const password_incorrect_long = "catdogcat";

    cy.login(user_correct, password_incorrect_long);

    cy.testid("error")
      .should("be.visible")
      .and(
        "contain",
        "Epic sadface: Username and password do not match any user in this service"
      );
  });
});
