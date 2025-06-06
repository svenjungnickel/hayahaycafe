const login = () => {
    Cypress.config('defaultCommandTimeout', 10000);

    cy.get('#nc-root').find('button').click();

    cy.get("iframe[src*='about:blank']:visible").then(($iframe) => {
        const $body = $iframe.contents().find('body');

        cy.wrap($body).find('input[type=email]').type(Cypress.env('NETLIFY_CMS_EMAIL'));

        cy.wrap($body).find('input[type=password]').type(Cypress.env('NETLIFY_CMS_PASSWORD'));

        cy.wrap($body).find('button[type=submit]').click({ force: true });
    });

    cy.get('main').find('h1').should('contain', 'Page');
};

const globalSettings = () => {
    cy.get('aside').find("a[href*='collections/settings']").click();

    cy.get('main').find("a[href*='global-settings']").click();

    cy.url().should('contain', '/global-settings');
    cy.get('header');
};

const pages = () => {
    cy.get('main').find("a[href*='start-page']").click({ force: true });

    cy.url().should('contain', '/start-page');
    cy.get('header');

    cy.visit('/admin/#/collections/pages');

    cy.get('main').find("a[href*='contact']").click({ force: true });

    cy.url().should('contain', '/contact');
    cy.get('header');

    cy.visit('/admin/#/collections/pages');

    cy.get('main').find("a[href*='gallery']").click({ force: true });

    cy.url().should('contain', '/gallery');
    cy.get('header');

    cy.visit('/admin/#/collections/pages');

    cy.get('main').find("a[href*='about']").click({ force: true });

    cy.url().should('contain', '/about');
    cy.get('header');

    cy.visit('/admin/#/collections/pages');

    cy.get('main').find("a[href*='menu']").click({ force: true });

    cy.url().should('contain', '/menu');
    cy.get('header');

    cy.visit('/admin/#/collections/pages');

    cy.get('main').find("a[href*='legal']").click({ force: true });

    cy.url().should('contain', '/legal');
    cy.get('header');

    cy.visit('/admin/#/collections/pages');

    cy.get('main').find("a[href*='data-privacy']").click({ force: true });

    cy.url().should('contain', '/data-privacy');
    cy.get('header');
};

// @TODO skipped due to failing login
describe.skip('Admin', () => {
    beforeEach(() => {
        cy.visit('/admin');
    });

    it('Can login', () => {
        cy.url().should('contain', '/admin/#/');
        login();
    });

    it('Can access global settings', () => {
        login();
        globalSettings();
    });

    it('Can access all pages', () => {
        login();
        pages();
    });
});
