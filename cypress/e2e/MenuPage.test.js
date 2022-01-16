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

    cy.get('.fslightbox-source:visible').then(($img) => {
        // Verify light box source
        expect($img.attr('src')).to.equal(imgSource);
    });

    // Close light box again
    cy.get('.fslightbox-toolbar').find('.fslightbox-toolbar-button').last().click();

    cy.get('[data-cy=menuImage]')
        .last()
        .find('img[loading=lazy]')
        .then(($img) => {
            imgSource = $img.attr('src');
        })
        .click();

    cy.get('.fslightbox-source:visible').then(($img) => {
        // Verify light box source
        expect($img.attr('src')).to.equal(imgSource);
    });
};

const contentContainsValidPhoneNumber = () => {
    const validPhoneNumberRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;

    cy.get('[data-cy=menuContent').contains('a[href^="tel:"]', validPhoneNumberRegex);
};

describe('Menu page', () => {
    beforeEach(() => {
        cy.visit('/menu');
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
