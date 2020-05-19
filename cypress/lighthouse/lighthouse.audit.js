const auditForPage = (page) => {
    cy.visit(page);
    cy.lighthouse();
};

describe('Lighthouse audits', () => {
    it('Start page', () => {
        auditForPage('/');
    });

    it('Menu page ', () => {
        auditForPage('/menu');
    });

    it('About page ', () => {
        auditForPage('/about');
    });

    it('Gallery page', () => {
        auditForPage('/gallery');
    });

    it('Contact page', () => {
        auditForPage('/contact');
    });

    it('Legal page', () => {
        auditForPage('/legal');
    });

    it('Data privacy page', () => {
        auditForPage('/data-privacy');
    });

    it('404 page', () => {
        auditForPage('/404');
    });
});
