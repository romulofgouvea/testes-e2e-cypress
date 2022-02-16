describe("Iframe", () => {
	beforeEach(() => {
		cy.reload();
	});

	it("Iframe", () => {
		cy.visit("https://wcaquino.me/cypress/componentes.html");

		cy.get("#frame1").then((iframe) => {
			const body = iframe.contents().find("body");
			cy.wrap(body)
				.find("#tfield")
				.type("Texto do iframe")
				.should("have.value", "Texto do iframe");

			//TODO: Limitações do Cypress
			//O alert nao é pego fora do escopo, o iframe é fora do escopo do cypress
		});
	});

	it("Iframe diretamente da pagina", () => {
		cy.visit("https://wcaquino.me/cypress/frame.html");

		cy.on("window:alert", (msg) => {
			expect(msg).to.be.equal("Click OK!");
		});

		cy.get("#tfield")
			.type("Texto do iframe")
			.should("have.value", "Texto do iframe");

		cy.get("#otherButton").click();
	});
});
