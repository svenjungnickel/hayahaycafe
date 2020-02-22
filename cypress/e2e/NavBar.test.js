const minimizeNavBar = () => {
    cy.visit('/');

    cy.get('[data-cy=navBar]')
        .should('have.attr', 'class')
        .and('match', /navBar/);

    cy.scrollTo('bottom');

    cy.get('[data-cy=navBar]')
        .should('have.attr', 'class')
        .and('match', /navBar-small/);
};

const darkMode = () => {
    cy.setDarkMode(false);
    cy.get('[data-cy=navBar]').should('have.class', 'navbar-light');

    cy.setDarkMode(true);
    cy.get('[data-cy=navBar]').should('have.class', 'navbar-dark');
};

const homeLink = (mobile = false) => {
    cy.visit('/404');

    cy.get('[data-cy=navBarLinkHome]')
        .should('have.attr', 'href')
        .and('include', '/');

    if (true === mobile) {
        cy.get('[data-cy=navBarToggle]').click();
    }

    cy.get('[data-cy=navBarLinkHome]').click();
    cy.get('header');
    cy.url().should('contain', '/');
    cy.get('[data-cy=navBarLinkHome]').should('have.class', 'active');
};

const logoLink = (mobile = false) => {
    cy.visit('/404');

    cy.get('[data-cy=navBarLinkLogo]:visible')
        .should('have.attr', 'href')
        .and('include', '/');

    if (true === mobile) {
        cy.get('[data-cy=navBarToggle]').click();
    }

    cy.get('[data-cy=navBarLinkLogo]:visible').click();
    cy.get('header');
    cy.url().should('contain', '/');
    cy.get('[data-cy=navBarLinkHome]').should('have.class', 'active');
};

const storyLink = (mobile = false) => {
    cy.visit('/');

    cy.get('[data-cy=navBarLinkStory]')
        .should('have.attr', 'href')
        .and('include', 'story');

    if (true === mobile) {
        cy.get('[data-cy=navBarToggle]').click();
    }

    cy.get('[data-cy=navBarLinkStory]').click();
    cy.get('header');
    cy.url().should('contain', '/story');
    cy.get('[data-cy=navBarLinkStory]').should('have.class', 'active');
};

const galleryLink = (mobile = false) => {
    cy.visit('/');

    cy.get('[data-cy=navBarLinkGallery]')
        .should('have.attr', 'href')
        .and('include', 'gallery');

    if (true === mobile) {
        cy.get('[data-cy=navBarToggle]').click();
    }

    cy.get('[data-cy=navBarLinkGallery]').click();
    cy.get('header');
    cy.url().should('contain', '/gallery');
    cy.get('[data-cy=navBarLinkGallery]').should('have.class', 'active');
};

describe('Navigation bar', () => {
    describe('Desktop', () => {
        beforeEach(() => {
            cy.useDesktop();
        });

        it('Scroll down minimizes the navigation bar', () => {
            minimizeNavBar();
        });

        it('Dark mode', () => {
            darkMode();
        });

        it('Home link', () => {
            homeLink();
        });

        it('Logo link', () => {
            logoLink();
        });

        it('Story link', () => {
            storyLink();
        });

        it('Gallery link', () => {
            galleryLink();
        });
    });

    describe('Mobile', () => {
        beforeEach(() => {
            cy.useMobile();
        });

        it('Scroll down minimizes the navigation bar', () => {
            minimizeNavBar();
        });

        it('Dark mode', () => {
            darkMode();
        });

        it('Home link', () => {
            homeLink(true);
        });

        it('Logo link', () => {
            logoLink(true);
        });

        it('Story link', () => {
            storyLink(true);
        });

        it('Gallery link', () => {
            galleryLink(true);
        });
    });
});
