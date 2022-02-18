describe("Comands", () => {
	before(() => {
		cy.visit("https://wcaquino.me/cypress/componentes.html");
	});

	beforeEach(() => {
		cy.window().then((win) => (win.onbeforeunload = undefined));
		cy.reload();
	});

	it("Alert", () => {
		//6 - alerts.spec.js
		cy.clickAlert("#alert", "Alert Simples");
	});
});
