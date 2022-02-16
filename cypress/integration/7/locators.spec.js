describe("Locators", () => {
	before(() => {
		cy.visit("https://wcaquino.me/cypress/componentes.html");
	});

	beforeEach(() => {
		cy.window().then((win) => (win.onbeforeunload = undefined));
		cy.reload();
	});

	it("usando Jquery", () => {
		cy.get(':nth-child(1) > :nth-child(3) > [type="button"]');
		cy.get(
			"table#tabelaUsuarios > tbody > tr:eq(0) > td:nth-child(3) > input"
		);
		cy.get("[onclick*='Francisco']");
		cy.get(
			"#tabelaUsuarios td:contains('Doutorado'):eq(0) ~ td:eq(3) > input"
		);
		cy.get(
			"#tabelaUsuarios tr:contains('Doutorado'):eq(0) td:eq(6) > input"
		);
	});

	it("usando Xpath", () => {
		cy.xpath("//input[contains(@onclick, 'Francisco')]");

		cy.xpath(
			"//table[@id='tabelaUsuarios']//td[contains(., 'Francisco')]/..//input[@type='text']"
		);

		cy.xpath(
			"(//table[@id='tabelaUsuarios']//td[contains(., 'Doutorado')])[2]/..//input[@type='text']"
		);

		cy.xpath(
			"//td[contains(., 'Usuario A')]/following-sibling::td[contains(.,'Mestrado')]/..//input[@type='text']"
		).type("xpath");

		// comando: (//input[@type='button'][@value='Clique aqui'])[1]
		// comando: //table[@id='tabelaUsuarios']//td[contains(., 'Francisco')]/following-sibling::td/input
		// comando: //*[@data-test='data2']
		// comando:
	});
});
