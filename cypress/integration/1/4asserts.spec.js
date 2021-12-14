/// <reference types="cypress">

it("Igualdade", () => {
	const a = 1;

	// //#normal
	expect(a).equal(1);
	// //#com mensagem
	// expect(a, "O 'a' deveria ser 1").equal(2);
	// //#com mensagem e notação
	// expect(a, "O 'a' nao é igual a 2").not.equal(2);
});

it("Booleanos", () => {
	const a = true;

	expect(a).true;
	// expect(a).to.be.true;
	// expect(a).not.to.be.true;
	// expect(a).to.be.null;
	// expect(a).to.be.undefined;
});

it("Objetos", () => {
	const obj1 = {
		a: 1,
		b: 2,
	};

	// expect(obj1).equal(obj1);
	// expect(obj1).equals(obj1);
	// expect(obj1).eq(obj1);
	// expect(obj1).to.be.equal(obj1);

	// //##apesar de iguais vai falhar porque possui referencias diferente
	// expect(obj1).to.be.equal({ a:1, b:2 });

	//##compara as chaves e valores
	// expect(obj1).to.be.deep.equal({ a:1, b:2 });
	// expect(obj1).eql({ a:1, b:2 });
	// expect(obj1).include({ a:1 });
	// expect(obj1).to.have.property('b');
	// //## verifica se tem a propriedade e o valor dela
	// expect(obj1).to.have.property('b', 2);
	expect(obj1).to.not.be.empty;
});

it("Arrays", () => {
	const arr1 = [1, 2, 3];

	expect(arr1).to.have.members([1, 2, 3]);
	expect(arr1).to.include.members([1, 3]);
	expect(arr1).to.not.be.empty;
	expect([]).to.be.empty;
});

it("Types", () => {
	const a = 1;
	const b = "1";
	const c = true;
	const d = {};
	const e = [];

	expect(a).to.be.a("number");
	expect(b).to.be.a("string");
	expect(c).to.be.a("boolean");
	expect(d).to.be.a("object");
	expect(e).to.be.a("array");
});

it("String", () => {
	const a = "1";
	const b = "1";

	expect(a).to.contains("1");
	expect(b).to.be.a("string");
	// expect(a).to.be.a('string');
	// expect(a).to.equal(b);
	// expect(a).to.equal('1');
	// expect(a).to.have.lengthOf(1);
	// expect(a).to.have.length(1);
	// expect(a).to.match(/1/);
	// expect(a).to.match(/1/g);
	// expect(a).to.match(/1/i);
	// expect(a).to.match(/1/y);
	// expect(a).to.match(/1/gm);
	// expect(a).to.match(/1/ig);
	// expect(a).to.match(/1/iy);
	// expect(a).to.match(/1/gim);
	// expect(a).to.match(/1/gi);
});

it("Numbers", () => {
	const number = 4;

	expect(number).to.be.a("number");
	// expect(number).to.be.equal(4);
	// expect(number).to.be.above(3);
	// expect(number).to.be.below(5);
	// expect(number).to.be.within(3, 5);
	// expect(number).to.be.within(3, 5, 'O numero nao esta dentro do range');
	// //## verificando o numero sem a precisao
	// expect(number).to.be.closeTo(4, 0.1);
	// expect(number).to.be.closeTo(4, 0.1, 'O numero nao e fechado para 4.1 +/- 0.1');
});
