const prompt = require("prompt-sync")()

const nome = prompt("Nome do Produto ")
const preco = Number(prompt("Preço do produto "))
const parcela = preco / 3
if (preco < 100){
    console.log(`${nome} será somente a vista`)
} else {
    console.log(`${nome} Pode ser pago em 3x de ${parcela}`)
}
// Ler decrição e preço de um produto .Se o preço for inferior a 100 exibir somente a visa , se nao exibir pode pagar em 3x / produto sapato preço 120