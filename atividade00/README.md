**Atividade 00**

Desenvolvimento de Software para WEB Projeto de Interface Web

Conteúdo: Criação de Componentes React, Funções Internas a um Component e, Props.

Obs.: Faça os exercícios abaixo usando o CodeSandBox ou o ambiente de trabalho instalado em sua máquina (VSCode + Node, por exemplo).

Sugestão: Os nomes dos componentes podem ser os mesmos dos nomes dos arquivos, retirando apenas o número da frente.

**01 - Siga as instruções:**

- Crie um arquivo dentro da pasta src/components/atividade00 chamado 01MeusDados.jsx
- Implemente um componente que mostre na tela seu nome completo, curso e universidade. Separe essas informações usando a tag <h1>.
- Implemente, ainda no mesmo arquivo, quatro versões do mesmo componente: usando function, arrow function com return, arrow function sem return e classes.
- Tente usar algum estilo.

**02 - Siga as instruções:**

- Crie um arquivo dentro da pasta src/components/atividade00 chamado 02MeusDados.jsx.
- Implemente a mesma ideia do exercício anterior (01) só que agora você deverá passar os dados (nome, curso e universidade) via props, a partir do componente pai (App.js).
- Use desconstrução para conseguir os dados de props, por exemplo:
- const obj = { a: 1, b: 2 };
- const { a, b } = obj;
- // is equivalent to:
- // const a = obj.a;
- // const b = obj.b;

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment>

- Implemente apenas a versão com função seta com return para esse exercício.

**03 - Siga as instruções:**

- Crie um arquivo dentro da pasta src/components/atividade00 chamado 03Temperatura.jsx.
- Usando apenas arrow function, o seu componente deverá:
- implementar uma função interna que receba como parâmetro uma temperatura em Celsius e converta para Fahrenheit. Chame a função de “celsiusParaFahrenheit(c)”;
- implementar uma função interna que receba como parâmetro uma temperatura em Fahrenheit e converta para Celsius. Chame a função de “fahrenheitParaCelsius(f)”;
- implementar uma função que receba em Kelvin e retorne um objeto Json com as temperaturas Celsius e Fahrenheit. Chame a função de “kelvin(k)”;
- Chame as três funções no JSX do componente Temperatura com argumentos que você desejar converter.

![](Aspose.Words.dfa3f4ef-5533-4083-942a-69f61ddd8692.001.png)

Submete seu código no GITHUB caso não esteja usando o CodeSandox (neste caso, salve o projeto em sua conta).

A atividade deverá ser entregue durante a aula. O aluno deve ao menos “tentar” implementar algo.
