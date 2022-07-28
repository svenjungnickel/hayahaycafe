const openLightBoxAndVerifyImageSource = () => {
    let imgSource;

    cy.get('[data-cy=galleryImage] img[loading=lazy]')
        .first()
        .then(($img) => {
            imgSource = $img.attr('src');
        })
        .click();

    cy.get('.fslightbox-source:visible').then(($img) => {
        // Verify light box source
        expect($img.attr('src')).to.equal(imgSource);
    });

    // Close light box again
    cy.get('.fslightbox-toolbar').find('.fslightbox-toolbar-button').last().click();

    cy.get('[data-cy=galleryImage] img[loading=lazy]')
        .last()
        .then(($img) => {
            imgSource = $img.attr('src');
        })
        .click();

    cy.get('.fslightbox-source:visible').then(($img) => {
        // Verify light box source
        expect($img.attr('src')).to.equal(imgSource);
    });
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
            openLightBoxAndVerifyImageSource();
        });
    });
});
