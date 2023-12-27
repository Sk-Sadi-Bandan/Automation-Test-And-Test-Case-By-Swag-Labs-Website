const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );
  allureWriter(on, config);
  return config;
}

module.exports = defineConfig({
  projectId: 'jd7mpk',
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/e2e/features//**//*.feature",
    chromeWebSecurity: false,
    viewportWidth: 1400,
    viewportHeight: 850,
    env: {
      allureReuseAfterSpec: true,
      defaultCommandTimeout: 60000
    },
  },
  
});

