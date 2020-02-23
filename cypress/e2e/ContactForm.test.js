const recaptchaDarkTheme = () => {
    cy.getIframeBody("iframe[src*='recaptcha']:visible").find('.rc-anchor-light');

    cy.setDarkMode(true);
    cy.visit('/contact');

    cy.getIframeBody("iframe[src*='recaptcha']:visible").find('.rc-anchor-dark');
};

const submitEmptyData = () => {
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

const submitInvalidEmail = () => {
    cy.get('[data-cy=contactForm]').should('be.visible');

    cy.get('[data-cy=contactEmail]')
        .find('.invalid-feedback')
        .should('not.be.visible');

    cy.get('[data-cy=contactEmail]')
        .find('input')
        .type('invalid_email')
        .should('have.value', 'invalid_email');

    cy.get('[data-cy=contactForm]').submit();
    cy.get('[data-cy=contactForm]').should('be.visible');

    cy.get('[data-cy=contactEmail]')
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

    cy.getIframeBody("iframe[src*='recaptcha']:visible")
        .find('.recaptcha-checkbox')
        .click();

    // Unfortunately we can not spy on the recaptcha request to wait for the response.
    // Therefore we are waiting an arbitrary time until we continue.
    cy.wait(10000);

    cy.get('[data-cy=contactForm]', { timeout: 10000 }).submit();
    cy.get('[data-cy=contactFormSuccess]').should('be.visible');
    cy.get('[data-cy=contactForm]').should('not.be.visible');
};

describe('Contact form', () => {
    beforeEach(() => {
        cy.setDarkMode(false);
        cy.visit('/contact');
    });

    describe('Desktop', () => {
        beforeEach(() => {
            cy.useDesktop();
        });

        it('Load Recaptcha dark theme', () => {
            recaptchaDarkTheme();
        });

        it('Submit empty data displays error messages', () => {
            submitEmptyData();
        });

        it('Submit invalid email address displays email address error messages', () => {
            submitInvalidEmail();
        });

        it('Submit valid data displays success message', () => {
            submitValidData();
        });
    });

    describe('Mobile', () => {
        beforeEach(() => {
            cy.setDarkMode(false);
            cy.useMobile();
        });

        it('Load Recaptcha dark theme', () => {
            recaptchaDarkTheme();
        });

        it('Submit empty data displays error messages', () => {
            submitEmptyData();
        });

        it('Submit invalid email address displays email address error messages', () => {
            submitInvalidEmail();
        });

        it('Submit valid data displays success message', () => {
            submitValidData();
        });
    });
});
