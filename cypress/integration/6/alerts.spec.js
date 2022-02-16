describe("Alerts", () => {
	before(() => {
		cy.visit("https://wcaquino.me/cypress/componentes.html");
	});

	beforeEach(() => {
		cy.window().then((win) => (win.onbeforeunload = undefined));
		cy.reload();
	});

	it("Alert", () => {
		cy.get("#alert").click();
		cy.on("window:alert", (msg) => {
			expect(msg).to.be.equal("Alert Simples");
		});
	});

	it("Alert com mock", () => {
		const stub = cy.stub().as("alerta");
		cy.on("window:alert", stub);
		cy.get("#alert")
			.click()
			.then(() => {
				expect(stub.getCall(0)).to.be.calledWith("Alert Simples");
			});
	});

	it("Alert de confirmação", () => {
		// o alert sempre da OK por padrão

		cy.on("window:confirm", (msg) => {
			expect(msg).to.be.equal("Confirm Simples");
		});

		cy.on("window:alert", (msg) => {
			expect(msg).to.be.equal("Confirmado");
		});

		cy.get("#confirm").click();
	});

	it("Alert de negação", () => {
		// o alert sempre da OK por padrão

		cy.on("window:confirm", (msg) => {
			expect(msg).to.be.equal("Confirm Simples");
			return false;
		});

		cy.on("window:alert", (msg) => {
			expect(msg).to.be.equal("Negado");
		});

		cy.get("#confirm").click();
	});

	it("Alert de prompt", () => {
		// o alert sempre da OK por padrão

		cy.window().then((win) => {
			cy.stub(win, "prompt").returns("10");
		});

		cy.on("window:confirm", (msg) => {
			expect(msg).to.be.equal("Era 10?");
		});

		cy.on("window:alert", (msg) => {
			expect(msg).to.be.equal(":D");
		});

		cy.get("#prompt").click();
	});

	it("Alert desafio", () => {
		const stubAlert = cy.stub().as("alerta");
		cy.on("window:alert", stubAlert);

		cy.get("#formCadastrar")
			.click()
			.then(() => {
				expect(stubAlert.getCall(0)).to.be.calledWith(
					"Nome eh obrigatorio"
				);
			});

		cy.get("#formNome").type("Cypress");

		cy.get("#formCadastrar")
			.click()
			.then(() => {
				expect(stubAlert.getCall(1)).to.be.calledWith(
					"Sobrenome eh obrigatorio"
				);
			});

		cy.get('[data-cy="dataSobrenome"]').type("Cypress");

		cy.get("#formCadastrar")
			.click()
			.then(() => {
				expect(stubAlert.getCall(2)).to.be.calledWith(
					"Sexo eh obrigatorio"
				);
			});

		cy.get("#formSexoFem").click().should("be.checked");

		cy.get("#formCadastrar")
			.click()
			.then(() => {
				cy.get("#resultado").should("contain", "Cadastrado!");
			});
	});
});
