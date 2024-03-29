const checkA11yForPage = (page) => {
    cy.visit(page);
    cy.injectAxe();
    cy.get('header img[loading=lazy]').should('be.visible');

    // To turn off uncaught exception handling
    // https://docs.cypress.io/api/events/catalog-of-events.html#Examples
    cy.on('uncaught:exception', (err, runnable) => {
        console.error(err.message);

        return false;
    });

    cy.checkA11y();
};

describe('Accessibility checks', () => {
    describe('Light mode', () => {
        beforeEach(() => {
            cy.setDarkMode(false);
        });

        describe('Desktop', () => {
            beforeEach(() => {
                cy.useDesktop();
            });

            it('Has no detectable accessibility violations on start page', () => {
                checkA11yForPage('/');
            });

            it('Has no detectable accessibility violations on menu page', () => {
                checkA11yForPage('/menu/');
            });

            it('Has no detectable accessibility violations on about page', () => {
                checkA11yForPage('/about/');
            });

            it('Has no detectable accessibility violations on gallery page', () => {
                checkA11yForPage('/gallery/');
            });

            it('Has no detectable accessibility violations on contact page', () => {
                checkA11yForPage('/contact/');
            });

            it('Has no detectable accessibility violations on legal page', () => {
                checkA11yForPage('/legal/');
            });

            it('Has no detectable accessibility violations on data privacy page', () => {
                checkA11yForPage('/data-privacy/');
            });

            it('Has no detectable accessibility violations on 404 page', () => {
                checkA11yForPage('/404/');
            });
        });

        describe('Mobile', () => {
            beforeEach(() => {
                cy.useMobile();
            });

            it('Has no detectable accessibility violations on start page', () => {
                checkA11yForPage('/');
            });

            it('Has no detectable accessibility violations on about page', () => {
                checkA11yForPage('/about');
            });

            it('Has no detectable accessibility violations on contact page', () => {
                checkA11yForPage('/contact');
            });

            it('Has no detectable accessibility violations on gallery page', () => {
                checkA11yForPage('/gallery');
            });

            it('Has no detectable accessibility violations on legal page', () => {
                checkA11yForPage('/legal');
            });

            it('Has no detectable accessibility violations on data privacy page', () => {
                checkA11yForPage('/data-privacy');
            });

            it('Has no detectable accessibility violations on 404 page', () => {
                checkA11yForPage('/404');
            });
        });
    });

    describe('Dark mode', () => {
        beforeEach(() => {
            cy.setDarkMode(true);
        });

        describe('Desktop', () => {
            beforeEach(() => {
                cy.useDesktop();
            });

            it('Has no detectable accessibility violations on start page', () => {
                checkA11yForPage('/');
            });

            it('Has no detectable accessibility violations on about page', () => {
                checkA11yForPage('/about');
            });

            it('Has no detectable accessibility violations on contact page', () => {
                checkA11yForPage('/contact');
            });

            it('Has no detectable accessibility violations on gallery page', () => {
                checkA11yForPage('/gallery');
            });

            it('Has no detectable accessibility violations on legal page', () => {
                checkA11yForPage('/legal');
            });

            it('Has no detectable accessibility violations on data privacy page', () => {
                checkA11yForPage('/data-privacy');
            });

            it('Has no detectable accessibility violations on 404 page', () => {
                checkA11yForPage('/404');
            });
        });

        describe('Mobile', () => {
            beforeEach(() => {
                cy.useMobile();
            });

            it('Has no detectable accessibility violations on start page', () => {
                checkA11yForPage('/');
            });

            it('Has no detectable accessibility violations on about page', () => {
                checkA11yForPage('/about');
            });

            it('Has no detectable accessibility violations on contact page', () => {
                checkA11yForPage('/contact');
            });

            it('Has no detectable accessibility violations on gallery page', () => {
                checkA11yForPage('/gallery');
            });

            it('Has no detectable accessibility violations on legal page', () => {
                checkA11yForPage('/legal');
            });

            it('Has no detectable accessibility violations on data privacy page', () => {
                checkA11yForPage('/data-privacy');
            });

            it('Has no detectable accessibility violations on 404 page', () => {
                checkA11yForPage('/404');
            });
        });
    });
});
