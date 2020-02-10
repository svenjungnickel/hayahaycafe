const storyButton = () => {
    cy.get('[data-cy=startPageStoryButton]')
        .should('have.class', 'btn btn-primary')
        .and('have.attr', 'href')
        .and('include', 'story');

    cy.get('[data-cy=startPageStoryButton]').click();
    cy.get('header');
    cy.url().should('contain', '/story');
};

const location = () => {
    cy.get('[data-cy=startPageLocation]')
        .should('contain', 'Location')
        .should('contain', 'Hayahay Cafe')
        .should('contain', 'Camiguin')
        .should('contain', 'Philippines');
};

const what3Words = () => {
    const full3WordAddressRegex = /^\/{0,}[^0-9`~!@#$%^&*()+\-_=[{\]}\\|'<,.>?/";:£§º©®\s]{1,}[・.。][^0-9`~!@#$%^&*()+\-_=[{\]}\\|'<,.>?/";:£§º©®\s]{1,}[・.。][^0-9`~!@#$%^&*()+\-_=[{\]}\\|'<,.>?/";:£§º©®\s]{1,}$/i;

    cy.get('[data-cy=startPageWhat3Words]')
        .should('contain', 'Map')
        .contains('p', full3WordAddressRegex);

    cy.get('[data-cy=startPageWhat3Words]').find('img');
};

const openingHours = () => {
    cy.get('[data-cy=startPageOpeningHours]').should('contain', 'Opening Hours');
};

describe('Start page', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    describe('Desktop', () => {
        beforeEach(() => {
            cy.useDesktop();
        });

        it('Story button', () => {
            storyButton();
        });

        it('Location', () => {
            location();
        });

        it('What3Words', () => {
            what3Words();
        });

        it('Opening hours', () => {
            openingHours();
        });
    });

    describe('Mobile', () => {
        beforeEach(() => {
            cy.useMobile();
        });

        it('Story button', () => {
            storyButton();
        });

        it('Location', () => {
            location();
        });

        it('What3Words', () => {
            what3Words();
        });

        it('Opening hours', () => {
            openingHours();
        });
    });
});
