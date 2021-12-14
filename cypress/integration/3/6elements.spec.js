/// <reference types="cypress">

describe("Trabalhando com elementos basicos", () => {
	before(() => {
		cy.visit("https://wcaquino.me/cypress/componentes.html");
	});

	beforeEach(() => {
		cy.reload();
	});

	it("Text", () => {
		cy.get("body").should("contain", "Cuidado");
		cy.get("span").should("contain", "Cuidado");
		cy.get(".facilAchar").should("contain", "Cuidado");
		cy.get(".facilAchar").should(
			"have.text",
			"Cuidado onde clica, muitas armadilhas..."
		);
	});

	it("Links", () => {
		cy.get('[href="#"]').click();
		cy.get("#resultado").should("have.text", "Voltou!");

		cy.reload();
		cy.get("#resultado").should("have.not.text", "Voltou!");
		cy.contains("Voltar").click();
		cy.get("#resultado").should("have.text", "Voltou!");
	});

	it("Campost de texto", () => {
		cy.get("#formNome").type("Cypress");
		cy.get("#formNome").should("have.value", "Cypress");
		cy.get("#formNome").clear();
		cy.get("#formNome").should("have.value", "");

		cy.get("#elementosForm\\:sugestoes")
			.type("textarea")
			.should("have.value", "textarea");

		cy.get(
			"#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input"
		)
			.type("input1")
			.should("have.value", "input1");

		cy.get("[data-cy=dataSobrenome]")
			.type("dataSobrenome{backspace}")
			.should("have.value", "dataSobrenom");

		cy.get("#elementosForm\\:sugestoes")
			.clear()
			.type("textarea{selectall}text", { delay: 200 })
			.should("have.value", "text");
	});

	it("Radio", () => {
		cy.get("#formSexoFem").click().should("be.checked");

		cy.get("#formSexoMasc").should("not.be.checked");

		cy.get("[name='formSexo']").should("have.length", 2);
	});

	it("Checkbox", () => {
		cy.get("#formComidaPizza").click().should("be.checked");

		cy.get("[name=formComidaFavorita]").click({ multiple: true });

		cy.get("#formComidaPizza").should("not.be.checked");

		cy.get("#formComidaCarne").should("be.checked");
	});

	it("Combo", () => {
		cy.get("[data-test=dataEscolaridade]")
			.select("2o grau completo")
			.should("have.value", "2graucomp");

		cy.get("[data-test=dataEscolaridade]")
			.select("1graucomp")
			.should("have.value", "1graucomp");
	});

	it.only("Combo Multiple", () => {
		cy.get("[data-testid=dataEsportes]").select(["natacao", "Corrida"]); //sao os values do option

		//TODO: Verificar se os valores estão sendo selecionados
	});
});
