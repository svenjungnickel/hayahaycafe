const socialIcons = () => {
    cy.get('[data-cy=footerSocialMediaIcons]')
        .find('a')
        .first()
        .should('have.attr', 'href')
        .and('include', 'https://');
};

const contactLink = () => {
    cy.get('[data-cy=footerLinkContact]')
        .should('have.attr', 'href')
        .and('include', '/contact');

    cy.get('[data-cy=footerLinkContact]').click();
    cy.get('header');
    cy.url().should('contain', '/contact');
};

const legalLink = () => {
    cy.get('[data-cy=footerLinkLegal]')
        .should('have.attr', 'href')
        .and('include', '/legal');

    cy.get('[data-cy=footerLinkLegal]').click();
    cy.get('header');
    cy.url().should('contain', '/legal');
};

const dataPrivacyLink = () => {
    cy.get('[data-cy=footerLinkDataPrivacy]')
        .should('have.attr', 'href')
        .and('include', '/data-privacy');

    cy.get('[data-cy=footerLinkDataPrivacy]').click();
    cy.get('header');
    cy.url().should('contain', '/data-privacy');
};

const address = () => {
    cy.get('[data-cy=footerAddress]')
        .should('contain', 'Hayahay Cafe')
        .should('contain', 'Camiguin')
        .should('contain', 'Philippines');
};

describe('Footer', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    describe('Desktop', () => {
        beforeEach(() => {
            cy.useDesktop();
        });

        it('Social icons', () => {
            socialIcons();
        });

        it('Contact link', () => {
            contactLink();
        });

        it('Legal link', () => {
            legalLink();
        });

        it('Data privacy link', () => {
            dataPrivacyLink();
        });

        it('Address', () => {
            address();
        });
    });

    describe('Mobile', () => {
        beforeEach(() => {
            cy.useMobile();
        });

        it('Social icons', () => {
            socialIcons();
        });

        it('Contact link', () => {
            contactLink();
        });

        it('Legal link', () => {
            legalLink();
        });

        it('Data privacy link', () => {
            dataPrivacyLink();
        });

        it('Address', () => {
            address();
        });
    });
});
