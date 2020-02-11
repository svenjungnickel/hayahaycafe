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

Cypress.Commands.add('iframeLoaded', { prevSubject: 'element' }, $iframe => {
    const contentWindow = $iframe.prop('contentWindow');
    return new Promise(resolve => {
        if (contentWindow && contentWindow.document.readyState === 'complete') {
            resolve(contentWindow);
        } else {
            $iframe.on('load', () => {
                resolve(contentWindow);
            });
        }
    });
});

Cypress.Commands.add('getInDocument', { prevSubject: 'document' }, (document, selector) =>
    Cypress.$(selector, document)
);
