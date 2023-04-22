/// <reference types="Cypress" />

describe('Testing navigation', () => {
	it('should change navigation', () => {
		cy.visit('/');
		cy.contains(/products/i).click();
		cy.location('hash').should('include', 'products');
		cy.contains(/about/i).click();
		cy.location('hash').should('include', 'about');
		cy.contains(/home/i).click();
		cy.location('hash').should('include', 'home');
	});
});
