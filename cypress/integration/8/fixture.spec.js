describe("Fixture", () => {
	before(() => {
		cy.visit("https://wcaquino.me/cypress/componentes.html");
	});

	beforeEach(() => {
		cy.window().then((win) => (win.onbeforeunload = undefined));
		cy.reload();
	});

	it("fixture", function () {
		cy.fixture("userData.json")
			.as("usuario")
			.then(() => {
				cy.get("#formNome").type(this.usuario.nome);
				cy.get("#formSobrenome").type(this.usuario.sobrenome);

				//#formSexo td:contains('Feminino') > input
				cy.xpath(
					`//table[@id="formSexo"]//label[contains(.,"${this.usuario.sexo}")]/../input`
				).click();

				cy.get(
					`#formComidaFavorita td:contains("${this.usuario.comida}") > input`
				).click();
				cy.get("#formEscolaridade").select(this.usuario.escolaridade);
				cy.get("#formEsportes").select(this.usuario.esportes);
			});
		cy.get("#formCadastrar").click();
		cy.get("#resultado").should("contain", "Cadastrado!");
	});
});
