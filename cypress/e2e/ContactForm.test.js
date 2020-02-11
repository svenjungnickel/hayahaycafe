const submitInvalidData = () => {
    cy.get('[data-cy=contactForm]').should('be.visible');

    cy.get('[data-cy=contactFirstName]')
        .find('.invalid-feedback')
        .should('not.be.visible');

    cy.get('[data-cy=contactLastName]')
        .find('.invalid-feedback')
        .should('not.be.visible');

    cy.get('[data-cy=contactEmail]')
        .find('.invalid-feedback')
        .should('not.be.visible');

    cy.get('[data-cy=contactSubject]')
        .find('.invalid-feedback')
        .should('not.be.visible');

    cy.get('[data-cy=contactMessage]')
        .find('.invalid-feedback')
        .should('not.be.visible');

    cy.get('[data-cy=contactRecaptcha]')
        .find('.invalid-feedback')
        .should('not.be.visible');

    cy.get('[data-cy=contactForm]').submit();
    cy.get('[data-cy=contactForm]').should('be.visible');

    cy.get('[data-cy=contactFirstName]')
        .find('.invalid-feedback')
        .should('be.visible');

    cy.get('[data-cy=contactLastName]')
        .find('.invalid-feedback')
        .should('be.visible');

    cy.get('[data-cy=contactEmail]')
        .find('.invalid-feedback')
        .should('be.visible');

    cy.get('[data-cy=contactSubject]')
        .find('.invalid-feedback')
        .should('be.visible');

    cy.get('[data-cy=contactMessage]')
        .find('.invalid-feedback')
        .should('be.visible');

    cy.get('[data-cy=contactRecaptcha]')
        .find('.invalid-feedback')
        .should('be.visible');
};

const submitValidData = () => {
    cy.get('[data-cy=contactForm]').should('be.visible');

    cy.get('[data-cy=contactFirstName]')
        .find('input')
        .type('First name')
        .should('have.value', 'First name');

    cy.get('[data-cy=contactLastName]')
        .find('input')
        .type('Last name')
        .should('have.value', 'Last name');

    cy.get('[data-cy=contactEmail]')
        .find('input')
        .type('fake@email.com')
        .should('have.value', 'fake@email.com');

    cy.get('[data-cy=contactSubject]')
        .find('input')
        .type('Test subject')
        .should('have.value', 'Test subject');

    cy.get('[data-cy=contactMessage]')
        .find('textarea')
        .type('Test message')
        .should('have.value', 'Test message');

    // Wait for recaptcha iframe to load. then click checkbox
    cy.get("iframe[src*='recaptcha']:visible")
        .iframeLoaded()
        .its('document')
        .getInDocument('#recaptcha-token')
        .click({ force: true });

    // Unfortunately we can not figure out how when the captcha is solved at the moment.
    // Therefore we are waiting an arbitrary time until we continue.
    // @TODO fix that via https://www.npmjs.com/package/cypress-wait-until
    cy.wait(10000);

    cy.get('[data-cy=contactForm]', { timeout: 10000 }).submit();
    cy.get('[data-cy=contactFormSuccess]').should('be.visible');
    cy.get('[data-cy=contactForm]').should('not.be.visible');
};

describe('Footer', () => {
    beforeEach(() => {
        cy.visit('/contact');
    });

    describe('Desktop', () => {
        beforeEach(() => {
            cy.useDesktop();
        });

        it('Submit with invalid data displays error messages', () => {
            submitInvalidData();
        });

        it('Submit with valid data', () => {
            submitValidData();
        });
    });

    describe('Mobile', () => {
        beforeEach(() => {
            cy.useMobile();
        });

        it('Submit with empty fields', () => {
            submitInvalidData();
        });

        it('Submit with valid data', () => {
            submitValidData();
        });
    });
});
