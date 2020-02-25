const auditForPage = page => {
    cy.visit(page);
    cy.audit();
};

describe('Lighthouse audits', () => {
    it('Start page', () => {
        auditForPage('/');
    });

    it('About page ', () => {
        auditForPage('/about');
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
