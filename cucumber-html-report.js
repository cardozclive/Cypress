const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/cucumberReports",
  reportPath: "./cypress/cucumberReports/cucumber-htmlreport.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "130",
    },
    device: "Local test machine",
    platform: {
      name: "ubuntu",
      version: "16.04",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "RSA Project" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: "Oct 30th 2024, 02:31 PM EST" },
      { label: "Execution End Time", value: "Nov 19th 2017, 02:56 PM EST" },
    ],
  },
});