# Example solution for QA technical task

## Summary

This repo shows an example of a task prepared for a Quality Engineer to include a solution for manual testing and automation tests for the SauceDemo web application.
In addition to that, it should have automation tests, a CI/CD pipeline, and Docker. The SauceDemo web application is the property of `Sauce Labs`.

## sauceLabsSwags

## Instructions

To execute the tests and generate the report locally, follow these steps:

1. Install the dependencies: `yarn install`
2. Run the tests: `yarn test`
3. Run `report:merge`
4. Generate the test report: `yarn report:generate`

After executing the tests, the test results will be saved in cypress/results folder. The generated report will be available at cypress/results/mochawesome.html.

When you push changes to your repository, the GitHub Actions workflow will automatically run the tests, generate the report, and upload it as an artifact. To view the report, navigate to the "Actions" tab in your GitHub repository, click on the relevant workflow run, and download the "mochawesome-report" artifact.

#### Set up of CI/CD

Using GHA and actions like:

- [GitHub Pages Action](https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-deploy-to-subdirectory-destination_dir)

### Describe the chosen testing approach and anything you could improve about the technical task

The chosen testing approach uses the Cypress testing framework to write and run end-to-end tests for the Sauce Demo website. The tests cover the purchase flow, login with invalid credentials, and removing an item from the cart.

The GitHub Actions CI/CD pipeline ensures that the tests are executed automatically whenever changes are pushed to the repository, providing quick feedback on any issues that might be introduced.

Some possible improvements to the technical task include:

Adding more test cases to cover additional functionality and edge cases.
Implementing a more comprehensive test report with better visualization and details about the test results.
Configuring the CI/CD pipeline to run tests on different browsers and platforms to ensure cross-browser compatibility.
Implementing a better folder structure for organizing test files, fixtures, and other related files.
Adding code quality checks and linters to ensure consistent code style and best practices across the project.
