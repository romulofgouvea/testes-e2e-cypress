/// <reference types="cypress">

describe("Grupo de testes", () => {
	describe("Subgrupo de testes", () => {
		it("Subteste 1", () => {
			console.log("Subteste 1");
		});

		it("Subteste 2", () => {
			console.log("Subteste 2");
		});
	});

	//Pular o teste:  describe.skip/it.skip
	describe.skip("Subgrupo de testes 2", () => {
		it("Subteste 1", () => {
			console.log("Subteste 1");
		});

		it("Subteste 2", () => {
			console.log("Subteste 2");
		});
	});

	it("Teste 1", () => {
		console.log("Teste 1");
	});

	it("Teste 2", () => {
		console.log("Teste 2");
	});
});
