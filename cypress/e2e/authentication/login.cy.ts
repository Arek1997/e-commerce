/// <reference types="Cypress" />

describe('Testing Authentication', () => {
	it('should log in', () => {
		cy.blockRequest();
		cy.visit('/');
		cy.wait('@blockedReq');

		cy.findByTestId('profile-icon').click();
		cy.findByText(/log in/i).click();

		cy.findByTestId('email-input').type('test@test.com');
		cy.findByTestId('password-input').type('Test!2345');
		cy.findByTestId('submit-button').click();

		cy.getByTestId('profile-modal').should('have.length', 0);

		cy.findByTestId('profile-icon').click();
		cy.getByTestId('profile-option').find('li').should('have.length', 3);
	});

	it('should not log in if user does not exist', () => {
		cy.blockRequest();
		cy.visit('/');
		cy.wait('@blockedReq');

		cy.findByTestId('profile-icon').click();
		cy.findByText(/log in/i).click();

		cy.findByTestId('email-input').type('some@badEmail.com');
		cy.findByTestId('password-input').type('Test!2345');
		cy.findByTestId('submit-button').click();

		cy.getByTestId('profile-response-message').should(
			'have.text',
			'EMAIL_NOT_FOUND'
		);
	});
});
