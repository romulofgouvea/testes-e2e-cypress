describe('Grupo de testes', () => {

    //Pular o teste:  describe.skip/it.skip
    describe.skip('Subgrupo de testes', () => {
        it("Subteste 1", () => {
            console.log("Subteste 1");
        });
    
        it("Subteste 2", () => {
            console.log("Subteste 2");
        })
    });

    //Executar apenas esse teste: it.only
    //se tiver 2 onlys no mesmo arquivo ele pegara apenas o ultimo
    it("Teste 1", () => {
        console.log("Teste 1");
    });

    it("Teste 2", () => {
        console.log("Teste 2");
    })
});