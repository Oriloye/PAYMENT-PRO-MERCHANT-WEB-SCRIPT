
// Import commands.js using ES2015 syntax:
import './commands';
import 'cypress-xpath';

Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('ResizeObserver loop completed with undelivered notifications')) {
    return false // prevent Cypress from failing the test
  }

  // cypress/support/e2e.js

Cypress.on('log:added', (options) => {
  if (options.displayName === 'xhr' || options.displayName === 'fetch') {
    options.set({ displayName: null, message: null });
  }
});


})




            