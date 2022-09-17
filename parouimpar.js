const prompt  = require("prompt-sync")()

const numero = Number(prompt("Numero"))

if (numero %2 == 0){
    console.log (`o numero ${numero} é par`)
} 
else {
    console.log (`O numero ${numero} é impar`)
}