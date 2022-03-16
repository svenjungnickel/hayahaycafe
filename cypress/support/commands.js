/**
 * @func cy.setDarkMode
 * @param {boolean} mode - true for dark mode, false for light mode
 */
Cypress.Commands.add('setDarkMode', (mode) => {
    window.localStorage.setItem('darkMode', mode.toString());
});

/**
 * @func cy.useDesktop
 */
Cypress.Commands.add('useDesktop', () => {
    cy.viewport(1024, 768);
});

/**
 * @func cy.useMobile
 */
Cypress.Commands.add('useMobile', () => {
    cy.viewport(320, 480);
});

/**
 * https://cypress.io/blog/2020/02/12/working-with-iframes-in-cypress/
 *
 * @func cy.getIframeBody
 * @param {String} selector - The selector of the iframe
 */
Cypress.Commands.add('getIframeBody', ($selector) => {
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
            .then((body) => cy.wrap(body, { log: false }))
    );
});
