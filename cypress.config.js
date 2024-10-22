const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'su69fi',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js',
    fixturesFolder: "cypress/fixtures"

    
  },
});
