const prompt = require("prompt-sync")()

const titulo = prompt("titulo do filme: ")
const duracao = Number(prompt("Duração: "))
// Math.floor arredonda o valor com virgula e deixa numero cheio
const horas = Math.floor(duracao/60)
const minutos = duracao % 60
// \n deixa uma linha em branco (quebra de liha)
console.log(`\no filme ${titulo} tem duração de: `)
console.log(`${horas} horas` )
console.log(`${minutos} minutos`)