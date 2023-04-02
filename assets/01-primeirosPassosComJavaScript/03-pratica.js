/*
1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;


2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;


3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

*/
const nota1 = 10
const nota2 = 2 
const nota3 = 7

const media = (nota1 + nota2 + nota3) / 3;

let classificacao = ''

if(media < 5){
    classificacao = 'reprocação';
}else 
if(media >= 5 && media < 7){
    classificacao = 'recuperação';
}else if(media >=7){
    classificacao = 'passou de semestre';
}else{
    classificacao = 'error';
}

console.log('Média: ' + media.toFixed(2) + ' Aluno: ' + classificacao )

const peso = 60
const altura = 1.78 

const IMC = peso / (altura * altura)
 
let condicao = ''

if (IMC < 18.5){
    condicao = 'Abaixo do Peso';
}else if (IMC >= 18.5 && IMC < 25){
    condicao = 'Peso normal';
}else if (IMC >= 25 && IMC < 30){
    condicao = 'Acima do peso';
}else if(IMC >=30 && IMC < 40){
    condicao = 'Obeso';
}else if(IMC >=40){
    condicao = 'Obesidade Grave';
}else{
    condicao = 'Error';
}

console.log('IMC: ' + IMC.toFixed(2))

const pagamento = 'PIX'
const valor = 100;
let desconto = 0
let juros = 0
let precoPago = 0

if(pagamento === 'debito'){
    desconto = 0.10;
}else if(pagamento === 'PIX' || pagamento === 'dinheiro'){
    desconto = 0.15;
}else if(pagamento <= 2){
    desconto = 0.0;
}else if(pagamento >= 3){
    desconto = 0.0;
    juros = 0.10
}

precoPago = valor - (valor * desconto) + (valor * juros)

console.log('Preço pago: R$ ' + precoPago.toFixed(2))

const numero = 10;
const numeroEmTexto = '10';
console.log(numero === numeroEmTexto);