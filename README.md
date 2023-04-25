# Preparing Automation Tests for SauceDemo Web Application

## Summary

This repository contains an example of a task prepared for a Quality Engineer. The task includes a solution for manual testing (test cases) and automation tests for the SauceDemo web application.

## Instructions

To execute the tests and generate the report locally, follow these steps:

1. Install the dependencies: `yarn install`
2. Run the tests: `yarn test`
3. Run `yarn report:merge`
4. Generate the test report: `yarn report:generate`

After executing the tests, the test results will be saved in the `cypress/results` folder. The generated report will be available at `cypress/results/mochawesome.html`.

When you push changes to your repository, the GitHub Actions workflow will automatically run the tests, generate the report, and upload it as an artifact. To view the report, navigate to the "Actions" tab in your GitHub repository, click on the relevant workflow run, and download the `mochawesome-report` artifact.

#### Set up of CI/CD

We created an extended page to view Cypress tests by using GHA and actions like below. Once the Cypress job is finished, we have a comment in the PR with a link to the report:

- [GitHub Pages Action](https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-deploy-to-subdirectory-destination_dir)

#### Test Cases

All tests based on which cypress automation tests were created can be found under the `test-cases` directory.

#### Cypress

As an example of how we can utilize Cypress, we added a custom Cypress command for login and simplified the solution for using `testid` selectors.

### Testing Approach

The chosen testing approach uses the Cypress testing framework to write and run end-to-end tests for the Sauce Demo website. The tests cover the purchase flow, login with invalid credentials, and removing an item from the cart.

The GitHub Actions CI/CD pipeline ensures that the tests are executed automatically whenever changes are pushed to the repository, providing quick feedback on any issues that might be introduced.

### Possible Improvements to the Technical Task

- Adding more test cases to cover additional functionality and edge cases.
- Implementing a more comprehensive test report with better visualization and details about the test results.
- Configuring the CI/CD pipeline to run tests on different browsers and platforms to ensure cross-browser compatibility.
- Implementing a better folder structure for organizing test files, fixtures, and other related files.
- Adding code quality checks and linters to ensure consistent code style and best practices across the project.
