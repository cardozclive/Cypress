const { defineConfig } = require("cypress");
const preprocessor = require("@cypress/cypress-cucumber-preprocessor");
const browserify = require("@cypress/browserify-preprocessor");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}
module.exports = defineConfig({
  env: {
    url: "https://rahulshettyacademy.com"
  },
  projectId: "su69fi",
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'TestReportCypressLearning',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    videoOnFailOnly: false, //<<<----------Keep it as false to record all test run videos 
  },
  video: true,
  retries: {
    runMode: 1,
    openMode: 0
  },
  defaultCommandTimeout: 4000,
  projectId: 'su69fi',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: "cypress/integration/examples/*.js",
    fixturesFolder: "cypress/fixtures",
  },


});
