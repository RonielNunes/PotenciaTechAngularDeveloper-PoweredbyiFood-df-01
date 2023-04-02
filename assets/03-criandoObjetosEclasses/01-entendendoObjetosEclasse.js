class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    apresentacao() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade}.`);
    }
}

function comparaIdade(p1,p2){
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho que ${p2.nome}.`)
    }else if(p1.idade < p2.idade){
        console.log(`${p2.nome} é mais velho que ${p1.nome}.`)
    }else{
        console.log(`Tem a mesma idade`)
    }
}

// função anônima e autoexecutável Main
main = (function() {

    const ana = new Pessoa('Ana', 20);
    const bruna = new Pessoa('Bruna', 21);

    comparaIdade(ana,bruna);

})();