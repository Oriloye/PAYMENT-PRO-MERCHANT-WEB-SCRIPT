const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  // Setup Cucumber preprocessor
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  // Add --disable-gpu flag for Chrome/Electron
  on("before:browser:launch", (browser = {}, launchOptions) => {
    if (browser.name === "chrome" || browser.name === "electron") {
      launchOptions.args.push("--disable-gpu");
    }
    return launchOptions;
  });

  return config;
}

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1280,
    viewportHeight: 800,
    baseUrl: "https://staging-payment-pro.blusalt.net",
    specPattern: "**/*.feature",
    setupNodeEvents,
  },
});
