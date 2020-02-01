describe('Accessibility checks', () => {
    it('Has no detectable a11y violations on start page', () => {
        cy.visit('/');
        cy.injectAxe();
        cy.get('main');
        cy.checkA11y();
    });

    it('Navigates to story page and checks for accessibility violations', () => {
        cy.visit('/story');
        cy.injectAxe();
        cy.get('main');
        cy.checkA11y();
    });

    it('Navigates to contact page and checks for accessibility violations', () => {
        cy.visit('/contact');
        cy.injectAxe();
        cy.get('main');
        cy.checkA11y();
    });

    it('Navigates to legal page and checks for accessibility violations', () => {
        cy.visit('/legal');
        cy.injectAxe();
        cy.get('main');
        cy.checkA11y();
    });

    it('Navigates to data privacy page and checks for accessibility violations', () => {
        cy.visit('/data-privacy');
        cy.injectAxe();
        cy.get('main');
        cy.checkA11y();
    });

    it('Navigates to 404 page and checks for accessibility violations', () => {
        cy.visit('/404');
        cy.injectAxe();
        cy.get('main');
        cy.checkA11y();
    });
});
