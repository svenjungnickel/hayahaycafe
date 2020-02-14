// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('setDarkMode', mode => {
    window.localStorage.setItem('darkMode', mode.toString());
});

Cypress.Commands.add('useDesktop', () => {
    cy.viewport(1024, 768);
});

Cypress.Commands.add('useMobile', () => {
    cy.viewport(320, 480);
});

// https://cypress.io/blog/2020/02/12/working-with-iframes-in-cypress/
Cypress.Commands.add('getIframeBody', $selector => {
    cy.log(`getIframeBody from ${$selector}`);

    // get the iframe > document > body
    // and retry until the body element is not empty
    return (
        cy
            .get($selector, { log: false })
            .its('0.contentDocument.body', { log: false })
            .should('not.be.empty')
            // wraps "body" DOM element to allow
            // chaining more Cypress commands, like ".find(...)"
            // https://on.cypress.io/wrap
            .then(body => cy.wrap(body, { log: false }))
    );
});
