const prompt = require("prompt-sync")()

const nome = prompt("Nome do Produto")
const preco = Number(prompt("Preço do produto"))
if (preco <= 100){
    console.log(`somente a vista`)
} else {
    console.log(`Pode pagar em 3x`)
}