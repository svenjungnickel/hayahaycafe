const getVisibleLightboxImage = () =>
    cy.get('.fslightbox-container').should('be.visible').find('.fslightbox-source').filter(':visible');

const openLightBoxAndVerifyImageSource = () => {
    let imgSource;

    cy.get('[data-cy=galleryImage]')
        .first()
        .scrollIntoView()
        .find('img[loading=lazy]')
        .then(($img) => {
            imgSource = $img.attr('src');
        })
        .click();

    getVisibleLightboxImage().should(($img) => {
        expect($img.attr('src')).to.equal(imgSource);
    });

    // Close light box again
    cy.get('.fslightbox-toolbar').find('.fslightbox-toolbar-button').last().click();

    cy.get('[data-cy=galleryImage]')
        .last()
        .scrollIntoView()
        .find('img[loading=lazy]')
        .then(($img) => {
            imgSource = $img.attr('src');
        })
        .click();

    getVisibleLightboxImage().should(($img) => {
        expect($img.attr('src')).to.equal(imgSource);
    });
};

const verifyLightBoxNotOpening = () => {
    let imgSource;

    cy.get('[data-cy=galleryImage]')
        .first()
        .scrollIntoView()
        .find('img[loading=lazy]')
        .then(($img) => {
            imgSource = $img.attr('src');
        })
        .click();

    cy.get('body').find('.fslightbox-container .fslightbox-source:visible').should('have.length', 0);
};

describe('Gallery page', () => {
    beforeEach(() => {
        cy.visit('/gallery/');
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

        it('Open images in light box and verify sources', () => {
            verifyLightBoxNotOpening();
        });
    });
});
