describe("Time Clock", () => {
	before(() => {
		cy.visit("https://wcaquino.me/cypress/componentes.html");
	});

	beforeEach(() => {
		cy.window().then((win) => (win.onbeforeunload = undefined));
		cy.reload();
	});

	it("Testando datas passadas", () => {
		const dt = new Date(2012, 11, 12, 12, 12, 12);
		cy.clock(dt);

		cy.get("#buttonNow").click();

		cy.get("#resultado > span").should("contain", "12/12/2012");
	});

	it("Testando datas futuras", () => {
		cy.get("#buttonTimePassed").click();
		cy.get("#resultado > span").should("contain", "16450");
		cy.get("#resultado > span")
			.invoke("text")
			.then((text) => +text)
			.should("gt", 1645061618833);

		cy.clock();
		cy.get("#buttonTimePassed").click();
		cy.get("#resultado > span")
			.invoke("text")
			.then((text) => +text)
			.should("lte", 0);

		cy.tick(5000);
		cy.get("#buttonTimePassed").click();
		cy.get("#resultado > span")
			.invoke("text")
			.then((text) => +text)
			.should("eq", 5000);
	});
});
