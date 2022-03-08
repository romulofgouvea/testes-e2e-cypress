# Teste com Cypress

## Docs

### Utilizando xpath

-   https://www.red-gate.com/simple-talk/development/dotnet-development/xpath-css-dom-and-selenium-the-rosetta-stone/

# Executando os testes

```
npx cypress run --browser chrome
```

executando um spec especifico

```
npx cypress run --spec <nome_do_spec>
```

Visualizando execução e evitando o fechamento da tela
```
npx cypress run --spec <nome_do_spec> --headed --no-exit
```