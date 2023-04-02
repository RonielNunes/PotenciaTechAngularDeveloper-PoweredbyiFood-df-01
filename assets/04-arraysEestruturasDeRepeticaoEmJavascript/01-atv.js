// 1) Crie um programa que dado um número imprima a sua tabuada.
tabuada = function(){
    for(let i = 1; i < 10; i++){
        for(let j = 1; j< 10; j++){
            console.log(`${i}x${j}=${i*j}`);
        }
        console.log();
    }
}
// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.
parList = function(){
    let lista = [1,2,3,4,5,6,7,8,9,10];
    for(let i = 0; i < lista.length; i++){
        if(lista[i] % 2 == 0){
            console.log(lista[i]);
        }
    }
}

// 3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".
nameWithV = function(){
    let lista = ['Vana', 'Bruna','Bea', 'Renan'];
    for(let i = 0; i< lista.length; i++){
        if(lista[i][0] =="V"){
            console.log(lista[i])
        }
    }
}
// 4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;
parListadd = function(){
    let lista = [];
    for(let i = 10; i < 50; i++){
        if(i % 2 == 0){
            lista.push(i)
        }
    }
    console.log(lista)
}
// 5) Dado uma lista com as médias tiradas pelos alunos. 
//Imprima todas as médias que ficaram de recuperação (média < 5).
//    Ex de lista = [2, 7, 3, 8, 10, 4]

// 6) Dado uma lista com as notas tiradas pelos alunos.
// imprima a maior nota.
//    Ex de lista de notas = [2, 7, 3, 8, 10, 4]





main = (function(){
    tabuada();
    parList();
    nameWithV();
    parListadd();
})();