const checkA11yForPage = page => {
    cy.visit(page);
    cy.injectAxe();
    cy.get('main');
    cy.checkA11y();
};

describe('Accessibility checks', () => {
    describe('Light mode', () => {
        describe('Desktop', () => {
            beforeEach(() => {
                cy.setDarkMode(false);
                cy.useDesktop();
            });

            it('Has no detectable a11y violations on start page', () => {
                checkA11yForPage('/');
            });

            it('Navigates to story page and checks for accessibility violations', () => {
                checkA11yForPage('/story');
            });

            it('Navigates to contact page and checks for accessibility violations', () => {
                checkA11yForPage('/contact');
            });

            it('Navigates to legal page and checks for accessibility violations', () => {
                checkA11yForPage('/legal');
            });

            it('Navigates to data privacy page and checks for accessibility violations', () => {
                checkA11yForPage('/data-privacy');
            });

            it('Navigates to 404 page and checks for accessibility violations', () => {
                checkA11yForPage('/404');
            });
        });

        describe('Mobile', () => {
            beforeEach(() => {
                cy.setDarkMode(false);
                cy.useMobile();
            });

            it('Has no detectable a11y violations on start page', () => {
                checkA11yForPage('/');
            });

            it('Navigates to story page and checks for accessibility violations', () => {
                checkA11yForPage('/story');
            });

            it('Navigates to contact page and checks for accessibility violations', () => {
                checkA11yForPage('/contact');
            });

            it('Navigates to legal page and checks for accessibility violations', () => {
                checkA11yForPage('/legal');
            });

            it('Navigates to data privacy page and checks for accessibility violations', () => {
                checkA11yForPage('/data-privacy');
            });

            it('Navigates to 404 page and checks for accessibility violations', () => {
                checkA11yForPage('/404');
            });
        });
    });

    describe('Dark mode', () => {
        describe('Desktop', () => {
            beforeEach(() => {
                cy.setDarkMode(true);
                cy.useDesktop();
            });

            it('Has no detectable a11y violations on start page', () => {
                checkA11yForPage('/');
            });

            it('Navigates to story page and checks for accessibility violations', () => {
                checkA11yForPage('/story');
            });

            it('Navigates to contact page and checks for accessibility violations', () => {
                checkA11yForPage('/contact');
            });

            it('Navigates to legal page and checks for accessibility violations', () => {
                checkA11yForPage('/legal');
            });

            it('Navigates to data privacy page and checks for accessibility violations', () => {
                checkA11yForPage('/data-privacy');
            });

            it('Navigates to 404 page and checks for accessibility violations', () => {
                checkA11yForPage('/404');
            });
        });

        describe('Mobile', () => {
            beforeEach(() => {
                cy.setDarkMode(true);
                cy.useDesktop();
            });

            it('Has no detectable a11y violations on start page', () => {
                checkA11yForPage('/');
            });

            it('Navigates to story page and checks for accessibility violations', () => {
                checkA11yForPage('/story');
            });

            it('Navigates to contact page and checks for accessibility violations', () => {
                checkA11yForPage('/contact');
            });

            it('Navigates to legal page and checks for accessibility violations', () => {
                checkA11yForPage('/legal');
            });

            it('Navigates to data privacy page and checks for accessibility violations', () => {
                checkA11yForPage('/data-privacy');
            });

            it('Navigates to 404 page and checks for accessibility violations', () => {
                checkA11yForPage('/404');
            });
        });
    });
});
