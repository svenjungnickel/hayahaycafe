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

const checkLinks = (mobile, visit, selector, link, selector2 = null) => {
    cy.visit(visit);

    cy.get(selector).should('have.attr', 'href').and('include', link);

    if (true === mobile) {
        cy.get('[data-cy=navBarToggle]').click();
    }

    cy.get(selector).click();
    cy.get('header');
    cy.url().should('include', '/');
    cy.get(selector2 ? selector2 : selector).should('have.class', 'active');
};

const homeLink = (mobile = false) => {
    checkLinks(mobile, '/404/', '[data-cy=navBarLinkHome]', '/');
};

const logoLink = (mobile = false) => {
    checkLinks(mobile, '/404/', '[data-cy=navBarLinkLogo]:visible', '/', '[data-cy=navBarLinkHome]');
};

const brunchLink = (mobile = false) => {
    checkLinks(mobile, '/', '[data-cy=navBarLinkBrunch]', 'menu');
};

const dinnerLink = (mobile = false) => {
    checkLinks(mobile, '/', '[data-cy=navBarLinkDinner]', 'dinner-menu');
};

const aboutLink = (mobile = false) => {
    checkLinks(mobile, '/', '[data-cy=navBarLinkAbout]', 'about');
};

const galleryLink = (mobile = false) => {
    checkLinks(mobile, '/', '[data-cy=navBarLinkGallery]', 'gallery');
};

const contactLink = (mobile = false) => {
    checkLinks(mobile, '/', '[data-cy=navBarLinkContact]', 'contact');
};

describe('Navigation bar', () => {
    describe('Desktop', () => {
        beforeEach(() => {
            cy.useDesktop();
        });

        it('Scroll down minimizes the navigation bar', () => {
            minimizeNavBar();
        });

        it('Home link', () => {
            homeLink();
        });

        it('Brunch link', () => {
            brunchLink();
        });

        it('Dinner link', () => {
            dinnerLink();
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

        it('Home link', () => {
            homeLink(true);
        });

        it('Brunch link', () => {
            brunchLink(true);
        });

        it('Dinner link', () => {
            dinnerLink(true);
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
