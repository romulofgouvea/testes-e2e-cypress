describe("Testes Dinâmicos", () => {
	before(() => {
		cy.visit("https://wcaquino.me/cypress/componentes.html");
	});

	beforeEach(() => {
		cy.window().then((win) => (win.onbeforeunload = undefined));
		cy.reload();
	});

	const foods = ["Carne", "Frango", "Pizza", "Vegetariano"];

	foods.forEach((food) => {
		it(`Testando comida: ${food}`, () => {
			cy.get("#formNome").type("Nome");
			cy.get("#formSobrenome").type("Sobrenome");
			cy.get("#formSexoMasc").click();

			cy.xpath(
				`//label[contains(.,'${food}')]/preceding-sibling::input`
			).click();

			cy.get("#formEscolaridade").select("Mestrado");
			cy.get("#formEsportes").select("Corrida");

			cy.get("#formCadastrar").click();
			cy.get("#resultado").should("contain", "Cadastrado!");
		});
	});

	it.only(`Testando Each`, () => {
		cy.get("#formNome").type("Nome");
		cy.get("#formSobrenome").type("Sobrenome");
		cy.get("#formSexoMasc").click();

		cy.get("[name=formComidaFavorita]").each(($el) => {
			if ($el.val() !== "vegetariano") {
				cy.wrap($el).click();
			}
		});

		cy.get("#formEscolaridade").select("Mestrado");
		cy.get("#formEsportes").select("Corrida");

		cy.get("#formCadastrar").click();
		cy.get("#resultado").should("contain", "Cadastrado!");
	});
});
