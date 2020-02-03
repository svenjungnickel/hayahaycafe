const light2dark = () => {
    cy.setDarkMode(false);
    cy.visit('/');
    cy.get('body').should('have.class', 'light-mode');
    cy.get('[data-cy=darkModeToggle]:visible').click();
    cy.get('body').should('have.class', 'dark-mode');
};

const dark2light = () => {
    cy.setDarkMode(true);
    cy.visit('/');
    cy.get('body').should('have.class', 'dark-mode');
    cy.get('[data-cy=darkModeToggle]:visible').click();
    cy.get('body').should('have.class', 'light-mode');
};

describe('Dark mode toggle', () => {
    describe('Desktop', () => {
        beforeEach(() => {
            cy.useDesktop();
        });

        it('Switch from light mode to dark mode', () => {
            light2dark();
        });

        it('Switch from dark mode to light mode', () => {
            dark2light();
        });
    });

    describe('Mobile', () => {
        beforeEach(() => {
            cy.useMobile();
        });

        it('Switch from light mode to dark mode', () => {
            light2dark();
        });

        it('Switch from dark mode to light mode', () => {
            dark2light();
        });
    });
});
