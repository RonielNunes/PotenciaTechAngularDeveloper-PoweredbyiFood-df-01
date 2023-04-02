// 1) Crie uma classe para representar carros. 
// Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
// Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
// gasto em reais para realizar este percurso.

// 2) Crie uma classe para representar pessoas.
// Para cada pessoa teremos os atributos nome, peso e altura.
// As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
// Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
// do seu IMC;

class Carro{
    constructor(marca,cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    valorPercurso(distancia, precoComb){
        return (this.gastoMedioPorKm * distancia) * precoComb;
    }
}

class Pessoa{
    constructor(nome,peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(){
        return this.peso / (this.altura * this.altura);
    }

    classicarIMC(){
        const IMC = this.calcularIMC()
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
        return condicao
    }
}


main =( function () {
    const car = new Carro('Fiat', 'azul', 1/20);
    console.log(`Dinheiro gasto no percurso ${car.valorPercurso(100,5.76)}.`);

    const p = new Pessoa('José', 33,1.75);
    console.log('Meu imc é: ' + p.classicarIMC())

})()