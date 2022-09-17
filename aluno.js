const prompt = require ("prompt-sync")()

const valor = Number(prompt("valor do jantar R$: "))

const taxa = valor *0.10
const total = valor + taxa


console.log(`Taxa do garçom R$: ${taxa.toFixed(2)}`)
console.log(`Taxa a pagar R$: ${taxa.toFixed(2)}`)
