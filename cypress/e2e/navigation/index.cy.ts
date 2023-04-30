/// <reference types="Cypress" />

describe('Testing navigation', () => {
	it('should change navigation', () => {
		cy.blockRequest();

		cy.visit('/');
		cy.wait('@blockedReq');

		cy.location('pathname').should('eq', '/');

		cy.findByRole('link', { name: /about/i }).click();
		cy.location('pathname').should('eq', '/aboutus');

		cy.findByRole('link', { name: /products/i }).click();
		cy.location('pathname').should('eq', '/products');
	});
});
