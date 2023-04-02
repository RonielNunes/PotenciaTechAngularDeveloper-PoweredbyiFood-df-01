/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:

1 - Preço etanol
2 - Preço gasolina
3 - O tipo de combustível que está no seu carro
4 - Gasto médio de combustível do carro por KM
5 - Distância em KM da viagem

Imprima no console o valor que será gasto para realizar esta viagem.
*/


const etanol = 5.79;
const gasolina = 6.79;

let precoCombustivel = 0;

const tipoCombustivel = 'Etanol';

const KmPorLitros = 1; //20 km por litro
const distanciaDaViagemEmKm = 100; //30km

if(tipoCombustivel === 'Etanol'){
    precoCombustivel = etanol;
}else{
    tipoCombustivel = gasolina;
}

const valorDaViagem = (distanciaDaViagemEmKm / KmPorLitros) * precoCombustivel 

console.log("Valor da viagem: R$" + valorDaViagem.toFixed(2))