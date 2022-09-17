const prompt = require ("prompt-sync")()

const nome = prompt ("Nome do aluno: ")
const nota1 = Number(prompt("1º Nota: "))
const nota2 = Number(prompt("2º Nota: "))

const media = (nota1 + nota2) / 2
// if para criar uma condição
// if else se (senão)

if (media >= 6) {
    console.log(`Parabéns ${nome}! voce foi aprovado (a)`)
} else {
    console.log(`Ops.. ${nome}.voce foi reprovado(a)`)
}
console.log(`Media: ${media.toFixed(1)}`)  
