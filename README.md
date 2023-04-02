# **Potência Tech Angular Developer Powered by iFood**

Repositório para armazenar o código do Desafio I, registrar as lições aprendidas e manter o endereço para os próximos desafios.

## 🗨️ **Sumário**

* [Anotações](https://github.com/RonielNunes/PotenciaTechAngularDeveloper-PoweredbyiFood-df-01#-anota%C3%A7%C3%B5es)
* [Desafio II](https://github.com/RonielNunes/PotenciaTechAngularDeveloper-PoweredbyiFood-df-01#desafio-ii)
* [Desafio III](https://github.com/RonielNunes/PotenciaTechAngularDeveloper-PoweredbyiFood-df-01#desafio-iii)
* [Desafio IV](https://github.com/RonielNunes/PotenciaTechAngularDeveloper-PoweredbyiFood-df-01#desafio-iv)
* [Desafio V](https://github.com/RonielNunes/PotenciaTechAngularDeveloper-PoweredbyiFood-df-01#desafio-v)

## 💡 **Anotações**

#### **Geral**

- Lembretes: 
    - `CTRL + SHIFT + V`: visualizar markdown
        - Markdown Preview Enhanced
        - Markdown All in One
    - `Fixed #<n>`: vincular commit ao issue
    - `alt`: para selecionar diversas linhas
    - `depuração no vscode`: faz a marcação com o ponto no código a partir do ponto desejado(click na marção de linha, ponto vermelho). No painel lateral esquerdo acesse `Run and Debug`, clique novamente no mesmo após abrir e depois selecione `node`. A partir desses passos, teremos os controladores para ver a execução.

#### **Anotações da pokedex** 

- Pokedex
    - https://dribbble.com/
    - `npm install -g http-server`
    - `http-server ./` start server http-server
    - https://cdnjs.com/libraries/normalize
    -   https://fonts.google.com/
    - https://pokeapi.co/
    
```Javascript
Requisição HTTP
URL: https://pokeapi.co/api/v2/polemon
${endereço}/${path = caminho de identificação do recurso}

Request Method: GET / POST / PUT / DELETE //CRUD

//PATH PARAMS E QUERY STRING
URL: https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0
// ?limit=100000&offset=0 QUERY STRING, identificado como após ?, & identifica separação de identificadores(variáveis)
```

```JavaScript
const offset = 0;
const limit = 10; 
const url = `https://poleapi.co/api/v2/polemon?offset=${offset}&limit=${limit}`

fetch(url)
    .then(function (response){
        return response.json();
    })
    .then(function(jsonBody){
        console.log(jsonBody);
    })
    .catch(function(error){
        console.error(error);
    })
    .finally(function(){
        console.log('requisição concluída!');
    })



const offset = 0;
const limit = 10; 
const url = `https://poleapi.co/api/v2/polemon?offset=${offset}&limit=${limit}`

fetch(url)
    .then( (response) => {
        debugger //comando para debugar no js pelo inspecionar
        return response.json();
    })
    .then((jsonBody)=>{
        console.log(jsonBody);
    })
    .catch((error){=>
        console.error(error);
    })
    .finally(()=>{
        console.log('requisição concluída!');
    });

const offset = 0;
const limit = 10; 
const url = `https://poleapi.co/api/v2/polemon?offset=${offset}&limit=${limit}`

fetch(url)
    .then( (response) => response.json())
    .then((jsonBody)=> console.log(jsonBody))
    .catch((error)=> console.error(error))
    .finally(()=> console.log('requisição concluída!'))

```






- `<Exemplo para próxima anotação>`
- [Primeiras páginas interativas com JavaScript-documentation-javascript](./assets/documentation-javascript.md)

### **Protocolo cliente servidor**

O protocolo cliente-servidor é uma arquitetura de rede em que um sistema de computador é dividido em duas partes principais: o cliente e o servidor. O cliente e o servidor são programas independentes que se comunicam entre si através da Internet ou de uma rede local. O objetivo principal dessa arquitetura é permitir que um grande número de usuários acesse e utilize serviços de um servidor de forma eficiente.

O cliente é um programa que envia solicitações para o servidor, geralmente em busca de recursos, como páginas da web, arquivos, dados, etc. O servidor é um programa que recebe as solicitações do cliente e processa-as, retornando uma resposta apropriada. O servidor pode executar funções complexas, como executar operações de banco de dados, realizar cálculos, gerar conteúdo dinâmico, entre outros.

A comunicação entre o cliente e o servidor é baseada em um conjunto de regras e protocolos que definem como as informações são trocadas entre os dois programas. O protocolo mais comum para a comunicação entre cliente e servidor é o HTTP (Hypertext Transfer Protocol), que é usado para transferir dados na web. O HTTP define uma série de métodos que o cliente pode usar para solicitar informações do servidor, como GET, POST, PUT e DELETE.

Em resumo, o protocolo cliente-servidor é uma maneira de organizar e gerenciar sistemas de computador, permitindo que muitos usuários acessem recursos de um servidor centralizado de forma eficiente e confiável. Essa arquitetura é amplamente utilizada em aplicações web, serviços em nuvem, jogos online e muitas outras áreas da computação.

## 🟥**Desafio II**

- **Tema:**
- **Objetivo:**
- **Tecnologias utilizadas:**
- **Link repositório:**

----

## 🟧**Desafio III**

- **Tema:**
- **Objetivo:**
- **Tecnologias utilizadas:**
- **Link repositório:**

----

## 🟩**Desafio IV**
- **Tema:**
- **Objetivo:**
- **Tecnologias utilizadas:**
- **Link repositório:**

----

## 🟦**Desafio V**
- **Tema:**
- **Objetivo:**
- **Tecnologias utilizadas:**
- **Link repositório:**