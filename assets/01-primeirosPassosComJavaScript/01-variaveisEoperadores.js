/*
Faça um programa para calcular o valor de uma viagem. 

Você terá 3 variáveis. Sendo elas:
1- Preço do combustível;
2- Gasto médio de combustível do carro por KM;
3- Distância em KM da viagem;
*/

const precoCombustivel = 5.79;
const KmPorLitros = 1; //20 km por litro
const distanciaDaViagemEmKm = 100; //30km

const valorDaViagem = (distanciaDaViagemEmKm / KmPorLitros) * precoCombustivel 

console.log("Valor da viagem: R$" + valorDaViagem.toFixed(2))