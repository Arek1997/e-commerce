/// <reference types="Cypress" />

describe('Testing About Page', () => {
	it('should change navigation', () => {
		cy.visit('/aboutus');

		cy.findByRole('heading', { level: 2, name: /aboutus/i }).should(
			'be.visible'
		);
		cy.findByRole('heading', { level: 3, name: /our history/i }).should(
			'be.visible'
		);
	});
});
