describe('Dark mode toggle', () => {
    it('Switch from light mode to dark mode', () => {
        cy.setDarkMode(false);
        cy.visit('/');
        cy.get('body').should('have.class', 'light-mode');
        cy.get('[data-cy=darkModeToggle]:visible').click();
        cy.get('body').should('have.class', 'dark-mode');
    });

    it('Switch from dark mode to light mode', () => {
        cy.setDarkMode(true);
        cy.visit('/');
        cy.get('body').should('have.class', 'dark-mode');
        cy.get('[data-cy=darkModeToggle]:visible').click();
        cy.get('body').should('have.class', 'light-mode');
    });
});
