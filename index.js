// run-cypress.js
const cypress = require('cypress');
//jgfh
async function runCypressTests() {
  try {
    const results = await cypress.run({
      spec: 'cypress/integration/test.specs.js', // Path to your test file
    });

    // Process test results
    console.log(results);
  } catch (error) {
    console.error('Cypress run failed:', error);
    process.exit(1);
  }
}

runCypressTests();
