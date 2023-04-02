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

function precoCombustivelF(tipoCombustivel){
    
    const etanol = 5.79;
    const gasolina = 6.79;
    let precoCombustivel = 0.0

    if(tipoCombustivel === 'Etanol'){
        precoCombustivel = etanol;
    }else{
        precoCombustivel = gasolina;
    }
    return precoCombustivel
}

function valorDaViagem(distanciaDaViagemEmKm, KmPorLitros, precoCombustivel){
    const valorDaViagem = (distanciaDaViagemEmKm / KmPorLitros) * precoCombustivel 
    return valorDaViagem
}

function main(){
    
    const tipoCombustivel = 'Etanol';
    const KmPorLitros = 1; //20 km por litro
    const distanciaDaViagemEmKm = 100; //30km
    
    const precoCombustivel = precoCombustivelF(tipoCombustivel);

    
    valor = valorDaViagem(distanciaDaViagemEmKm, KmPorLitros, precoCombustivel)
    
    console.log("Valor da viagem: R$" + valor.toFixed(2))
}

main();