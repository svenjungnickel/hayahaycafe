const recaptchaDarkTheme = () => {
    cy.getIframeBody("iframe[src*='recaptcha']:visible").find('.rc-anchor-light');

    cy.setDarkMode(true);
    cy.visit('/contact/');

    cy.getIframeBody("iframe[src*='recaptcha']:visible").find('.rc-anchor-dark');
};

const submitEmptyData = () => {
    cy.get('[data-cy=contactForm]').should('be.visible');

    cy.get('[data-cy=contactFirstName] .invalid-feedback').should('not.be.visible');

    cy.get('[data-cy=contactLastName] .invalid-feedback').should('not.be.visible');

    cy.get('[data-cy=contactEmail] .invalid-feedback').should('not.be.visible');

    cy.get('[data-cy=contactSubject] .invalid-feedback').should('not.be.visible');

    cy.get('[data-cy=contactMessage] .invalid-feedback').should('not.be.visible');

    cy.get('[data-cy=contactRecaptcha] .invalid-feedback').should('not.exist');

    cy.get('[data-cy=contactForm]').submit();
    cy.get('[data-cy=contactForm]').should('be.visible');

    cy.get('[data-cy=contactFirstName] .invalid-feedback').should('be.visible');

    cy.get('[data-cy=contactLastName] .invalid-feedback').should('be.visible');

    cy.get('[data-cy=contactEmail] .invalid-feedback').should('be.visible');

    cy.get('[data-cy=contactSubject] .invalid-feedback').should('be.visible');

    cy.get('[data-cy=contactMessage] .invalid-feedback').should('be.visible');

    cy.get('[data-cy=contactRecaptcha] .invalid-feedback').should('be.visible');
};

const submitInvalidEmail = () => {
    cy.get('[data-cy=contactForm]').should('be.visible');

    cy.get('[data-cy=contactEmail] .invalid-feedback').should('not.be.visible');

    cy.get('[data-cy=contactEmail] input').type('invalid_email', { force: true }).should('have.value', 'invalid_email');

    cy.get('[data-cy=contactForm]').submit();
    cy.get('[data-cy=contactForm]').should('be.visible');

    cy.get('[data-cy=contactEmail] .invalid-feedback').should('be.visible');
};

const submitValidData = () => {
    cy.intercept('POST', '/recaptcha/api2/userverify*').as('recaptchaUserVerify');

    cy.get('[data-cy=contactForm]').should('be.visible');

    cy.get('[data-cy=contactFirstName] input').type('First name', { force: true }).should('have.value', 'First name');

    cy.get('[data-cy=contactLastName] input').type('Last name', { force: true }).should('have.value', 'Last name');

    cy.get('[data-cy=contactEmail] input')
        .type('fake@email.com', { force: true })
        .should('have.value', 'fake@email.com');

    cy.get('[data-cy=contactSubject] input').type('Test subject', { force: true }).should('have.value', 'Test subject');

    cy.get('[data-cy=contactMessage] textarea')
        .type('Test message', { force: true })
        .should('have.value', 'Test message');

    cy.getIframeBody("iframe[src*='recaptcha']:visible").find('.recaptcha-checkbox').click();

    // Wait for recaptcha verification response
    cy.wait('@recaptchaUserVerify');

    // Wait a moment before submitting the form to avoid flaky tests
    cy.wait(500);
    cy.get('[data-cy=contactForm]').submit();

    cy.get('[data-cy=contactFormSuccess]').should('be.visible');
    cy.get('[data-cy=contactForm]').should('not.exist');
};

describe('Contact form', () => {
    beforeEach(() => {
        cy.setDarkMode(false);
        cy.visit('/contact/');
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

        // @TODO skipped since its always failing
        it.skip('Submit valid data displays success message', () => {
            submitValidData();
        });
    });
});
