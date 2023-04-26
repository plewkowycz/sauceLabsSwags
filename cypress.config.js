const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    useInlineDiffs: true,
    embeddedScreenshots: true,
    reportDir: "cypress/results",
    reportFilename: "[name].html",
    overwrite: true,
    html: true,
    json: true,
  },

  video: true,
  defaultCommandTimeout: 6000,
  pageLoadTimeout: 120000,
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
