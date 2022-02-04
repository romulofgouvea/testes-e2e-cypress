describe("Helpers", () => {
	before(() => {
		cy.visit("https://wcaquino.me/cypress/componentes.html");
	});

	beforeEach(() => {
		cy.reload();
	});

	it("Wrap", () => {
		let obj = { nome: "funciona", idade: 27 };

		expect(obj).to.have.property("nome");

		cy.wrap(obj).should("have.property", "nome");

		// cy.get("#formNome").type("funciona? ");
		// cy.get("#formNome").then(($el) => {
		// 	cy.wrap($el).type("funciona via cypress");
		// });

		const p = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(10);
			});
		});

		cy.get("#buttonSimple").then(($el) => {
			console.log("cy.get('#buttonSimple')", $el);
		});

		// Adicionando a promise dentro do fluxo do cypress
		cy.wrap(p).then((num) => {
			console.log("num", num);
		});

		cy.get("#buttonList").then(($el) => {
			console.log("cy.get('#buttonList')", $el);
		});
	});

	it("Its - trabalha com as propriedades", () => {
		let obj = { nome: "funciona", idade: 27 };
		cy.wrap(obj).should("have.property", "nome");
		cy.wrap(obj).its("nome").should("be.equal", "funciona");

		let pessoa = {
			nome: "funciona",
			idade: 27,
			endereco: { rua: "Rua 1, numero 2" },
		};
		cy.wrap(pessoa).its("endereco").should("have.property", "rua");
		cy.wrap(pessoa)
			.its("endereco")
			.its("rua")
			.should("be.equal", "Rua 1, numero 2");

		cy.wrap(pessoa)
			.its("endereco.rua")
			.should("be.equal", "Rua 1, numero 2");

		cy.title().its("length").should("be.equal", 20);
	});

	it("Invoke - Trabalha com as funções", () => {
		const getValue = () => 20;
		cy.wrap({ fn: getValue }).invoke("fn").should("be.equal", 20);

		const soma = (a, b) => a + b;
		cy.wrap({ s: soma }).invoke("s", 2, 5).should("be.equal", 7);

		cy.get("#formNome").invoke("val", "funciona via cypress com Invoke");

		cy.window().invoke("alert", "funciona via cypress com Invoke");

		cy.get("#resultado").invoke(
			"html",
			"<input type='button' value='Botão Invoke'/>"
		);
	});

	//DIVIDA 5BASIC
	it("Pergar o titulo e colocar em um campo da tela", () => {
		let syncTitle = "";

		cy.title().then(($el) => {
			cy.get("#formNome").type($el);
			syncTitle = $el;
		});

		cy.get("[data-cy=dataSobrenome]").then(($el) => {
			cy.wrap($el).type(syncTitle);
		});
	});

	//DiVIDA 6ELEMENTS
	it("Combo - Divida", () => {
		cy.get("[data-test=dataEscolaridade] option").should("have.length", 8);

		cy.get("[data-test=dataEscolaridade] option").then(($arr) => {
			let values = [];

			$arr.each(function () {
				values.push(this.innerHTML);
			});

			expect(values).to.include.members([
				"Superior",
				"Mestrado",
				"Doutorado",
			]);
		});
	});

	//DiVIDA 6ELEMENTS
	it.only("Combo Multiple - divida", () => {
		cy.get("[data-testid=dataEsportes]").select(["natacao", "Corrida"]); //sao os values do option

		// // nao funciona
		// cy.get("[data-testid=dataEsportes]").should("have.value", [
		// 	"natacao",
		// 	"Corrida",
		// ]);

		cy.get("[data-testid=dataEsportes]").then(($arr) => {
			expect($arr.val()).to.be.deep.equal(["natacao", "Corrida"]);
		});

		cy.get("[data-testid=dataEsportes]")
			.invoke("val")
			.should("be.deep.equal", ["natacao", "Corrida"]); //be.deep.equal ou eql
	});
});
