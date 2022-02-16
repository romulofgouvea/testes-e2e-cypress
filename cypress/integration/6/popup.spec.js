describe("Popup", () => {
	beforeEach(() => {
		cy.reload();
	});

	it("Popup diretamente da pagina", () => {
		cy.visit("https://wcaquino.me/cypress/frame.html");

		cy.on("window:alert", (msg) => {
			expect(msg).to.be.equal("Click OK!");
		});

		cy.get("#tfield")
			.type("Texto do iframe")
			.should("have.value", "Texto do iframe");

		cy.get("#otherButton").click();
	});
	it("verificar se popup foi aberto", () => {
		cy.visit("https://wcaquino.me/cypress/componentes.html");

		cy.window().then((win) => {
			cy.stub(win, "open").as("winOpen");
		});

		cy.get("#buttonPopUp").click();

		cy.get("@winOpen").should("be.called");
	});

	describe.only("Com links", () => {
		beforeEach(() => {
			cy.visit("https://wcaquino.me/cypress/componentes.html");
		});

		it("Popup com link", () => {
			cy.get('[href="./frame.html"]')
				.should("have.prop", "href")
				.and("equal", "https://wcaquino.me/cypress/frame.html");
		});

		it("Acessando popup com link dinamicamente", () => {
			//usado para quando nao se sabe o link(dinamico)
			cy.contains("Popup2").then(($a) => {
				const href = $a.prop("href");

				cy.visit(href);
				cy.get("#tfield")
					.type("Texto do iframe")
					.should("have.value", "Texto do iframe");
			});
		});

		it("Forçando o link popup abrir na mesma tela", () => {
			//usado para quando nao se sabe o link(dinamico)
			cy.contains("Popup2").invoke("removeAttr", "target").click();

			cy.get("#tfield")
				.type("Texto do iframe")
				.should("have.value", "Texto do iframe");
		});
	});
});
