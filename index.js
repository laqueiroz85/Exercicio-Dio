class heroi{
	constructor(nome, idade, classe, poder){
    	this.nome = nome
        this.idade = idade
        this.classe = classe
        this.poder = poder
    }
    
    atacar(){
    	console.log("O", this.classe, "atacou usando", this.poder)
    }
}   
let personagem = new heroi ("Stalo", 38, "Mago", "magia")
   
personagem.atacar()