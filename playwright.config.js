// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    headless: true,
    slowMo: 50,
    viewport: { width: 1280, height: 720 },
  },
});
