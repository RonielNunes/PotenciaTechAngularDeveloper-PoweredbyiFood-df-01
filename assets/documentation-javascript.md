# **Linguagem de Programação JavaScript**

### **Sumário**

### **O que é o JavaScript?**

O JavaScript é uma linguagem de programação que é interpretada pelos navegadores da web e pelo ambiente de tempo de execução Node.js.


### **Como executar o JavaScript com Node.js**

Se você deseja executar JavaScript no servidor, você precisará instalar o ambiente de tempo de execução do Node.js em seu computador. O Node.js é compatível com Windows, macOS e Linux e pode ser baixado gratuitamente do site oficial do Node.js.

Para instalar o Node.js, basta seguir estes passos:

**1.** Acesse o site oficial do Node.js: https://nodejs.org/

**2.** Clique no botão "Download" para baixar o instalador do Node.js para o seu sistema operacional.

**3.** Abra o arquivo de instalação e siga as instruções na tela para concluir a instalação.

**4.** Abra um terminal ou prompt de comando e execute o comando "node" para verificar se o Node.js foi instalado corretamente. Isso deve abrir um prompt interativo do Node.js, onde você pode começar a digitar código JavaScript.

### **Rodar/executar os arquivos.js**

```JavaScript
node <namefile>.js
```
> No terminal

### **Sintaxe da Linguagem**
A sintaxe de uma linguagem de programação é um conjunto de regras que define como as instruções devem ser escritas para que possam ser compreendidas pelo computador. A sintaxe da linguagem JavaScript é baseada em uma série de regras gramaticais que definem como as instruções devem ser escritas para criar um programa funcional. Algumas das principais características da sintaxe da linguagem JavaScript incluem:

#### **Case sensitivity**
O JavaScript é uma linguagem case sensitive, o que significa que diferencia letras maiúsculas de minúsculas. Por exemplo, "`nome`" e "`Nome`" são considerados duas `variáveis` **diferentes**.

#### **Comentários**
O JavaScript permite que os programadores incluam comentários no código, para explicar o que cada seção faz. Os comentários começam com `//` para comentários de uma linha ou `/*` e terminam com `*/` para comentários em várias linhas.


#### **Comando de exibição**

```JavaScript
console.log(<obj>)
```
####  **Variáveis**
As variáveis em JavaScript são definidas usando as palavras-chave:

```JavaScript
var <namevar> = <value>;
let <namevar> = <value>;
const <namevar> = <value>;
```


O nome da variável segue a palavra-chave e é seguido por um sinal de igual e o valor atribuído à variável. Por exemplo: 

```JavaScript
var nome = "João";
```


#### **Operadores** 

O JavaScript possui uma variedade de operadores aritméticos como `(+, -, *, /, %) `, operadores de comparação como `(==,===, !=,!==, >,>=, <,<=)` e operadores lógicos como `(&&, ||, !)` que permitem que você execute operações matemáticas e comparar valores.

> Aritméticos
```JavaScript
// adição
let x = 5;
let y = 3;
let z = x + y; // z vai ser 8

// subtração
let a = 10;
let b = 5;
let c = a - b; // c vai ser 5

// multiplicação
let p = 4;
let q = 6;
let r = p * q; // r vai ser 24

// divisão
let m = 20;
let n = 5;
let o = m / n; // o vai ser 4

// módulo (resto da divisão)
let j = 13;
let k = 5;
let l = j % k; // l vai ser 3
```
> Comparação
```JavaScript
// operador igual (==)
let x = 5;
let y = "5";
if (x == y) {
  console.log("x é igual a y");
}

// operador estritamente igual (===)
let a = 5;
let b = "5";
if (a === b) {
  console.log("a é estritamente igual a b");
} else {
  console.log("a não é estritamente igual a b");
}

// operador diferente (!=)
let p = 10;
let q = 5;
if (p != q) {
  console.log("p é diferente de q");
}

// operador estritamente diferente (!==)
let r = 10;
let s = "10";
if (r !== s) {
  console.log("r é estritamente diferente de s");
}

// operador maior que (>)
let m = 10;
let n = 5;
if (m > n) {
  console.log("m é maior do que n");
}

// operador menor que (<)
let x = 3;
let y = 5;
if (x < y) {
  console.log("x é menor do que y");
}

// operador maior ou igual (>=)
let a = 10;
let b = 10;
if (a >= b) {
  console.log("a é maior ou igual a b");
}

// operador menor ou igual (<=)
let p = 5;
let q = 7;
if (p <= q) {
  console.log("p é menor ou igual a q");
}

```
> Lógico
```JavaScript
// operador AND (&&)
let x = 5;
let y = 3;
if (x > 0 && y > 0) {
  console.log("x e y são positivos");
}

// operador OR (||)
let a = "hello";
let b = "";
if (a.length > 0 || b.length > 0) {
  console.log("pelo menos uma das strings não é vazia");
}

// operador NOT (!)
let p = true;
let q = !p; // q vai ser false

// combinação de operadores lógicos
let r = 10;
let s = 5;
let t = 20;
if ((r > s && r < t) || (r < s && r > t)) {
  console.log("r está entre s e t");
}

```
#### **Estruturas de controle de fluxo(Estruturas Condicionais)**

O JavaScript possui estruturas de controle de fluxo como `if/else`, `while`, `do/while` e `for`, que permitem que você controle o fluxo de execução do seu código.


```JavaScript
// if/else
let x = 5;
if (x > 10) {
  console.log("x é maior que 10");
}else if(x < 0){
    console.log("x é menor que 0")
} else {
  console.log("x é menor ou igual a 10");
}

// while
let i = 0;
while (i < 10) {
  console.log("i é igual a " + i);
  i++;
}

// do/while
let j = 0;
do {
  console.log("j é igual a " + j);
  j++;
} while (j < 10);

// for
for (let k = 0; k < 10; k++) {
  console.log("k é igual a " + k);
}
```
Nesses exemplos, usamos o if/else para testar uma condição e executar diferentes blocos de código com base no resultado. Usamos o while para criar um loop que é executado enquanto uma condição é verdadeira. Usamos o do/while para criar um loop que é executado pelo menos uma vez, mesmo que a condição inicial seja falsa. E usamos o for para criar um loop que é executado um número específico de vezes, com base em um contador que é incrementado em cada iteração.

#### **Funções**

As funções em JavaScript são definidas usando a palavra-chave `function` seguida pelo nome da função, parênteses e chaves que contêm o código da função.


```JavaScript
// função simples
function sayHello() {
  console.log("Olá, mundo!");
}
sayHello(); // chama a função

// função com parâmetros
function greet(name) {
  console.log("Olá, " + name + "!");
}
greet("João"); // chama a função com o argumento "João"

// função com retorno
function sum(a, b) {
  return a + b;
}
let result = sum(5, 7); // chama a função e atribui o resultado à variável "result"
console.log(result); // imprime o resultado (12)

// função anônima
let greeting = function(name) {
  console.log("Olá, " + name + "!");
}
greeting("Maria"); // chama a função

// função de seta (arrow function)
let multiply = (x, y) => {
  return x * y;
}
let product = multiply(3, 4); // chama a função e atribui o resultado à variável "product"
console.log(product); // imprime o resultado (12)

// função anônima e autoexecutável
(function() {
  let message = "Olá, mundo!";
  console.log(message);
})();

```

Nesses exemplos, usamos a palavra-chave function para definir uma função e, em seguida, chamamos essa função com diferentes argumentos. Também mostramos como uma função pode retornar um valor usando a palavra-chave return. Além disso, mostramos como definir funções anônimas e funções de seta usando a sintaxe mais recente do JavaScript. As funções são muito versáteis e podem ser usadas em várias situações diferentes para tornar seu código mais modular e reutilizável. 

Usamos também a sintaxe (function() {...})() para definir uma função anônima autoexecutável que define uma variável message com o valor "Olá, mundo!" e a imprime no console. Observe que envolvemos a função inteira em parênteses para indicar que é uma expressão de função e, em seguida, usamos () no final para executá-la imediatamente. Quando o código é carregado, a função é executada e a mensagem "Olá, mundo!" é impressa no console.

Observe que, ao usar essa técnica, você pode evitar que variáveis ​​locais definidas dentro da função colidam com outras variáveis ​​no escopo global do seu código. Também pode ser usado para garantir que determinadas ações sejam executadas automaticamente assim que a página é carregada ou quando um arquivo JavaScript é importado em outro arquivo.

#### **Objetos**

Em JavaScript, objetos são uma estrutura de dados que permitem armazenar um conjunto de valores e funções relacionados a uma única entidade. Eles são usados ​​para representar coisas do mundo real ou conceitual em seu código, como pessoas, carros, animais, produtos e assim por diante. Aqui está um exemplo de como criar e usar um objeto em JavaScript:

```Javascript
// cria um objeto "pessoa" com propriedades e métodos
let pessoa = {
  nome: "João",
  idade: 30,
  profissao: "desenvolvedor",
  saudacao: function() {
    console.log(`Olá, meu ${nome} é ${this.nome} e eu sou um  ${this.profissao}  de ${this.idade} anos.`);
  }
};

// acessa as propriedades do objeto
console.log(pessoa.nome); // imprime "João"
console.log(pessoa.idade); // imprime 30
//ou acesso indexação por coleção
console.log(pessoa[nome]); // imprime "João"
console.log(pessoa[idade]); // imprime 30

// chama o método do objeto
pessoa.saudacao(); // imprime "Olá, meu nome é João e eu sou um desenvolvedor de 30 anos."


```

Nesse exemplo, criamos um objeto chamado pessoa com várias propriedades, como nome, idade e profissao. Também definimos um método chamado saudacao que usa as propriedades do objeto para imprimir uma mensagem de saudação personalizada. Em seguida, acessamos as propriedades do objeto usando a sintaxe objeto.propriedade e chamamos o método do objeto usando a sintaxe objeto.metodo(). Observe que dentro do método, usamos a palavra-chave this para se referir ao objeto em si, permitindo que a mensagem de saudação seja personalizada com as propriedades específicas do objeto.

Além disso, também é possível criar objetos usando a função construtora Object() ou usando classes (introduzidas em ECMAScript 2015). Mas a sintaxe do objeto literal é a mais comum e geralmente mais fácil de entender e usar.

#### **Classes**

```JavaScript
Classes em JavaScript são uma forma de criar objetos com propriedades e métodos relacionados. Eles foram introduzidos no ECMAScript 2015 (também conhecido como ES6) e são uma abstração da herança baseada em protótipos em JavaScript. Aqui está um exemplo de como criar uma classe em JavaScript:

class Pessoa {
  constructor(nome, idade, profissao) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
  }

  saudacao() {
    console.log("Olá, meu nome é " + this.nome + " e eu sou um " + this.profissao + " de " + this.idade + " anos.");
  }
}

let pessoa1 = new Pessoa("João", 30, "desenvolvedor");
let pessoa2 = new Pessoa("Maria", 25, "professora");

pessoa1.saudacao(); // imprime "Olá, meu nome é João e eu sou um desenvolvedor de 30 anos."
pessoa2.saudacao(); // imprime "Olá, meu nome é Maria e eu sou uma professora de 25 anos."
```
esse exemplo, criamos uma classe Pessoa que tem três propriedades (nome, idade e profissao) e um método saudacao. O método constructor é usado para inicializar as propriedades da classe quando um novo objeto é criado com a sintaxe new Classe(...). Em seguida, definimos o método saudacao para imprimir uma mensagem personalizada com as propriedades do objeto. Finalmente, criamos dois objetos pessoa1 e pessoa2 a partir da classe Pessoa e chamamos o método saudacao de cada objeto.

Observe que, embora a sintaxe da classe seja semelhante a outras linguagens orientadas a objetos, como Java e C++, as classes em JavaScript são baseadas em protótipos, em vez de herança de classes. Isso significa que as classes são apenas açúcar sintático em cima da abordagem do protótipo subjacente do JavaScript, o que permite uma sintaxe mais limpa e fácil de entender para a criação de objetos com comportamentos comuns.


#### **Arrays**

Em JavaScript, um array é uma estrutura de dados que pode armazenar vários valores em uma única variável. Cada valor no array é identificado por um índice, que começa em 0 para o primeiro elemento do array. Aqui estão alguns exemplos de como usar arrays em JavaScript:

```JavaScript
//criando um array
let frutas = ["maçã", "banana", "laranja", "uva"];

// Acessando elementos de um array:
console.log(frutas[0]); // imprime "maçã"
console.log(frutas[2]); // imprime "laranja"

// Alterando elementos de um array:
frutas[1] = "abacaxi";
console.log(frutas); // imprime ["maçã", "abacaxi", "laranja", "uva"]

// Adicionando elementos em um array:
frutas.push("morango");
console.log(frutas); // imprime ["maçã", "abacaxi", "laranja", "uva", "morango"]

// Removendo elementos de um array:
frutas.pop();
console.log(frutas); // imprime ["maçã", "abacaxi", "laranja", "uva"]

// shift: Remove o primeiro elemento do array
let frutas = ["maçã", "banana", "laranja"];
frutas.shift();
console.log(frutas); // ["banana", "laranja"]

// unshift: Adiciona um elemento no início do array
let frutas = ["maçã", "banana", "laranja"];
frutas.unshift("morango");
console.log(frutas); // ["morango", "maçã", "banana", "laranja"]

// splice: Adiciona ou remove elementos do array em uma posição específica
let frutas = ["maçã", "banana", "laranja"];
frutas.splice(1, 1); // remove o elemento "banana" na posição 1
console.log(frutas); // ["maçã", "laranja"]

frutas.splice(1, 0, "abacaxi", "uva"); // adiciona os elementos "abacaxi" e "uva" na posição 1
console.log(frutas); // ["maçã", "abacaxi", "uva", "laranja"]

// Iterando sobre um array:
for(let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
// imprime "maçã", "abacaxi", "laranja", "uva"
```

#### **Importações, destructuring**
```JavaScript
//arquivo.js
const entradas = [10, 5, 50, 10, 98, 23, 33, 44, 100, 1, 7];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };

//arquivomain.js
const { gets, print } = require('./arquivomain');

const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    }
}
print(maiorValorEncontrado);
```

O destructuring é uma funcionalidade do JavaScript que permite extrair dados de arrays e objetos de maneira mais concisa e fácil. Em vez de acessar cada elemento do array ou cada propriedade do objeto individualmente, podemos usar a sintaxe de destructuring para extrair esses valores em variáveis separadas.

Aqui está um exemplo simples de destructuring em arrays:

```JavaScript
const lista = [1, 2, 3];

const [a, b, c] = lista;

console.log(a); // imprime 1
console.log(b); // imprime 2
console.log(c); // imprime 3


const pessoa = {
  nome: "João",
  idade: 30
};

const { nome, idade } = pessoa;

console.log(nome); // imprime "João"
console.log(idade); // imprime 30

```