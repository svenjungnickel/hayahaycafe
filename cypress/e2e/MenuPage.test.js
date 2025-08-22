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

const contentContainsValidPhoneNumber = () => {
    cy.get('[data-cy=menuContent').contains('We’re currently working on refreshing our menu!');
};

describe('Menu page', () => {
    beforeEach(() => {
        cy.visit('/menu/');
    });

    describe('Desktop', () => {
        beforeEach(() => {
            cy.useDesktop();
        });

        it('Contains content', () => {
            contentContainsValidPhoneNumber();
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
            contentContainsValidPhoneNumber();
        });

        it('Open images in light box', () => {
            openLightBoxAndVerifyImageSource();
        });
    });
});
