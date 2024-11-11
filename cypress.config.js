const { defineConfig } = require("cypress");
const sqlServer = require('cypress-sql-server');
const browserify = require("@cypress/browserify-preprocessor");
const {addCucumberPreprocessorPlugin,} = require("@badeball/cypress-cucumber-preprocessor");
const {preprendTransformerToOptions,} = require("@badeball/cypress-cucumber-preprocessor/browserify");


async function setupNodeEvents(on, config) {

  config.db = {
    userName: "rsa",
    password: "$Codename1",
    server: "rsadbdemo.database.windows.net",
    options: {
        database: "rahulshettyacademy",
        encrypt : true,
        rowCollectionOnRequestCompletion : true
    }
}
  require('cypress-mochawesome-reporter/plugin')(on);

  tasks = sqlServer.loadDBPlugin(config.db);
  on('task', tasks);
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
    /*setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },*/
    setupNodeEvents,
    specPattern: "cypress/Integration/examples/**/*.{feature,js, jxs}",
    fixturesFolder: "cypress/fixtures",
  },
});
