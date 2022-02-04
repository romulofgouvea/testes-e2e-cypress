/// <reference types="cypress">

describe("Trabalhando com elementos basicos", () => {
	before(() => {
		cy.visit("https://wcaquino.me/cypress/componentes.html");
	});

	beforeEach(() => {
		cy.reload();
	});

	it("Deve aguardar elemento estar disponível", () => {
		cy.get("#novoCampo").should("not.exist");
		cy.get("#buttonDelay").click();
		cy.get("#novoCampo").should("not.exist");
		cy.get("#novoCampo").should("exist");
		cy.get("#novoCampo").type("Cypress");
	});

	it("Deve fazer retentativas", () => {
		cy.get("#buttonDelay").click();

		//o get inteiro irá falhar pois ele baseia na mesma assertiva
		// cy.get("#novoCampo").should("exist").should("not.exist");

		// //nao pode juntar as assertivas que seja oposta, mais pode dividir em mais linhas com a acertivas isoladas
		// cy.get("#novoCampo").should("not.exist").should("exist");
	});

	it("Uso do find", () => {
		cy.get("#buttonList").click();

		//nao vai da certo pis o find esta depois de um comando e os comandos nao sao aninhados, entao ele pegaria apenas o item 1
		cy.get("#lista li").find("span").should("contain", "Item 1");

		//solução e fazer o comando completo
		cy.get("#lista li span").should("contain", "Item 2");
	});

	it("Uso do find DOM", () => {
		cy.get("#buttonListDOM").click();

		//nao vai da certo pis o find esta depois de um comando e os comandos nao sao aninhados, entao ele pegaria apenas o item 1
		cy.get("#lista li").find("span").should("contain", "Item 1");

		//Irá falhar porque o elemento ja foi removido do DOM
		cy.get("#lista li").find("span").should("contain", "Item 2");
	});

	it("Uso do Timeout", () => {
		// cy.get("#buttonDelay").click();

		// //colocando manualmente o timeout
		// cy.get("#novoCampo", { timeout: 1000 }).should("exist");

		//colocando o timeout no cypress pelo cypress.json

		// cy.get("#buttonListDOM").click();
		// cy.wait(5000); // esta espera é fixa sempre sera 5 seg, ja no get se o assert terminar antes ele libera o fluxo
		// cy.get("#lista li span").should("contain", "Item 2");

		cy.get("#buttonListDOM").click();
		cy.get("#lista li span", { timeout: 30000 }).should("have.length", 2);
	});

	it("Click sem retry", () => {
		cy.get("#buttonCount").click().should("have.value", "1");

		cy.get("#buttonCount").click().click().should("have.value", "111");
	});

	it("Deve imprimir o titulo da pagina", () => {
		//aula 5basic.spec.js
		//imprime o titulo da pagina no log
		cy.title().then((title) => {
			console.log("Titulo da pagina: " + title);
		});

		cy.title().should((title) => {
			console.log("Titulo da pagina: " + title);
		});
	});

	it.only("Shoud vs Then", () => {
		cy.get("#buttonListDOM").click();

		// //Aguarda ate que o cy.get("#lista li span") seja finalizado
		// cy.get("#lista li span").then(($e) => {
		// 	//$e é um elemento jquery
		// 	console.log("Elemento: ", $e);
		// 	expect($e).to.have.length(1);
		// });

		// //nao espera o cy.get("#lista li span") e ja vai buscando o resultado
		// cy.get("#lista li span").should(($e) => {
		// 	//$e é um elemento jquery
		// 	console.log("Elemento: ", $e);
		// 	expect($e).to.have.length(1);
		// });

		// cy.get("#buttonListDOM")
		// 	.then(($e) => {
		// 		expect($e).to.have.length(1);
		// 		return 2; // o retorno passa para a proxima assertiva
		// 	})
		// 	.and("have.id", "buttonListDOM");

		// cy.get("#buttonListDOM")
		// 	.should(($e) => {
		// 		expect($e).to.have.length(1);
		// 		return 2; // o retorno NAO passa para a proxima assertiva
		// 	})
		// 	.and("have.id", "buttonListDOM");

		// // Loop infinito quando busca um elemento dentro do SHOULD
		// cy.get("#buttonListDOM").should(($e) => {
		// 	expect($e).to.have.length(1);
		// 	cy.get("#buttonList");
		// });
	});
});
