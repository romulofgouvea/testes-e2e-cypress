describe("Deve visitar uma pagina e fazer uma asertiva do titulo", () => {
	it("Deve visitar a pagina", () => {
		cy.visit("https://wcaquino.me/cypress/componentes.html");

		//assert
		cy.title().should("be.equal", "Campo de Treinamento");
		cy.title().should("contain", "Campo");

		cy.title()
			.should("be.equal", "Campo de Treinamento")
			.should("contain", "Campo");

		cy.title()
			.should("be.equal", "Campo de Treinamento")
			.and("contain", "Campo");
	});

	//Aula 8
	it.only("Encontrar e interagir com o botão", () => {
		cy.visit("https://wcaquino.me/cypress/componentes.html");

		cy.get("#buttonSimple").click().should("have.value", "Obrigado!");
	});
});
