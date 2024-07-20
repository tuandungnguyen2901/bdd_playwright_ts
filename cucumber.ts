// cucumber.ts
module.exports = {
  default: {
    require: ['features/**/*.ts'],
    format: ['progress', 'json:reports/cucumber-report.json'],
    timeout: 60000,
    requireModule: ['ts-node/register']
  }
};
