const openLightBoxAndVerifyImageSource = () => {
    let imgSource;

    cy.get('[data-cy=menuImage]')
        .first()
        .scrollIntoView()
        .find('img[loading=lazy]')
        .then(($img) => {
            imgSource = $img.attr('src');
        })
        .click();

    cy.get('.fslightboxs:visible').then(($img) => {
        // Verify light box source
        expect($img.attr('src')).to.equal(imgSource);
    });

    // Close light box again
    cy.get('.fslightbox-toolbar').find('.fslightbox-toolbar-button').last().click();

    cy.get('[data-cy=menuImage]')
        .last()
        .scrollIntoView()
        .find('img[loading=lazy]')
        .then(($img) => {
            imgSource = $img.attr('src');
        })
        .click();

    cy.get('.fslightboxs:visible').then(($img) => {
        // Verify light box source
        expect($img.attr('src')).to.equal(imgSource);
    });
};

const verifyLightBoxNotOpening = () => {
    let imgSource;

    cy.get('[data-cy=menuImage]')
        .first()
        .scrollIntoView()
        .find('img[loading=lazy]')
        .then(($img) => {
            imgSource = $img.attr('src');
        })
        .click();

    cy.get('.fslightboxs').should('not.exist');
};

const contentContainsText = () => {
    cy.get('[data-cy=menuContent]').contains('Our menu is not your classic spread');
};

const contentContainsImagesWithLinks = () => {
    cy.get('[data-cy=menuLinkImage]').first().scrollIntoView();
    cy.get('[data-cy=menuLinkImage]').first().click();
    cy.url().should('include', '/brunch-menu/');
};

describe('Menu page', () => {
    describe('Overview', () => {
        beforeEach(() => {
            cy.visit('/menu/');
        });

        describe('Desktop', () => {
            beforeEach(() => {
                cy.useDesktop();
            });

            it('Open image link and verify url', () => {
                contentContainsImagesWithLinks();
            });
        });

        describe('Mobile', () => {
            beforeEach(() => {
                cy.useMobile();
            });

            it('Open image link and verify url', () => {
                contentContainsImagesWithLinks();
            });
        });
    });

    describe('Brunch', () => {
        beforeEach(() => {
            cy.visit('/brunch-menu/');
        });

        describe('Desktop', () => {
            beforeEach(() => {
                cy.useDesktop();
            });

            it('Open images in light box and verify sources', () => {
                openLightBoxAndVerifyImageSource();
            });
        });

        describe('Mobile', () => {
            beforeEach(() => {
                cy.useMobile();
            });

            it('Open images in light box', () => {
                verifyLightBoxNotOpening();
            });
        });
    });

    describe('Dinner', () => {
        beforeEach(() => {
            cy.visit('/dinner-menu/');
        });

        describe('Desktop', () => {
            beforeEach(() => {
                cy.useDesktop();
            });

            it('Contains content', () => {
                contentContainsText();
            });

            it('Open images in light box and verify sources', () => {
                openLightBoxAndVerifyImageSource();
            });
        });

        describe('Mobile', () => {
            beforeEach(() => {
                cy.useMobile();
            });

            it('Contains content', () => {
                contentContainsText();
            });

            it('Open images in light box', () => {
                verifyLightBoxNotOpening();
            });
        });
    });
});
