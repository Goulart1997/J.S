const prompt = require("prompt-sync")()

const nome = prompt ("nome da aluna")
const anonasc = Number(prompt("ano nascimento"))
const idade = Number(prompt("idade"))

const maioridade = anonasc - idade

if   (maioridade >= 18){
    console.log(`Voce é maior de idade ${nome}`)
}
    else { console.log(`Voce nao é maior de idade ${nome}`)

    }
    // Ler o nome e ano do nascimento de um aluno . Mostrar a idade e se é maior de idade ou menor de idade 
// nome Roberta Ano nasc 2000 Idade 22  Roberta voce é maior de idade
    
    
