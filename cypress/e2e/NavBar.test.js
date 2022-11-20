const minimizeNavBar = () => {
    cy.visit('/');

    cy.get('[data-cy=navBar]')
        .should('have.attr', 'class')
        .and('match', /navBar/);

    cy.scrollTo('bottom', { duration: 300 });

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
    cy.visit('/404/');

    cy.get('[data-cy=navBarLinkHome]').should('have.attr', 'href').and('include', '/');

    if (true === mobile) {
        cy.get('[data-cy=navBarToggle]').click();
    }

    cy.get('[data-cy=navBarLinkHome]').click();
    cy.get('header');
    cy.url().should('contain', '/');
    cy.get('[data-cy=navBarLinkHome]').should('have.class', 'active');
};

const logoLink = (mobile = false) => {
    cy.visit('/404/');

    cy.get('[data-cy=navBarLinkLogo]:visible').should('have.attr', 'href').and('include', '/');

    if (true === mobile) {
        cy.get('[data-cy=navBarToggle]').click();
    }

    cy.get('[data-cy=navBarLinkLogo]:visible').click();
    cy.get('header');
    cy.url().should('contain', '/');
    cy.get('[data-cy=navBarLinkHome]').should('have.class', 'active');
};

const menuLink = (mobile = false) => {
    cy.visit('/');

    cy.get('[data-cy=navBarLinkMenu]').should('have.attr', 'href').and('include', 'menu');

    if (true === mobile) {
        cy.get('[data-cy=navBarToggle]').click();
    }

    cy.get('[data-cy=navBarLinkMenu]').click();
    cy.get('header');
    cy.url().should('contain', '/menu/');
    cy.get('[data-cy=navBarLinkMenu]').should('have.class', 'active');
};

const boodleBilaoLink = (mobile = false) => {
    cy.visit('/');

    cy.get('[data-cy=navBarLinkBoodleBilao]').should('have.attr', 'href').and('include', 'boodle-bilao');

    if (true === mobile) {
        cy.get('[data-cy=navBarToggle]').click();
    }

    cy.get('[data-cy=navBarLinkBoodleBilao]').click();
    cy.get('header');
    cy.url().should('contain', '/boodle-bilao');
    cy.get('[data-cy=navBarLinkBoodleBilao]').should('have.class', 'active');
};

const aboutLink = (mobile = false) => {
    cy.visit('/');

    cy.get('[data-cy=navBarLinkAbout]').should('have.attr', 'href').and('include', 'about');

    if (true === mobile) {
        cy.get('[data-cy=navBarToggle]').click();
    }

    cy.get('[data-cy=navBarLinkAbout]').click();
    cy.get('header');
    cy.url().should('contain', '/about');
    cy.get('[data-cy=navBarLinkAbout]').should('have.class', 'active');
};

const galleryLink = (mobile = false) => {
    cy.visit('/');

    cy.get('[data-cy=navBarLinkGallery]').should('have.attr', 'href').and('include', 'gallery');

    if (true === mobile) {
        cy.get('[data-cy=navBarToggle]').click();
    }

    cy.get('[data-cy=navBarLinkGallery]').click();
    cy.get('header');
    cy.url().should('contain', '/gallery');
    cy.get('[data-cy=navBarLinkGallery]').should('have.class', 'active');
};

const contactLink = (mobile = false) => {
    cy.visit('/');

    cy.get('[data-cy=navBarLinkContact]').should('have.attr', 'href').and('include', 'contact');

    if (true === mobile) {
        cy.get('[data-cy=navBarToggle]').click();
    }

    cy.get('[data-cy=navBarLinkContact]').click();
    cy.get('header');
    cy.url().should('contain', '/contact');
    cy.get('[data-cy=navBarLinkContact]').should('have.class', 'active');
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

        it('Menu link', () => {
            menuLink();
        });

        it('Logo link', () => {
            logoLink();
        });

        it('About link', () => {
            aboutLink();
        });

        it('Gallery link', () => {
            galleryLink();
        });

        it('Contact link', () => {
            contactLink();
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

        it('Menu link', () => {
            menuLink(true);
        });

        it('Logo link', () => {
            logoLink(true);
        });

        it('About link', () => {
            aboutLink(true);
        });

        it('Gallery link', () => {
            galleryLink(true);
        });

        it('Contact link', () => {
            contactLink(true);
        });
    });
});
